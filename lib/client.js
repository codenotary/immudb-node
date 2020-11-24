require('dotenv').config()

const grpc = require('@grpc/grpc-js')
const empty = require('google-protobuf/google/protobuf/empty_pb');

const messages = require('../protos/build/schema_pb')
const services = require('../protos/build/schema_grpc_pb')
const util = require('./util')
const proofs = require('./proofs')
const root = require('./root')

let _client,
    _token,
    _metadata,
    _activeDatabase,
    _serverUUID,
    _serverVersion

const ImmudbClient = (config, callback) => {
  let auth = grpc.credentials.createInsecure()
  if (config.certs) {
    auth = grpc.credentials.createSsl(config.certs);
  }

  _client = new services.
    ImmuServiceClient(config.address, auth)

  _metadata = new grpc.Metadata()

  if (config.rootPath) {
    root.setRootPath({ path: config.rootPath })
  }

  const methods = {
    login,
    set,
    get,
    createDatabase,
    useDatabase,
    changePermission,
    listDatabases,
    listUsers,
    createUser,
    changePassword,
    logout,
    setActiveUser,
    printTree,
    health,
    count,
    scan,
    byIndex,
    history,
    zScan,
    iScan,
    currentRoot,
    zAdd,
    reference,
    setBatch,
    getBatch,
    safeSet,
    safeGet,
    updateAuthConfig,
    updateMTLSConfig,
    safeZAdd,
    inclusion,
    consistency,
    bySafeIndex,
    proofErr: proofs.errVerificationException.clientErr,
    shutdown: () => {
      root.commit()
      process.exit(0)
    },
  }

  health({}, (err) => {
    if (err) {
      return callback(err)
    }
    callback(null, methods)
  })
}

const login = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(login, params)
    }
  
    const req = new messages.LoginRequest()
    req.setUser(util.utf8Encode(params && params.username))
    req.setPassword(util.utf8Encode(params && params.password))
  
    _client.login(req, (err, res) => {
      if (err) {
        err.clientErr = 'Login error'
        return callback(err)
      }
      
      _token = res && res.getToken()
      _metadata && _metadata.remove('authorization')
      _metadata && _metadata.add('authorization', 'Bearer ' + _token)
      callback(null, {
        token: _token,
        warning : util.utf8Decode(res && res.getWarning())
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const createDatabase = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(createDatabase, params)
    }

    const req = new messages.Database();
    req.setDatabasename(params && params.database)
    _client.createDatabase(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Create database error'
        return callback(err)
      }
      callback()
    })
  } catch (err) {
    console.error(err)
  }  
}

const useDatabase = (params, callback) => {
  try {  
    if (!callback) {
      return util.asyncifyMethod(useDatabase, params)
    }

    const req = new messages.Database()
    req.setDatabasename(params && params.database)
    _client.useDatabase(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Use database error'
        return callback(err)
      }
      const token = res && res.getToken()
      _metadata && _metadata.remove('authorization')
      _metadata && _metadata.add('authorization', 'Bearer ' + token)
      _activeDatabase = params && params.database

      currentRoot({}, (err) => {
        if (err) {
          return callback(err)
        }

        callback(null, {
          token: token,
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const set = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(set, params)
    }

    const req = new messages.KeyValue()
    req.setKey(util.utf8Encode(params && params.key))
    req.setValue(util.utf8Encode(params && params.value))

    _client.set(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }  
}

const get = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(get, params)
    }

    const req = new messages.Key()
    req.setKey(util.utf8Encode(params && params.key))

    _client.get(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Get error'
        return callback(err)
      }

      callback(null, {
        key : util.utf8Decode(res && res.getKey()),
        value : util.utf8Decode(res && res.getValue()),
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const listDatabases = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(listDatabases, params)
    }

    const req = new empty.Empty()

    _client.databaseList(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'List databases error'
        return callback(err)
      }

      const dl = res && res.getDatabasesList()
      const l = []
      for (let i = 0; dl && i < dl.length; i++) {
        l.push(dl[i].getDatabasename())
      }

      callback(null, {
        databases : l,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const changePermission = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(changePermission, params)
    }

    const req = new messages.ChangePermissionRequest()
    req.setAction(messages.PermissionAction[params && params.action])
    req.setPermission(params && params.permission)
    req.setUsername(params && params.username)
    req.setDatabase(params && params.database)

    _client.changePermission(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Change permission error'
        return callback(err)
      }

      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const listUsers = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(listUsers, params)
    }

    const req = new empty.Empty()

    _client.listUsers(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'List users error'
        return callback(err)
      }

      const ul = res && res.getUsersList()
      const l = []
      for (let i = 0; ul && i < ul.length; i++) {
        let u = ul[i]

        const pl = u.getPermissionsList()
        const p = []
        for (let j = 0; j < pl.length; j++) {
          p.push({
            database: pl[j].getDatabase(),
            permission: pl[j].getPermission(),
          })
        }

        l.push({
          username: util.utf8Decode(u.getUser()),
          permissions: p,
          createdBy: u.getCreatedby(),
          createdAt: u.getCreatedat(),
          active: u.getActive(),
        })
      }

      callback(null, {
        users : l,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const createUser = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(createUser, params)
    }

    const req = new messages.CreateUserRequest()
    req.setUser(util.utf8Encode(params && params.username))
    req.setPassword(util.utf8Encode(params && params.password))
    req.setPermission(params && params.permission)
    req.setDatabase(params && params.database)

    _client.createUser(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Create user error'
        return callback(err)
      }

      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const changePassword = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(changePassword, params)
    }

    const req = new messages.ChangePasswordRequest()
    req.setUser(util.utf8Encode(params && params.username))
    req.setOldpassword(util.utf8Encode(params && params.old))
    req.setNewpassword(util.utf8Encode(params && params.new))

    _client.changePassword(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Change password error'
        return callback(err)
      }

      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const logout = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(logout, params)
    }

    const req = new empty.Empty()
    _client.logout(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Logout error'
        return callback(err)
      }

      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const setActiveUser = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(setActiveUser, params)
    }

    const req = new messages.SetActiveUserRequest()
    req.setUsername(params && params.username)
    req.setActive(params && params.active)

    _client.setActiveUser(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set active user error'
        return callback(err)
      }

      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const printTree = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(printTree, params)
    }

    const req = new empty.Empty()

    _client.printTree(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Print tree error'
        return callback(err)
      }

      const result = []
      const tl = res && res.getTList()
      for (let i = 0; tl && i < tl.length; i++) {
        let layer = tl[i]

        const ll = layer.getLList()
        const nodes = []
        for (let j = 0; j < ll.length; j++) {
          let node = ll[j]

          let refk = node.getRefk() == '' ? node.getRefk() :
            util.utf8Decode(node.getRefk())

          nodes.push({
            h: util.base64Encode(node.getH()),
            i: util.base64Encode(node.getI()),
            refk:  refk,
            ref: node.getRef(),
            cache: node.getCache(),
            root: node.getRoot(),
          })
        }

        result.push(nodes)
      }

      callback(null, {
        tree: result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const health = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(health, params)
    }

    const req = new empty.Empty()

    const call = _client.health(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Health error'
        return callback(err)
      }

      _serverVersion = res && res.getVersion().split(' ')[1]
      callback(null, {
        status: res && res.getStatus(),
        version: res && res.getVersion(),
      })
    })

    call.on('_metadata', (meta) => {
      _serverUUID = meta.get('immudb-uuid')[0]
    })
  } catch (err) {
    console.error(err)
  }
}

const count = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(count, params)
    }

    const req = new messages.KeyPrefix()
    req.setPrefix(util.utf8Encode(params && params.keyPrefix))

    _client.count(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Count error'
        return callback(err)
      }

      callback(null, {
        count : res && res.getCount(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const scan = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(scan, params)
    }

    const req = new messages.ScanOptions()
    req.setPrefix(util.utf8Encode(params && params.keyPrefix))
    req.setOffset(util.utf8Encode(params && params.offset))
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)
    req.setDeep(params && params.deep)

    _client.scan(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Scan error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }

      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const byIndex = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(byIndex, params)
    }

    const req = new messages.Index()
    req.setIndex(params && params.index)

    _client.byIndex(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'By index error'
        return callback(err)
      }

      callback(null, {
        key: util.utf8Decode(res && res.getKey()),
        value: util.utf8Decode(res && res.getValue()),
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const history = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(history, params)
    }

    const req = new messages.HistoryOptions()
    req.setKey(util.utf8Encode(params && params.key))
    req.setOffset(params && params.offset)
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)

    _client.history(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'History error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }


      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }  
}

const zScan = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(zScan, params)
    }

    const req = new messages.ZScanOptions()
    req.setSet(util.utf8Encode(params && params.set))
    req.setOffset(util.utf8Encode(params && params.offset))
    req.setLimit(params && params.limit)
    req.setReverse(params && params.reverse)

    _client.zScan(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zScan error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }

      callback(null, {
        items : result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const iScan = (params, callback) => {
  try {
  if (!callback) {
      return util.asyncifyMethod(iScan, params)
    }

    const req = new messages.IScanOptions()
    req.setPagesize(params && params.pageSize)
    req.setPagenumber(params && params.pageNumber)

    _client.iScan(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'iScan error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item && item.getKey()),
          value: util.utf8Decode(item && item.getValue()),
          index: item && item.getIndex(),
        })
      }

      callback(null, {
        items : result,
        more: res && res.getMore(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const currentRoot = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(currentRoot, params)
    }

    const req = new empty.Empty()

    _client.currentRoot(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Current root error'
        return callback(err)
      }

      let payload = res && res.getPayload()
      let signature = res && res.getSignature()

      root.set({
        server: _serverUUID,
        database: _activeDatabase,
        root: payload && payload.getRoot(),
        index: payload && payload.getIndex(),
      })

      callback(null, {
        rootIndex: {
          index: payload && payload.getIndex(),
          root: payload && payload.getRoot(),
        },
        signature: {
          signature: signature && signature.getSignature(),
          publicKey: signature && signature.getPublickey(),
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const zAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(zAdd, params)
    }

    const req = new messages.ZAddOptions()
    req.setSet(util.utf8Encode(params && params.set))
    req.setScore(params && params.score)
    req.setKey(util.utf8Encode(params && params.key))

    _client.zAdd(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'zAdd error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const reference = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(reference, params)
    }

    const req = new messages.ReferenceOptions()
    req.setReference(util.utf8Encode(params && params.reference))
    req.setKey(util.utf8Encode(params && params.key))

    _client.reference(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Reference error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const setBatch = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(setBatch, params)
    }

    const req = new messages.KVList()

    for (let i = 0; params && params.keys && i < params.keys.length; i++) {
      const kv = new messages.KeyValue() 
      kv.setKey(util.utf8Encode(params && params.keys[i].key))
      kv.setValue(util.utf8Encode(params && params.keys[i].value))
      req.addKvs(kv)
    }

    _client.setBatch(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Set batch error'
        return callback(err)
      }

      callback(null, {
        index: res && res.getIndex(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const getBatch = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(getBatch, params)
    }

    const l = []
    for (let i = 0; params && params.keys && i < params.keys.length; i++) {
      const key = new messages.Key()
      key.setKey(util.utf8Encode(params && params.keys[i].key))
      l.push(key)
    }

    const req = new messages.KeyList()
    req.setKeysList(l)

    _client.getBatch(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Get batch error'
        return callback(err)
      }

      const result = []
      const il = res && res.getItemsList()
      for (let i = 0; il && i < il.length; i++) {
        let item = il[i]
        result.push({
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      }

      callback(null, {
        items: result,
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const safeSet = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(safeSet, params)
    }

    const kv = new messages.KeyValue()
    kv.setKey(util.utf8Encode(params && params.key))
    kv.setValue(util.utf8Encode(params && params.value))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeSetOptions()
    req.setKv(kv)
    req.setRootindex(index)

    _client.safeSet(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeSet error'
        return callback(err)
      }

      const verifyReq = {
        proof: {
          inclusionPath: res && res.getInclusionpathList(),
          consistencyPath: res && res.getConsistencypathList(),
          index: res && res.getIndex(),
          at: res && res.getAt(),
          leaf: res && res.getLeaf(),
          root: res && res.getRoot(),
        },
        item: {
          key: util.utf8Encode(params && params.key),
          value: util.utf8Encode(params && params.value),
          index: res && res.getIndex(),
        },
        oldRoot: root.get({
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: res && res.getRoot(),
          index: res && res.getAt(),
        })

        callback(null, {
          index: res && res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const safeGet = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(safeGet, params)
    }

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeGetOptions()
    req.setKey(util.utf8Encode(params && params.key))
    req.setRootindex(index)


    _client.safeGet(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'SafeGet error'
        return callback(err)
      }

      const proof = res && res.getProof()
      const item = res && res.getItem()
      const verifyReq = {
        proof: {
          inclusionPath: proof.getInclusionpathList(),
          consistencyPath: proof.getConsistencypathList(),
          index: proof.getIndex(),
          at: proof.getAt(),
          leaf: proof.getLeaf(),
          root: proof.getRoot(),
        },
        item: {
          key: item.getKey(),
          value: item.getValue(),
          index: item.getIndex(),
        },
        oldRoot: root.get({
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: proof.getRoot(),
          index: proof.getAt(),
        })

        callback(null, {
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const updateAuthConfig = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(updateAuthConfig, params)
    }

    const req = new messages.AuthConfig()
    req.setKind(params && params.auth)
    _client.updateAuthConfig(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Update auth config error'
        return callback(err)
      }
      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const updateMTLSConfig = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(updateMTLSConfig, params)
    }

    const req = new messages.MTLSConfig()
    req.setEnabled(params && params.enabled)
    _client.updateMTLSConfig(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'Update mtls config error'
        return callback(err)
      }
      callback()
    })
  } catch (err) {
    console.error(err)
  }
}

const safeZAdd = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(safeZAdd, params)
    }

    const options = new messages.ZAddOptions()
    options.setSet(util.utf8Encode(params && params.set))
    options.setScore(params && params.score)
    options.setKey(util.utf8Encode(params && params.key))

    const index = new messages.Index()
    index.setIndex(root.get({
      server: _serverUUID,
      database: _activeDatabase,
    }).index)

    const req = new messages.SafeZAddOptions()
    req.setZopts(options)
    req.setRootindex(index)

    _client.safeZAdd(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'safeZAdd error'
        return callback(err)
      }

      let key2 = proofs.setKey({
        key: util.utf8Encode(params && params.key),
        set: util.utf8Encode(params && params.set),
        score: params && params.score
      })

      const verifyReq = {
        proof: {
          inclusionPath: res && res.getInclusionpathList(),
          consistencyPath: res && res.getConsistencypathList(),
          index: res && res.getIndex(),
          at: res && res.getAt(),
          leaf: res && res.getLeaf(),
          root: res && res.getRoot(),
        },
        item: {
          key: key2,
          value: util.utf8Encode(params && params.key),
          index: res && res.getIndex(),
        },
        oldRoot: root.get({
          server: _serverUUID,
          database: _activeDatabase,
        }),
      }

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: res && res.getRoot(),
          index: res && res.getAt(),
        })

        callback(null, {
          index: res && res.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const inclusion = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(inclusion, params)
    }

    const req = new messages.Index()
    req.setIndex(params && params.index)

    _client.inclusion(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'inclusion error'
        return callback(err)
      }

      callback(null, {
        at: res && res.getAt(),
        index: res && res.getIndex(),
        root: res && res.getRoot(),
        leaf: res && res.getLeaf(),
        inclusionPath: res && res.getPathList(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const consistency = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(consistency, params)
    }

    const req = new messages.Index()
    req.setIndex(params && params.index)

    _client.consistency(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'consistency error'
        return callback(err)
      }

      callback(null, {
        oldRootIndex: res && res.getFirst(),
        at: res && res.getSecond(),
        oldRoot: res && res.getFirstroot(),
        newRoot: res && res.getSecondroot(),
        consistencyPath: res && res.getPathList(),
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const bySafeIndex = (params, callback) => {
  try {
    if (!callback) {
      return util.asyncifyMethod(bySafeIndex, params)
    }

    let oldRoot = root.get({
      server: _serverUUID,
      database: _activeDatabase,
    })

    const index = new messages.Index()
    index.setIndex(oldRoot.index)

    const req = new messages.SafeIndexOptions()
    req.setIndex(params && params.index)
    req.setRootindex(index)

    _client.bySafeIndex(req, _metadata, (err, res) => {
      if (err) {
        err.clientErr = 'bySafeIndex error'
        return callback(err)
      }

      const proof = res && res.getProof()
      const item = res && res.getItem()
      const verifyReq = {
        proof: {
          inclusionPath: proof.getInclusionpathList(),
          consistencyPath: proof.getConsistencypathList(),
          index: proof.getIndex(),
          at: proof.getAt(),
          leaf: proof.getLeaf(),
          root: proof.getRoot(),
        },
        item: {
          key: item.getKey(),
          value: item.getValue(),
          index: item.getIndex(),
        },
        oldRoot: oldRoot,
      }

      oldRoot = root.get({
        server: _serverUUID,
        database: _activeDatabase,
      })

      proofs.verify(verifyReq, (err) => {
        if (err) {
          return callback(err)
        }

        root.set({
          server: _serverUUID,
          database: _activeDatabase,
          root: proof.getRoot(),
          index: proof.getAt(),
        })

        callback(null, {
          key: util.utf8Decode(item.getKey()),
          value: util.utf8Decode(item.getValue()),
          index: item.getIndex(),
        })
      })
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = ImmudbClient 

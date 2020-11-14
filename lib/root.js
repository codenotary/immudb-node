const fs = require('fs')
const process = require('process')

const messages = require('../proto/schema_pb')

let root = {}
let rootPath

const exitHandler = () => {
  if (rootPath) {
    let data = JSON.stringify(root)
    fs.writeFileSync(rootPath, data)
  }
}

process.on('exit', exitHandler)
process.on('SIGINT', exitHandler)
process.on('uncaughtException', exitHandler)

module.exports = {
  set: (params) => {
    const rootPb = new messages.RootIndex()
    rootPb.setIndex(params.index)
    rootPb.setRoot(params.root)

    if (!root[params.server]) {
      root[params.server] = {
        [params.database]: rootPb,
      }
      return
    }

    root[params.server][params.database] = rootPb
  },

  get: (params) => {
    let serverRoot = root[params.server]
    if (!serverRoot) {
      return {
        index: 0,
        root: [],
      }
    }

    let rootPb = serverRoot[params.database]
    if (!rootPb) {
      return {
        index: 0,
        root: [],
      }
    }

    return {
      index: rootPb.getIndex(),
      root: rootPb.getRoot(),
    }
  },

  setRootPath: (params) => {
    rootPath = params.path

    if (fs.existsSync(rootPath)) {
      let rawdata = fs.readFileSync(rootPath)
      root = JSON.parse(rawdata)
      return
    }

    let data = JSON.stringify(root)
    fs.writeFileSync(rootPath, data)
  },

  commit: () => {
    let data = JSON.stringify(root)
    fs.writeFileSync(rootPath, data)
  },
}

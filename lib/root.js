const fs = require('fs')

const root = {}

module.exports = {
  set: (params) => {
    root[params.database] = {
      index: params.index,
      root: params.root,
    }
  },

  get: (params) => {
    return root[params.database]
  },

  setFile: (params) => {
    const path = `${__dirname}/root/${params.serverName}.json`
    let root = {}
    if (fs.existsSync(path)) {
      let rawdata = fs.readFileSync(path)
      root = JSON.parse(rawdata)
    }
    root[params.database] = {
      index: params.index,
      root: params.root,
    }
    let data = JSON.stringify(root)
    fs.writeFileSync(path, data)
  },

  getFile: (params) => {
    const path = `${__dirname}/root/${params.serverName}.json`
    if (fs.existsSync(path)) {
      let rawdata = fs.readFileSync(path)
      let root = JSON.parse(rawdata)
      return root[params.database]
    }
    return {
      index: 0,
      root: [],
    }
  },
}


// TODO(andrew): Write roots to file.
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
}

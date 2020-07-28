module.exports = function (source, map) {
  let ns = source
  if (source.indexOf('webpackChunkName') != -1) {
    ns = `${source.replace(/\/\* webpackChunkName: ".*" \*\//g, `/* webpackChunkName: "page" */`)}`
  }
  this.callback(
    null,
    source,
    map
  )
}

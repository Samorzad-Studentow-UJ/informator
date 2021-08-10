const visit = require('unist-util-visit')

module.exports = function nuxtContentTables() {
  return function transformer(tree, file) {
    visit(tree, 'element', visitor)

    function visitor(node) {
      if (node.tagName === 'table') {
        node.tagName = 'content-table'
      }
    }
  }
}

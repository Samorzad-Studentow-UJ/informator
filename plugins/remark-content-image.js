const visit = require('unist-util-visit')

module.exports = function nuxtContentImages() {
  return function transformer(tree, file) {
    // noinspection JSCheckFunctionSignatures
    visit(tree, 'image', visitor)

    function visitor(node, index, parent) {
      parent.children[index] = {
        type: 'html',
        value: `<content-image src='${node.url}' title='${node.title}' alt='${node.alt}'></content-image>`
      }
    }
  }
}

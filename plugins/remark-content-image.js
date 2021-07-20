const visit = require('unist-util-visit')

module.exports = function nuxtContentImages() {
  // console.log(info)
  return function transformer(tree, file) {
    visit(tree, 'image', visitor)

    function visitor(node, index, parent) {
      console.log(parent)
      parent.children[index] = {
        type: 'html',
        value: `<content-image src='${node.url}' title='${node.title}' alt='${node.alt}'></content-image>`
      }
      console.log(parent)
    }
  }
}

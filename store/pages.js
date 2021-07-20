import { make } from 'vuex-pathify'

function dirName(parent) {
  return parent.substring(0, parent.lastIndexOf('/'))
}

function capitalize(s) {
  return s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s
}

function comparePages(page1, page2) {
  return ((page1.order !== undefined) ? parseInt(page1.order) : 0) - ((page2.order !== undefined) ? parseInt(page2.order) : 0)
}

function buildPageTree(articles, context) {
  articles.forEach(item => {
    item.path = dirName(item.path)
  })
  articles.forEach(item => {
    item.stub = false
  })
  const byPath = Object.fromEntries(articles.map((item) => ([item.path, item])))
  Object.keys(byPath).forEach(path => {
    let parent = path
    do {
      parent = dirName(parent)
      if (!(parent in byPath)) {
        byPath[parent] = { path: parent, title: capitalize(parent.substring(parent.lastIndexOf('/') + 1)), stub: true }
      }
    } while (parent.length > 1)
  })
  Object.keys(byPath).forEach(key => {
    byPath[key].subpages = []
    byPath[key].parent = null
  })
  Object.keys(byPath).forEach(path => {
    const parent = dirName(path)
    if (parent in byPath && path !== '') {
      byPath[parent].subpages.push(byPath[path])
      byPath[path].parent = parent
    }
  })
  Object.keys(byPath).forEach(path => {
    byPath[path].subpages.sort(comparePages)
  })
  byPath[''].subpages.forEach(item => {
    item.parent = null
  })
  return [byPath[''].subpages, byPath]
}

export const state = () => {
  return {
    tree: [],
    pages: []
  }
}

export const mutations = make.mutations(state)

export const actions = {
  init(context) {
    return this.$content('', { deep: true }).only(['title', 'path', 'icon', 'order']).fetch().then(res => {
      const [tree, pages] = buildPageTree(res, this)
      context.commit('SET_PAGES', pages)
      context.commit('SET_TREE', tree)
    })
  }
}

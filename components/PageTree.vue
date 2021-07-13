<template>
  <p v-if='$fetchState.pending'>Fetching mountains...</p>
  <p v-else-if='$fetchState.error'>An error occurred :(</p>
  <p v-else>{{ tree }}</p>
</template>

<script>
export default {
  name: 'PageTree',
  data() {
    return {
      tree: undefined
    }
  },
  async fetch() {
    await Promise.all([
      this.$content(this.$i18n.locale, { deep: true }).where({ slug: { $ne: 'index' } }).only(['title', 'path']).fetch(),
    ]).then(res => {
        this.tree = this.transformTree(...res)
      }
    )
  },
  methods: {
    transformIconMap(result) {
      return Object.fromEntries(result.icons.map((item) => ([item.path, item.icon])))
    },
    transformTree(articles) {
      // const byPath = Object.fromEntries(articles.map((item) => ([item.path, item])))
      // Object.keys(byPath).forEach(path => {
      //   let parent = path
      //   // eslint-disable-next-line no-unreachable-loop
      //   do {
      //     parent = parent.substring(0, parent.lastIndexOf('/'))
      //     byPath[parent] = {path: parent}
      //   } while (parent.length > this.$i18n.locale.length + 1)
      // })
      // Object.keys(byPath).forEach(key => {
      //   byPath[key].subpages = []
      // })
      // Object.keys(byPath).forEach(key => {
      //   const path = byPath[key].path
      //   const parent = path.substring(0, path.lastIndexOf('/'))
      //   if (parent in byPath) {
      //     byPath[parent].subpages.push(byPath[key])
      //   }
      // })
      // return byPath['/' + this.$i18n.locale]
      return articles
    }
  }
}
</script>



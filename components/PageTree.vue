<template>
  <v-list>
    <v-list-item
      :to='localePath("/")' exact-path nuxt>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $t('home') }}</v-list-item-title>
    </v-list-item>
    <page-tree-item v-for='row in currentTree' :key='row.path' :row='row' />
  </v-list>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'PageTree',
  data() {
    return {}
  },
  computed: {
    tree: get('pages/tree'),
    currentTree() {
      const tree = this.tree.find(el => el.path === '/' + this.$i18n.locale)
      return tree !== undefined ? tree.subpages : []
    }
  }
}
</script>



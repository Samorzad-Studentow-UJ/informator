<template>
  <!--  <v-treeview :items='currentTree' item-key='path' item-text='title' item-children='subpages'-->
  <!--              activatable hoverable color='secondary'>-->
  <!--    <template #append='{ item }'>-->
  <!--      <v-icon v-if='item.icon'>-->
  <!--        {{ item.icon }}-->
  <!--      </v-icon>-->
  <!--    </template>-->
  <!--  </v-treeview>-->

  <v-list>
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
      console.log(this.tree)
      return this.tree.find(el => el.path === '/' + this.$i18n.locale).subpages
    }
  },
  methods: {
    onClick(el) {
      console.log(el)
    }
  }
}
</script>



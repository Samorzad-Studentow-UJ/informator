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
    <v-list-group
      v-for='row in currentTree'
      :key='row.path'
      :prepend-icon='row.icon'
      :to='row.path + "/"'

    >
      <template v-slot:activator>
        <v-list-item-title>{{ row.title }}</v-list-item-title>
      </template>
      <v-treeview :items='row.subpages' item-key='path' item-text='title' item-children='subpages'
                  activatable hoverable color='secondary' dense>
        <template #prepend='{ item }'>
          <v-icon v-if='item.icon'>
            {{ item.icon }}
          </v-icon>
        </template>
      </v-treeview>

    </v-list-group>
  </v-list>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'PageTree',
  data() {
    return {
    }
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



<template>
  <v-list-group
    v-if='row.subpages.length > 0'
    :prepend-icon='"mdi-" + row.icon'
  >
    <template #activator>
      <v-list-item-title>{{ row.title }}</v-list-item-title>
    </template>
    <page-tree-sub-item
      v-for='item in row.subpages'
      :key='item.path'
      :row='item'
    />

  </v-list-group>
  <v-list-item
    v-else
    :to='row.path + "/"'
    exact-path
    nuxt>
    <v-list-item-icon>
      <v-icon v-if='row.icon'>mdi-{{ row.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ row.title }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: 'PageTreeItem',
  props: {
    'row': {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    active: null
  })
}
</script>

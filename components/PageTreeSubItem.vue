<template>
  <v-list-group
    v-if='row.subpages.length > 0'
    no-action
    sub-group
  >
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>{{ row.title }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon>mdi-{{ row.icon }}</v-icon>
      </v-list-item-icon>
    </template>

    <v-list-item
      v-for='subitem in row.subpages'
      :key='subitem.path'
      :to='subitem.path + "/"'
      exact-path
      nuxt
    >
      <v-list-item-title v-text='subitem.title'></v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-{{ subitem.icon }}</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
  <v-list-item
    v-else
    :to='row.path + "/"'
    nuxt
    exact-path>
    <v-list-item-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ row.title }}</v-list-item-title>
    <v-list-item-icon>
      <v-icon v-if='row.icon'>mdi-{{ row.icon }}</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  name: 'PageTreeItem',
  data: () => ({
    active: null
  }),
  props: {
    'row': {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

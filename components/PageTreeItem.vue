<template>
  <v-list-group
    v-if='row.subpages.length > 0'
    :prepend-icon='"mdi-" + row.icon'
    :to='row.path + "/"'
  >
    <template #activator>
      <v-list-item-title>{{ row.title }}</v-list-item-title>
    </template>
    <v-treeview :items='row.subpages' item-key='path' item-text='title' item-children='subpages'
                activatable hoverable color='secondary' dense>
      <template #prepend='{ item }'>
        <v-icon v-if='item.icon'>
          mdi-{{ item.icon }}
        </v-icon>
      </template>
    </v-treeview>

  </v-list-group>
  <v-list-item
    v-else
    :prepend-icon='row.icon'
    :to='row.path + "/"'>
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
  }
}
</script>

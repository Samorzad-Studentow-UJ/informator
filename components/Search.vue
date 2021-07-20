<template>
  <v-autocomplete
    v-model='select'
    :loading='loading'
    :items='items'
    item-text='title'
    item-value='path'
    :search-input.sync='search'
    class='mx-4'
    flat
    prepend-inner-icon='mdi-magnify'
    hide-no-data
    hide-details
    no-filter
    solo
  >
    <template #item='{ item, on, attrs }'>
      <v-list-item v-bind='attrs' v-on='on' @click='onClick(item)'>
        <v-list-item-content>
          <v-list-item-title v-text='item.title'></v-list-item-title>
          <v-list-item-subtitle v-text='getDescription(item)'></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      select: '',
      loading: false,
      items: [],
      search: ''
    }
  },
  watch: {
    async search(searchQuery) {
      if (searchQuery === null || searchQuery.length < 1) {
        this.items = []
        return
      }
      this.loading = true
      this.items = await this.$content(this.$i18n.locale,
        { deep: true, text: true })
        .limit(5)
        .search(searchQuery)
        .fetch()
      this.loading = false
    }
  },
  methods: {
    getDescription(item) {
      if (item.description.length > 100) {
        console.log(item.description.substring(0, 100) + '...')
        return item.description.substring(0, 100) + '...'
      }
      return item.description
    },
    getLink(item) {
      const path = item.path
      return path.substring(0, path.lastIndexOf('/'))
    },
    onClick(item) {
      this.items = []
      this.select = ''
      this.search = ''
      this.$router.push(this.getLink(item) + '/')
    }
  }
}
</script>


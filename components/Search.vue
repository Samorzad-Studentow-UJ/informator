<template>
  <v-autocomplete
    v-model='select'
    :loading='loading'
    :items='items'
    :search-input.sync='search'
    cache-items
    class='mx-4'
    flat
    prepend-inner-icon='mdi-magnify'
    hide-no-data
    hide-details
    solo
  ></v-autocomplete>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      select: [],
      loading: false,
      items: [],
      search: undefined
    }
  }
}
</script>


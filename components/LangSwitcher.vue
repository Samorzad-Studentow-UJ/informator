<template>
  <v-menu
    left
    bottom
  >
    <template #activator='{ on, attrs }'>
      <v-btn
        class='px-1'
        text
        v-bind='attrs'
        v-on='on'
      >
        <v-icon>mdi-translate</v-icon>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for='locale in $i18n.locales'
        :key='locale.code'
        :to='switchLocalePath(locale.code)'
        nuxt
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LangSwitcher'
}
</script>


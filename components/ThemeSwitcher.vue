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
        <v-icon>mdi-contrast-box</v-icon>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for='item in THEMES'
        :key='item.key'
        @click='onClick(item.key)'
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { sync } from 'vuex-pathify'
import { Themes } from '~/store/user'

export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      THEMES: [
        {
          key: Themes.LIGHT,
          name: 'Light'
        },
        {
          key: Themes.DARK,
          name: 'Dark'
        },
        {
          key: Themes.HIGH_CONTRAST,
          name: 'High contrast'
        }
      ]
    }
  },
  computed: {
    theme: sync('user/theme')
  },
  methods: {
    onClick(key) {
      this.theme = key
    }
  }
}
</script>



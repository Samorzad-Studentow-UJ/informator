<template>
  <v-btn
    class='px-1'
    text
    @click='onClick'
  >
    <v-icon>mdi-contrast-box</v-icon>
  </v-btn>
</template>

<script>
import { sync } from 'vuex-pathify'
import { Themes } from '~/store/user'

export default {
  name: 'ThemeSwitcher',
  data() {
    return {}
  },
  computed: {
    theme: sync('user/theme')
  },
  methods: {
    onClick() {
      this.theme = (this.theme === Themes.DARK) ? Themes.LIGHT : Themes.DARK
    }
  }
}
</script>



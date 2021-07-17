<template>
  <v-app>
    <v-app-bar
      flat
      app
      clipped-left
      clipped-right
      height='80'
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' class='hidden-lg-and-up' />
      <v-img
        :src='logo'
        alt='Logo SSUJ'
        max-height='70'
        max-width='150'
        contain
        class='my-2 mr-2 hidden-md-and-down' />
      <v-spacer />
      <search />
      <v-spacer />
      <lang-switcher />
      <theme-switcher />
    </v-app-bar>
    <v-navigation-drawer
      v-model='drawer'
      app
      clipped
      floating
      width='300'
    >
      <page-tree class='my-2' />
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer padless app class='hidden-sm-and-down'>
      <v-col
        class='text-center'
        cols='12'
      >
        {{ new Date().getFullYear() }} — <strong><a class='text-decoration-none' href='https://samorzad.uj.edu.pl/'>
        Samorząd Studentów UJ</a></strong>
      </v-col>
    </v-footer>
    <v-footer padless class='hidden-md-and-up'>
      <v-col
        class='text-center'
        cols='12'
      >
        {{ new Date().getFullYear() }} — <strong><a class='text-decoration-none' href='https://samorzad.uj.edu.pl/'>
        Samorząd Studentów UJ</a></strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { get } from 'vuex-pathify'
import { Themes } from '~/store/user'

export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    theme: get('user/theme'),
    logo() {
      if (this.theme === Themes.LIGHT) {
        return '/ssuj.png'
      } else {
        return '/ssuj_white_transparent.png'
      }
    }
  },
  watch: {
    theme: {
      immediate: true,
      handler(val) {
        this.$vuetify.theme.dark = val === Themes.DARK || val === Themes.HIGH_CONTRAST
      }
    }
  }
}
</script>

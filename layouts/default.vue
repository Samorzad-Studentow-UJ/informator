<template>
  <v-app>
    <v-app-bar
      flat
      app
      clipped-left
      clipped-right
      height='80'
    >
      <v-app-bar-nav-icon class='hidden-lg-and-up' @click.stop='drawer = !drawer' />
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
      <theme-switcher />
      <lang-switcher />
    </v-app-bar>
    <v-navigation-drawer
      v-model='drawer'
      app
      clipped
      floating
      width='300'
    >
      <div class='mr-2 hidden-lg-and-up'>
        <v-list-item class='mr-2 hidden-lg-and-up'>
          <v-list-item-content>
            <v-img
              :src='logo'
              alt='Logo SSUJ'
              max-height='70'
              max-width='150'
              contain
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </div>

      <page-tree />
      <template #append>
        <v-list>
          <v-list-item v-if='pwaInstallPrompt' @click='pwaInstallPrompt.prompt()'>
            <v-list-item-icon>
              <v-icon>mdi-devices</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Install App</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer padless app class='hidden-md-and-down'>
      <v-col
        class='text-center'
        cols='12'
      >
        {{ new Date().getFullYear() }} — <strong><a class='text-decoration-none' href='https://samorzad.uj.edu.pl/'>
        {{ $t('ssuj') }}</a></strong>
      </v-col>
    </v-footer>
    <v-footer padless class='hidden-lg-and-up'>
      <v-col
        class='text-center'
        cols='12'
      >
        {{ new Date().getFullYear() }} — <strong><a class='text-decoration-none' href='https://samorzad.uj.edu.pl/'>
        {{ $t('ssuj') }}</a></strong>
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
      drawer: null,
      pwaInstallPrompt: null
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
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.pwaInstallPrompt = e
    })
    window.addEventListener('appinstalled', () => {
      this.pwaInstallPrompt = null
    })
  }
}
</script>

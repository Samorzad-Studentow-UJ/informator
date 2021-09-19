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
        eager
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
      width='330'
      :color='($vuetify.theme.dark) ? "#232323" : undefined'
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
      <v-scale-transition>
        <div v-if='pwaInstallPrompt && !pwaInstallSnackbar' class='pa-2 mt-4'>
          <v-btn
            block
            outlined
            small
            @click='pwaInstall'
          >
            <v-icon left>mdi-devices</v-icon>
            {{ $t('pwaInstall') }}
          </v-btn>
        </div>
      </v-scale-transition>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid style='height: 100%' class='pa-0'>
        <Nuxt />
      </v-container>
    </v-main>
    <v-snackbar
      v-model='pwaInstallSnackbar'
      :timeout='-1'
      bottom
      elevation='5'
      transition='fade-transition'
      app
    >
      {{ $t('pwaInstall') }}
      <template #action='{ attrs }'>
        <v-btn
          text
          v-bind='attrs'
          color='error'
          @click='pwaDismiss'
        >
          {{ $t('no') }}
        </v-btn>
        <v-btn
          text
          v-bind='attrs'
          color='success'
          @click='pwaInstall'
        >
          {{ $t('yes') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      :value='mounted && showCookieLaw'
      :timeout='-1'
      bottom
      elevation='5'
      transition='fade-transition'
      app
      vertical
    >
      {{ $t('cookieLaw') }}
      <template #action='{ attrs }'>
        <v-btn
          text
          v-bind='attrs'
          color='primary'
          href='https://portal.uj.edu.pl/polityka-prywatnosci'
          target='_blank'
        >
          {{ $t('privacyPolicy') }}
        </v-btn>
        <v-btn
          text
          v-bind='attrs'
          color='success'
          @click='showCookieLaw = false'
        >
          {{ $t('accept') }}
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { get, sync } from 'vuex-pathify'
import { Themes } from '~/store/user'

export default {
  data() {
    return {
      pwaInstallPrompt: null,
      pwaInstallSnackbar: false,
      mounted: false,
    }
  },
  computed: {
    drawer: sync('ui/drawer'),
    theme: get('user/theme'),
    pwaDismissed: sync('user/pwaDismissed'),
    showCookieLaw: sync('user/showCookieLaw'),
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
        this.$vuetify.theme.dark = val !== Themes.LIGHT
      }
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.pwaInstallPrompt = e
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.pwaInstallSnackbar = !this.pwaDismissed
      }
    })
    window.addEventListener('appinstalled', () => {
      this.pwaInstallPrompt = null
      this.pwaInstallSnackbar = false
    })
    this.mounted = true
  },
  methods: {
    pwaInstall() {
      this.pwaInstallSnackbar = false
      this.pwaInstallPrompt.prompt()
    },
    pwaDismiss() {
      this.pwaDismissed = true
      this.pwaInstallSnackbar = false
    }
  }
}
</script>

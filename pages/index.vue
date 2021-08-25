<template>
  <article class='fill-height'>
    <v-img dark :src='background_img' class='fill-height with-background' @load='endLoading()'>
      <div class='d-flex align-content-center justify-center flex-wrap flex-column fill-height'>
        <div class='text-center'>
          <img :src='uj_logo_img' :height='$vuetify.breakpoint.lgAndUp ? "250rem" : "150rem"' class='mb-5'
               alt='Collegium Novum' />
          <h1 class='text-lg-h1 text-h2 mb-3'>{{ $t('studentguide') }}</h1>
          <h2 class='text-lg-h4 text-h5'>{{ $t('ssuj') }}</h2>
          <v-progress-circular
            v-if='spinner'
            indeterminate
            class='mt-7'
            size='40'
          ></v-progress-circular>
          <v-btn v-if='!spinner' outlined x-large class='mt-6 hidden-lg-and-up' @click='drawer = true'>Spis treści
          </v-btn>
        </div>
      </div>
    </v-img>
  </article>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  data: () => ({
    loading: false,
    spinner: false
  }),
  computed: {
    drawer: sync('ui/drawer'),
    background_img() {
      return this.$img('/images/uj_novum_blue.jpg', {
        fit: 'inside',
        quality: 50,
        width: 1500,
        height: 1500
      })
    },
    uj_logo_img() {
      return this.$img('/images/uj_white.png', {
        fit: 'inside',
        quality: 80,
        width: 200,
        height: 200
      })
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      if (this.loading) {
        this.spinner = true
      }
    }, 100)
  },
  methods: {
    endLoading() {
      this.loading = false
      if (this.spinner) {
        setTimeout(() => {
          this.spinner = false
        }, 200)
      }
    }
  }

}
</script>

<style>
.with-background {
  background-color: #005ca7;
}

.with-background > .v-responsive__sizer {
  padding-bottom: 0 !important;
}

</style>

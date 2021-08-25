<template>
  <article class='fill-height'>
    <v-card flat tile dark class='fill-height' color='#005ca7'>
      <v-row class='py-5 d-flex align-content-center flex-wrap fill-height with-background'
             :style='`background-image: url("${background_img}");`'>
        <v-col class='text-center'>
          <div>
            <img :src='uj_logo_img' height='150rem' class='mb-2' alt='Collegium Novum' />
            <h1 class='text-h2'>{{ $t('studentguide') }}</h1>
            <h2 class='text-h5'>{{ $t('ssuj') }}</h2>
            <v-btn outlined x-large class='mt-4 hidden-lg-and-up' @click='drawer = true'>Spis treści</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </article>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  computed: {
    drawer: sync('ui/drawer'),
    background_img() {
      return this.$img('/images/uj_novum_blue.jpg', {
        fit: 'inside',
        quality: 75,
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
  }

}
</script>

<style scoped>
.with-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>

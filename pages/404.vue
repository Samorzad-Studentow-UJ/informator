<template>
  <v-card flat tile class='fill-height' color='#005ca7'>
    <v-row class='py-5 d-flex align-content-center flex-wrap fill-height with-background'
           :style='`background-image: url("${background_img}");`'>
      <v-card width='400' class='mx-auto mt-9' elevation='5'>
        <v-card-title>
          {{ $t('notFound') }}
        </v-card-title>
        <v-card-text class='text-center'>
          <v-icon x-large>mdi-emoticon-sad-outline</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text color='primary'
            href='/'
          >
            {{ $t('home') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {}
  },
  head() {
    const title = this.$t('notFound')
    return {
      title
    }
  },
  computed: {
    background_img() {
      return this.$img('/images/uj_novum_blue.jpg', {
        fit: 'inside',
        quality: 50,
        width: 1500,
        height: 1500
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

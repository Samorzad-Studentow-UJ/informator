<template>
  <v-img :src='background_img' class='fill-height with-background'>
    <div class='mx-3 d-flex align-content-center justify-center flex-wrap flex-column fill-height'>
      <v-card width='400' class='mx-auto mt-9' elevation='5'>
        <v-card-title v-if='error.statusCode === 404'>
          {{ $t('notFound') }}
        </v-card-title>
        <v-card-title v-else>
          {{ $t('error') }}
        </v-card-title>
        <v-card-text class='text-center'>
          <v-icon x-large>mdi-emoticon-sad-outline</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text color='primary'
            to='/'
          >
            {{ $t('home') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-img>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.$t('notFound') : this.$t('error')
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

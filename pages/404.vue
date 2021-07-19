<template>
  <v-row justify='center' align='center'>
    <v-col cols='12' sm='8' md='6'>
      <v-card>
        <v-card-title class='headline'>
          File not found
        </v-card-title>
        <v-card-text>
          <p>We're sorry, we couldn't find the page you requested.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color='primary'
            nuxt
            to='/'
            outlined
          >
            Back to main site
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

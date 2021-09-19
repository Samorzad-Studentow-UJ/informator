<template>
  <v-timeline-item>
    <span v-show='!$vuetify.breakpoint.smAndDown' slot='opposite'>{{ opposite }}</span>
    <v-card class='elevation-2'>
      <v-card-title class='text-h5'>
        {{ title }}
      </v-card-title>
      <v-card-subtitle v-show='$vuetify.breakpoint.smAndDown'>{{ opposite }}</v-card-subtitle>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    opposite: { type: String, required: true },
    title: { type: String, required: true }
  }
}
</script>

<template>
  <figure class='d-flex flex-column justify-space-between align-center ma-3'>
    <v-img
      :src='img'
      :alt='alt'
      :title='title'
      contain
      max-height='400' />
    <figcaption class='text-subtitle-2 mt-2'>{{ title }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: undefined },
    title: { type: String, default: undefined }
  },
  computed: {
    img() {
      return this.$img(this.src, {
        fit: 'inside',
        quality: 75,
        width: 1200,
        height: 400
      })
    },
  }
}
</script>

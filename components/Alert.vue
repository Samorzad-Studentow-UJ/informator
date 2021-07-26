<template>
  <div class='my-3'>
    <v-alert v-bind='$attrs'>
      <slot></slot>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>

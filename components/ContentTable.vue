<template>
  <div class='my-6'>
    <v-simple-table v-bind='$attrs'>
      <template #default>
        <slot></slot>
      </template>
    </v-simple-table>
  </div>
</template>

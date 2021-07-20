<template>
  <v-breadcrumbs class='px-0 pt-0'
                 :items='breadcrumbs'
  >
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
    <template #item='{ item }'>
      <v-breadcrumbs-item
        :to='item.href'
        exact
        :disabled='item.disabled'
        nuxt
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { get } from 'vuex-pathify'

function buildBreadCrumbs(path, pages) {
  const page = pages[path]
  if (page.parent === null) {
    return []
  }
  return [...buildBreadCrumbs(page.parent, pages), page]
}

export default {
  name: 'BreadCrumbs',
  computed: {
    pages: get('pages/pages'),
    breadcrumbs() {
      const path = `/${this.$i18n.locale}/${this.$route.params.pathMatch}`
      const breadCrumbs = buildBreadCrumbs(path, this.pages)
      const crumbs = [
        {
          text: this.$t('home'),
          disabled: false,
          href: this.localePath('/')
        }
      ]
      breadCrumbs.forEach(item => {
        crumbs.push({
          text: item.title,
          href: item.stub ? '#' : item.path + '/',
          disabled: item.stub === true
        })
      })
      return crumbs
    }
  }
}
</script>

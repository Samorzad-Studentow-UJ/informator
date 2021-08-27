<template>
  <PdfView v-if='article.pdf' :url='article.pdf'></PdfView>
  <div v-else class='fill-height d-flex flex-wrap flex-column justify-space-between'>
    <div class='article pa-4 pa-sm-6 pa-md-8' style='width: 100%'>
      <bread-crumbs />
      <article>
        <h1 class='text-h2 mb-5'>{{ article.title }}</h1>
        <nuxt-content :document='article' />
        <table-of-content :toc='article.toc' />
        <div class='text-caption text-right mt-4'>
          {{ $t('pageLastUpdated') }}: {{ (new Date(article.updatedAt)).toISOString().split('T')[0] }}
        </div>
      </article>
    </div>
    <v-footer padless color='rgba(0, 0, 0, 0)' class='mb-2'>
      <v-col
        class='text-center'
        cols='12'
      >
        {{ new Date().getFullYear() }} — <strong><a class='text-decoration-none' href='https://samorzad.uj.edu.pl/'>
        {{ $t('ssuj') }}</a></strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>


export default {
  name: 'ContentView',
  async asyncData({ $content, app, params, error }) {
    const path = `${app.i18n.locale}/${params.pathMatch}/index`
    try {
      const article = await $content(path).where({ stub: { $ne: true } }).fetch()
      if (!article) {
        return error({ statusCode: 404, message: 'Article not found' })
      }

      return {
        article
      }
    } catch(ex) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
  },
  data: () => ({}),
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>

<style lang='sass'>
.article
  max-width: 1200px
  margin-left: auto
  margin-right: auto

  p
    margin: 0.5rem 0

  blockquote
    border-left: 5px solid #eee
    padding: 8px 0 8px 24px !important

  hr
    margin-top: 20px
    margin-bottom: 20px
    border: 0
    border-top: 1px solid #eee

  .heading-link
    content: '#'

</style>

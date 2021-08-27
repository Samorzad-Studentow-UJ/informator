<template>
  <div>
    <v-navigation-drawer
      id='default-toc'
      v-model='drawer'
      v-scroll='onScroll'
      app
      class='py-4 pr-4 pl-3'
      clipped
      right
      floating
      width='250'
      :color='($vuetify.breakpoint.mobile) ? undefined : "rgb(0, 0, 0, 0)"'
    >
      <template
        v-if='toc.length'
        #prepend
      >
        <div
          class='mb-2 text-h6 font-weight-medium text--primary'
        >{{ $t('tos') }}
        </div>
      </template>

      <ul class='mb-6'>
        <router-link
          v-for='{ id, depth, text } in toc'
          :key='text'
          v-slot='{ href, isActive }'
          :to="'#' + id"
          exact
        >
          <li
            :class="{
            'primary--text router-link-active': isActive,
            'text--disabled': !isActive,
            'pl-6': depth === 3,
            'pl-9': depth === 4,
            'pl-12': depth === 5,
          }"
            class='pl-3 text-body-2 py-1 font-weight-regular'
          >
            <a
              :href='href'
              class='v-toc-link d-block transition-swing text-decoration-none'
              @click.prevent.stop='onClick(id)'
              v-text='text'
            />
          </li>
        </router-link>
      </ul>
    </v-navigation-drawer>
    <v-btn
      v-if='toc.length > 0'
      class='hidden-lg-and-up'
      color="accent"
      elevation="6"
      fab
      bottom
      right
      rounded
      fixed
      @click.stop='drawer = !drawer'
    ><v-icon>mdi-table-of-contents</v-icon></v-btn>
  </div>
</template>

<script>
import { get, sync } from 'vuex-pathify'

export default {
  name: 'TableOfContent',
  props: {
    'toc': {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    offsets: [],
    timeout: null,
    drawer: null,
  }),
  computed: {
    ...get('route', [
      'hash',
      'path'
    ]),
    scrolling: sync('ui/scrolling')
  },
  methods: {
    async onClick(hash) {
      hash = '#' + hash
      if (this.hash === hash) {
        return
      }
      this.scrolling = true
      this.$router.replace({ path: this.path, hash })
      await this.$vuetify.goTo(hash)
      this.scrolling = false
    },
    setOffsets() {
      const offsets = []
      const toc = this.toc.slice().reverse()
      for (const item of toc) {
        const section = document.getElementById(item.id)
        if (!section) continue
        offsets.push(section.offsetTop - 40)
      }
      this.offsets = offsets
    },
    async findActiveIndex() {
      const toc = this.toc
      const currentOffset = (
        window.pageYOffset ||
        document.documentElement.offsetTop ||
        0
      )
      if (currentOffset === 0) {
        if (this.hash) {
          this.$router.replace({ path: this.path })
        }
        return
      }
      if (this.offsets.length !== toc.length) {
        this.setOffsets()
      }
      const index = this.offsets.findIndex(offset => {
        return offset < currentOffset
      })
      let tindex = index > -1
        ? this.offsets.length - 1 - index
        : 0
      if (currentOffset + window.innerHeight === document.documentElement.offsetHeight) {
        tindex = this.toc.length - 1
      }
      const hash = '#' + this.toc[tindex].id
      if (hash === this.hash) {
        return
      }
      this.scrolling = true
      await this.$router.replace({
        path: this.path,
        hash
      })
      this.scrolling = false
    },
    onScroll() {
      clearTimeout(this.timeout)
      if (this.scrolling || !this.toc.length) {
        return
      }
      this.timeout = setTimeout(this.findActiveIndex, 17)
    }
  }
}
</script>

<style lang='sass'>
#default-toc
  ul
    list-style-type: none

  li
    border-left: 2px solid #e5e5e5

    &.router-link-active
      border-left-color: currentColor

  .v-toc-link
    color: inherit

  &.theme--dark
    li:not(.router-link-active)
      border-left-color: rgba(255, 255, 255, 0.5)
</style>

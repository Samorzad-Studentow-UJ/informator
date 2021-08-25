import { make } from 'vuex-pathify'

export const state = () => {
  return {
    scrolling: false,
    drawer: null
  }
}

export const mutations = make.mutations(state)

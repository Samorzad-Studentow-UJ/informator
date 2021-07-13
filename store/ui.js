import { make } from 'vuex-pathify'

export const state = () => {
  return {
    scrolling: false
  }
}

export const mutations = make.mutations(state)

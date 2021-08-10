import { make } from 'vuex-pathify'

export const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const state = () => {
  return {
    theme: Themes.LIGHT,
    pwaDismissed: false,
  }
}

export const mutations = make.mutations(state)

import { make } from 'vuex-pathify'

export const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
  HIGH_CONTRAST: 'contrast'
}

export const state = () => {
  return {
    theme: Themes.LIGHT
  }
}

export const mutations = make.mutations(state)

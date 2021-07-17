import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'app.0.1',
    paths: ['user'],
  })(store)
}

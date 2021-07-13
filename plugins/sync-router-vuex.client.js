const { sync } = require('vuex-router-sync')

export default ({ app }, inject) => {
  sync(app.store, app.router)
}



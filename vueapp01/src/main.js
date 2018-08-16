// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://www.apilayer.net/api/live?access_key=b7f93ed61b1b1ded3db75de606b6bc46')
      .then(response => (this.info = response.data.quotes))
  }
})

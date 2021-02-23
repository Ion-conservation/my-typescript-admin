import Vue from 'vue'
import App from './App.vue'

/* normalize.css */
import 'normalize.css/normalize.css'
import '@/style/index.less'


/* ant-design-vue */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)

/* vue add router */
import router from './router'

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

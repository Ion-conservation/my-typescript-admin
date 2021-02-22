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

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

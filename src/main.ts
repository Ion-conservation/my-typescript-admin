import Vue from 'vue'
import App from './App.vue'

/* normalize.css */
import 'normalize.css/normalize.css'

/* 全局样式 */
import '@/style/index.less'

/* vue-svgicon */
import VueSvgIcon from 'vue-svgicon'
Vue.use(VueSvgIcon, {
  tagName: "svg-icon"
})

/* ant-design-vue */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd)

/* lodash */
import * as _ from 'lodash'

/* vue add router */
import router from './router'

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

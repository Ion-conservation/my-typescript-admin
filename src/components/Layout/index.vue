<template>
  <a-layout style="height: 100%">
    <a-layout-header :style="{ backgroundColor: '#4898ea' }">
      <nav-bar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <side-bar />
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <beian-footer/>
      </a-layout>
    </a-layout>

  </a-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import BeianFooter from '../BeianFooter.vue'

@Component({
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    BeianFooter
  },
})
export default class Layout extends Vue {}
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-header :style="{ backgroundColor: '#4898ea' }">
      <nav-bar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <side-bar />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

@Component({
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
  },
})
export default class Layout extends Vue {}
</script>
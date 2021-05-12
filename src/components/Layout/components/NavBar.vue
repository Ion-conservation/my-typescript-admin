<template>
  <a-row style="height: 100%">
    <a-col :span="8" style="display: flex; align-items: center; height: 100%">
      <!-- <a-icon
        :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
        :style="{ fontSize: '28px', color: '#fff', cursor: 'pointer', marginRight: '10px' }"
        @click.native="isCollapse = !isCollapse"
      /> -->
      <img :src="logo" alt="" height="28px" />
    </a-col>
    <a-col :span="16"></a-col>
  </a-row>
</template>

<script lang="ts">
import Vue from 'vue';
import logo from '@/assets/typescript.svg';
export default Vue.extend({
  data() {
    return {
      logo,
      isCollapse: false,
    };
  },
  computed: {},
  methods: {
    handleClick() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
</script>

<style>
</style>
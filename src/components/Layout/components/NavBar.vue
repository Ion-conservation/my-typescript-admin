<template>
  <a-row style="height: 100%">
    <a-col :span="8" style="display: flex; align-items: center; height: 100%">
      <img :src="logo" alt="" height="28px" style="cursor: pointer" @click="$router.push('/home')" />
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

  },
});
</script>

<style>
</style>
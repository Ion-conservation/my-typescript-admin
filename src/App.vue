<template>
  <div id="app">
    <router-view id="main-container" />
    <beian-footer />
  </div>
</template>

<script >
import BeianFooter from '@/components/BeianFooter.vue';

export default {
  components: { BeianFooter },
};
</script>
<style>
#main-container {
  height: calc(100% - 73px);
}
</style>

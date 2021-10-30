<template>
  <div id="app">
    <router-view id="main-container" />
  </div>
</template>

<script >

export default {
  components: { BeianFooter },
};
</script>
<style>
#main-container {
  height: calc(100% - 73px);
}
</style>

<template>
  <div><slot v-bind:user="user">将子组件属性提供给父组件使用</slot></div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "firstName",
      },
    };
  },
};
</script>

<style>
</style>
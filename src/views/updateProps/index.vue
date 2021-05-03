<template>
  <div>
    <div>{{ name }}</div>
    <!-- <child v-bind:name.sync="name"></child> -->
    <child v-bind:params.sync="params"></child>
    <div>{{ params.name }}</div>
    <div>{{ params.age }}</div>
    <div>{{ params.sex }}</div>
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  components: {
    Child,
  },
  data() {
    return {
      name: "father",
      params: {
        name: "name",
        age: 18,
        sex: "female",
      },
    };
  },
};
</script>

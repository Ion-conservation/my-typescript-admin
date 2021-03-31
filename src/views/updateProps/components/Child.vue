<template>
  <div>
    <!-- <div>{{ name }}</div> -->
    <a-button @click="changeProps" type="primary">change prop name</a-button>
    <a-input v-model="childName"></a-input>
    <div>
      <a-input v-model="childParams.name"></a-input>
      <a-input v-model="childParams.age"></a-input>
      <a-input v-model="childParams.sex"></a-input>
      <a-button @click="changeParams">chagne Params</a-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // name: {
    //   type: String,
    //   required: true,
    // },
    params: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      childName: "",
      childParams: {
        name: "",
        age: 0,
        sex: "",
      },
    };
  },
  watch: {
    childParams: {
      deep: true,
      handler(params) {
        this.$emit("update:params", params);
      },
    },
  },
  methods: {
    changeProps() {
      this.$emit("update:name", this.childName);
    },
    changeParams() {
      this.$emit("update:params", this.childParams);
    },
  },
};
</script>

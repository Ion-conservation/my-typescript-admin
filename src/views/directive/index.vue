<template>
  <div>
    <div v-transform:userList.a.b="message"></div>
  </div>
</template>

<script>
const userList = [
  { name: "小王", level: 1 },
  { name: "中王", level: 2 },
  { name: "大王", level: 3 },
  { name: "老王", level: 4 },
];
export default {
  directives: {
    transform: {
      bind: function (el, binding, vnode) {
        //   不能访问this 不知道有什么用
        const s = JSON.stringify;
        /*
            name: transform,
            value: message的值 => "hello"
            expression: message
            argument: userList
            modifiers a,b
        */
        el.innerHTML =
          "name：" +
          s(binding.name) +
          "</br> value：" +
          s(binding.value) +
          "</br> expression：" +
          s(binding.expression) +
          "</br> argument：" +
          s(binding.arg) +
          "</br> modifiers：" +
          s(binding.modifiers);
      },
    },
  },
  data() {
    return {
      message: "hello",
      //   userList: [
      //     { name: "小王", level: 1 },
      //     { name: "中王", level: 2 },
      //     { name: "大王", level: 3 },
      //     { name: "老王", level: 4 },
      //   ],
    };
  },
  methods: {},
};
</script>

<style>
</style>
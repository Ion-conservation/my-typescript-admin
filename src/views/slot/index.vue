<template>
  <div>
    <div>slot使用方法</div>
    <div>一般插槽:</div>
    <my-slot>
      <span>这里写什么，slot就显示什么</span>
    </my-slot>

    <div>使用数据:</div>
    <data-slot url="/slot">
      <span>{{ username }}</span>
      <span
        >父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</span
      >
      <span
        >这里不能访问 url 属性， 这里只能访问当前组件的property(作用域)</span
      >
    </data-slot>

    <div>slot默认内容:</div>
    <default-slot></default-slot>
    <default-slot>传递内容</default-slot>

    <div>具名插槽:</div>
    <name-slot>
      <template v-slot:header>
        <span>header:v-slot只能绑定在template上</span>
      </template>
      <template v-slot:main>
        <span>父组件通过template/v-slot来绑定具名插槽</span>
      </template>
      <template v-slot:footer>
        <span>v-slot默认绑定default v-slot:defalut</span>
      </template>
    </name-slot>

    <div>父组件使用子组件提供的属性</div>
    <child-data-slot>
      <!-- v-slot:default="slotProps"  使用解构赋值 -->
      <template v-slot:default="{ user }">
        {{ user.firstName }}
      </template>
    </child-data-slot>

    <!-- 
        动态插槽名
        <base-layout>
            <template v-slot:[dynamicSlotName]>
                 ...
            </template>
        </base-layout>
    -->
    <!-- 
        缩写
        <base-layout>
            <template #header="{user}">
                 {{ user.firstname }}
            </template>
        </base-layout>
    -->
  </div>
</template>

<script>
import MySlot from "./components/MySlot";
import DataSlot from "./components/DataSlot";
import DefaultSlot from "./components/DefaultSlot";
import NameSlot from "./components/NameSlot";
import ChildDataSlot from "./components/ChildDataSlot";
export default {
  components: { MySlot, DataSlot, DefaultSlot, NameSlot, ChildDataSlot },
  data() {
    return {
      username: "username",
    };
  },
};
</script>

<style>
</style>
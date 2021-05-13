<template>
  <div class="home-container">
    <github-corner class="github-corner" />

    <a-row :gutter="20">
      <a-col :span="8">
        <panel
          :panelInfo="{
            name: 'message',
            text: 'message',
            startVal: 0,
            endVal: 1000,
            duration: 300,
          }"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GithubCorner from '@/components/GithubCorner/index.vue';
import Panel from './components/Panel/index.vue';
@Component({
  components: {
    GithubCorner,
    Panel,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  .github-corner {
    position: absolute;
    right: -30px;
    top: -30px;
  }
}
</style>
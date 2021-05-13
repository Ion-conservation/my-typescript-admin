<template>
  <div class="card-panel" @click="handleSetLineChartData('messages')">
    <div class="card-panel-icon-wrapper icon-message">
      <svg-icon :name="panelInfo.text" class="card-panel-icon" />
    </div>
    <div class="card-panel-description">
      <div class="card-panel-text">{{ panelInfo.text }}</div>
      <count-to
        :start-val="panelInfo.startVal"
        :end-val="panelInfo.endVal"
        :duration="panelInfo.duration"
        class="card-panel-num"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CountTo from 'vue-count-to';
import '@/icons/svgjs/message';

// name ?: string 可选参数
// name !: string 检查并确保一个类在初始化时，每一个属性都必须在构造器内初始化，或者在属性定义时赋予初始值。
// ts2.7引入了一个新的flag：--strictPropertyInitialization。这个flag检查并确保一个类在初始化时，每一个属性都必须在构造器内初始化，或者在属性定义时赋予初始值。
// !: 就是由用户自己保证，这个属性在使用前会初始化，类型检查不管这个属性了

interface PanelInfo {
  name: string;
  text: string;
  startVal: number;
  endVal: number;
  duration: number;
}

@Component({
  components: {
    CountTo,
  },
})
export default class Panel extends Vue {
  @Prop({
    default: () => {
      return {
        name: '-',
        text: '-',
        startVal: 0,
        endVal: 0,
        duration: 0,
      };
    },
  })
  panelInfo!: PanelInfo;

  private handleSetLineChartData() {}
}
</script>

<style lang="less" scoped>
@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}

.card-panel {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);

  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }

    .icon-people {
      background: #40c9c6;
    }

    .icon-message {
      background: #36a3f7;
    }

    .icon-money {
      background: #f4516c;
    }

    .icon-shopping {
      background: #34bfa3;
    }
  }

  .icon-people {
    color: #40c9c6;
  }

  .icon-message {
    color: #36a3f7;
  }

  .icon-money {
    color: #f4516c;
  }

  .icon-shopping {
    color: #34bfa3;
  }

  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }

  .card-panel-icon {
    float: left;
    font-size: 48px;
  }

  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0px;

    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      font-size: 20px;
    }
  }
}
</style>
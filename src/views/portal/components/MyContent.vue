<template>
  <a-card style="height: 100%; text-align: left" :bodyStyle="{height: '100%'}">
    <a-row :gutter="16" style="height: 100%;">
      <a-col :span="16" style="height: 100%;">
        <a-row  :gutter="16" style="margin-bottom: 10px;">
          <a-col :span="12" style="height: 100%;">
            <a-carousel autoplay arrows style="height: 100%;">
              <div
                slot="prevArrow"
                class="custom-slick-arrow"
                style="left: 10px; zindex: 1"
              >
                <a-icon type="left-circle" />
              </div>
              <div
                slot="nextArrow"
                class="custom-slick-arrow"
                style="right: 10px"
              >
                <a-icon type="right-circle" />
              </div>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </a-carousel>
          </a-col>
          <a-col :span="12">
            <a-card title="我的计划" style="height: 300px" :bodyStyle="{ paddingLeft: '0px', }">
              <ul>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
              </ul>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="16" style="margin-bottom: 10px;height: calc((100% - 300px) /2)">
          <a-col :span="12" style="height: 100%">
            <a-card title="我的待办" style="height: 100%" :bodyStyle="{ paddingLeft: '0px' }">
              <ul>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
              </ul>
            </a-card>
          </a-col>
          <a-col :span="12" style="height: 100%">
            <a-card title="我的已办" style="height: 100%" :bodyStyle="{ paddingLeft: '0px' }">
              <ul>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
              </ul>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="16" style="margin-bottom: 10px;height: calc((100% - 300px) /2)">
          <a-col :span="12" style="height: 100%">
            <a-card title="我的见闻" style="height: 100%" :bodyStyle="{ paddingLeft: '0px', height: '100%' }">
              <ul>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
              </ul>
            </a-card>
          </a-col>
          <a-col :span="12" style="height: 100%">
            <a-card title="我的吐槽" style="height: 100%" :bodyStyle="{ paddingLeft: '0px' }">
              <ul>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
                <li>新闻1</li>
              </ul>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="8" style="height: 100%;">
        <a-card title="应用入口">
          <a-card-grid style="width: 25%; text-align: center">HTML</a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">CSS</a-card-grid>
          <a-card-grid style="width: 25%; text-align: center"
            >Javascript</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center">Vue</a-card-grid>
          <a-card-grid style="width: 25%; text-align: center; height: 100%"
            >Vue CLI</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Vue Router</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center">Vuex</a-card-grid>
          <a-card-grid style="width: 25%; text-align: center"
            >Element ui</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Ant Design Vue</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >React</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Webpack</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Docker</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >阿里云</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Nodejs</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Webpack</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Linux</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Nginx</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >ECMA6</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Momentjs</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Lodash</a-card-grid
          >
          <a-card-grid style="width: 25%; text-align: center"
            >Nginx</a-card-grid
          >
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
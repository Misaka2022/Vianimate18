<template>
     <div style="position:absolute;z-index:999;bottom:6vh;left:12vw" id="kbns">
            <div class="waifu" style="margin-left:66vw;margin-top:-4.5vh;position:absolute">
                        <div class="waifu-tips"></div>
                        <div id="fullsc">
                             <canvas id="live2d" class="live2d" title="点我可以体验全屏哦!"></canvas>
                        </div>
                        <div class="waifu-tool">
                            <span class="fui-home"></span>
                            <span class="fui-chat" id="ChatGPT" title="点击打开ChatGPT"></span>
                            <span class="fui-eye"></span>
                            <span class="fui-user"></span>
                            <span class="fui-photo"></span>
                            <span class="fui-info-circle"></span>
                            <span class="bi bi-x" id="gui-cro" style="font-size:24px;font-weight:600;margin-left:-1vw"></span>
                            <!-- fui-cross -->
                        </div>
                </div>
          </div>
</template>
  <script>
  import '../assets/assets/waifu-tips';
  import '../assets/assets/live2d';
  import '../assets/assets/waifu.css';
  import initModel from '../assets/assets/waifu-tips';

  export default {
    name:'Live2d',
    data(){
      return{
      }
    },
    mounted(){
      live2d_settings['modelId'] = 5;                  // 默认模型 ID
      live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
      /* 在 initModel 前添加 */
      initModel(require("../assets/assets/waifu-tips.json"));
    },
    methods: {
    }
  }
</script>

<style scoped>
.waifu-tool p i {
    cursor: pointer;
  }
</style>
  
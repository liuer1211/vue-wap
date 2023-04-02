import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'; // px适配
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import VideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

import router from './router'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(VideoPlayer);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
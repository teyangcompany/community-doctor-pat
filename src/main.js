// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

let UA = window.navigator.userAgent.toLocaleLowerCase();
if (/iphone/.test(UA)) {
  window.device = "iphone";
}
if (/android/.test(UA)) {
  window.device = "android";
}

if (/micromessenger/.test(UA)) {
  window.brower = "weixin";
} else {
  window.brower = "";
}
/*
 * 移动端rem布局
 * width:20rem
 * */
if (window.device == "iphone" || window.device == "android") {
  let w = window.innerWidth;
  document.querySelector('html').style.fontSize = `${w/ 20}px`;
}
window.onresize = function(){
  if (window.device == "iphone" || window.device == "android") {
    let w = window.innerWidth;
    document.querySelector('html').style.fontSize = `${w/ 20}px`;
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

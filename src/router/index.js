import Vue from 'vue'
import Router from 'vue-router'
import myDoctorIndex from '../components/myDoctor/router.js'
import myIndex from '../components/my/router.js'
import onlineIndex from '../components/online/router.js'


Vue.use(Router)

export default new Router({
  routes: [
    ...myDoctorIndex,
    ...myIndex,
    ...onlineIndex
  ]
})

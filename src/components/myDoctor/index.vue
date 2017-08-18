<template>
  <div class="whole">
    <v-header :title="onlineTitle" :rightTitle="onlineRightTitle" v-if="tellPath == '/onlineIndex'"></v-header>
    <v-header :title="onlineTitle" :rightTitle="onlineRightTitle" v-else-if="tellPath == '/myConsult'"></v-header>
    <v-header :title="title" :rightTitle="rightTitle" v-else-if="tellPath == '/index/recent'" @on-look="look()"></v-header>
    <v-header :title="title" :rightTitle="rightTitle" v-else-if="tellPath == '/index/signDoctor'" @on-look="look()"></v-header>
    <nav-bar :tagNames="onlineNames" v-if="tellPath == '/onlineIndex'"></nav-bar>
    <nav-bar :tagNames="onlineNames" v-else-if="tellPath == '/myConsult'"></nav-bar>
    <nav-bar :tagNames="tagNames" v-else-if="tellPath == '/index/recent'"></nav-bar>
    <nav-bar :tagNames="tagNames" v-else-if="tellPath == '/index/signDoctor'"></nav-bar>
    <router-view></router-view>
    <div class="footer border-1px-top">
    <router-link tag="div" :to="item.tabLink" v-for="item in bottomTags" :key="item.id" :class="tellPath == '/myDoctorChat/followDoctor'? 'followBlue':''">
    <img v-if="tellPath == '/myIndex'" :src="item.imgLastOn">
    <img v-else-if="tellPath == '/index/recent'" :src="item.imgLinkIndexOn">
    <img v-else-if="tellPath == '/index/signDoctor'" :src="item.imgLinkIndexOn">
    <img v-else-if="tellPath == '/onlineIndex'" :src="item.imgLinkOn">
      <img v-else-if="tellPath == '/myConsult'" :src="item.imgLinkOn">
      <img v-else-if="tellPath == '/institution'" :src="item.imgLinkMyOn">
    <span >{{item.title}}</span>
    </router-link>
    </div>
  </div>
</template>
<script>
  import header from '../../base/header'
  import navBar from '../../base/navBar'
  export default{
    data(){
      return{
        title:'我的医生',
        rightTitle:'预约服务',
        onlineTitle:"在线咨询",
        onlineRightTitle:"",
        onlineNames:[
          {title1:"全部咨询",tabLink:'/onlineIndex'},
          {title1:"我的咨询",tabLink:'/myConsult'},
        ],
        tagNames:[
          {title1:"最近消息",tabLink:'/index/recent'},
          {title1:"签约医生",tabLink:'/index/signDoctor'},
        ],
        bottomTags:[
          {title:'我的医生',tabLink:"/index/recent",imgLinkIndexOn:"./static/img/home_on.png",imgLinkOn:"./static/img/home.png",imgLinkMyOn:"./static/img/home.png",imgLastOn:"./static/img/home.png"},
          {title:'在线咨询',tabLink:"/onlineIndex",imgLinkIndexOn:"./static/img/consult.png",imgLinkOn:"./static/img/consult_on.png",imgLinkMyOn:"./static/img/consult.png",imgLastOn:"./static/img/consult.png"},
          {title:'找医生',tabLink:"/institution",imgLinkIndexOn:"./static/img/myDoctorBottom.png",imgLinkOn:"./static/img/myDoctorBottom.png",imgLinkMyOn:"./static/img/myDoctor_on.png",imgLastOn:"./static/img/myDoctorBottom.png"},
          {title:'我的',tabLink:"/myIndex",imgLinkIndexOn:"./static/img/myBottom.png",imgLinkOn:"./static/img/myBottom.png",imgLinkMyOn:"./static/img/myBottom.png",imgLastOn:"./static/img/myBottom_on.png"}
        ],
        tellPath:""
      }
    },
    components:{
      'VHeader':header,
      navBar
    },
    mounted(){
      this.$nextTick(()=>{
        this.tellPath = this.$route.path
      })
    },
    methods:{
      goIndex(){
        this.$router.push('/patientIndex')
      },
      look(){
          this.$router.push('/bookService')
      }
    },
    watch:{
      "$route":function(){
        this.tellPath = this.$route.path
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/var.scss';
  @import '../../common/mixin.scss';
  .whole{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
  }
  .footer{
    width:100%;
    height:98rem/$rem;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    background-color: #FFFFFF;
    display: flex;
  .router-link-exact-active{
  span{
    font-size:22rem/$rem;
    color: #0fbdff;
    font-family: PingFangSC;
  }

  }
  >div{
     flex:1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 10rem/$rem;
  img{
    width:50rem/$rem;
    height:50rem/$rem;
  }
  span{
    font-size:22rem/$rem;
    color: #999999;
    font-family: PingFangSC;
  }
  }
  >div.followBlue:nth-child(2){
  span{
    font-size:22rem/$rem;
    color: #0fbdff;
    font-family: PingFangSC;
  }
  }

  /*background-color: #3CC51F;*/
  }
</style>

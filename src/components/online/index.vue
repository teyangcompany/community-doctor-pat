<template>
    <div class="allConsult">
          <router-view></router-view>
          <div class="onlineConsult" ref="onlineContent">
             <div>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[孙八一 男 24岁][腰腿疼痛]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c11.jpg" alt="">
                       <img src="../../../static/img/c12.jpg" alt="">
                       <img src="../../../static/img/c13.jpg" alt="">
                       <img src="../../../static/img/c14.jpg" alt="">
                       <img src="../../../static/img/c15.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">华立</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[李世峰 男 28岁]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">张康</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[赵文武 女 30岁]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c16.jpg" alt="">
                       <img src="../../../static/img/c17.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">李爱国</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[男 24岁][高血压]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c1.jpg" alt="">
                       <img src="../../../static/img/c2.jpg" alt="">
                       <img src="../../../static/img/c3.jpg" alt="">
                       <img src="../../../static/img/c4.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">赵乾坤</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[男 24岁][肩周炎]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c5.jpg" alt="">
                       <img src="../../../static/img/c6.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">洪国立</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[男 24岁][腰腿疼痛]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c7.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">陈理</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[男 24岁][关节炎]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c8.jpg" alt="">
                       <img src="../../../static/img/c9.jpg" alt="">
                       <img src="../../../static/img/c10.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">赵从</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[李世石 男 24岁][骨质疏松]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">谢尚全</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
               <ul class="border-1px">
                 <li >
                   <div>
                     <span class="picConsult">[赵青 男 24岁][糖尿病]</span>
                     <!--<span class="consultTim">2016/11/28 18:17</span>-->
                   </div>
                   <div class="mainContent">
                     <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
                     <div @click="makeLarge()">
                       <img src="../../../static/img/c18.jpg" alt="">
                     </div>
                   </div>
                   <div class="ConsultRelate">

                     <span class="name"><span class="circle"></span><span class="number">陈刚</span><span>回答</span>  </span>
                     <span class="money">1小时前创建 | 3条回复</span>
                   </div>
                 </li>
               </ul>
             </div>
          </div>
          <div class="centerDisplay" transition="fade" v-if="largePreview" @click="makeSmall()">
            <div class="slider-wrapper" ref="sliderWrapper">
              <slider ref="slider" :popImg="largePreview" :index="goindex" :previewImg="previewImg">
                <div  v-for="singleImage in previewImg"  @click="makeSmall()">
                  <img :src="singleImage" alt=""  @click="makeSmall()">
                </div>
              </slider>
            </div>
          </div>
          <router-link tag="div" to="/iWantConsult" class="iWant" ref="iWant">
            <span>我要咨询</span>
          </router-link>
    </div>
</template>
<script>
  import header from'../../base/header'
  import navBar from '../../base/navBar'
  import Slider from '../../base/slider'
  import BScroll from 'better-scroll'
  export default{
      data(){
          return{
            largePreview:false,
            goindex:"",
            previewImg:[
              "../../../static/img/chatOrigin.jpg",
              "../../../static/img/chatOrigin.jpg",
              "../../../static/img/chatOrigin.jpg",
              "../../../static/img/chatOrigin.jpg",
            ],
          }
      },
      mounted(){
          this.$nextTick(()=>{
              setTimeout(()=>{
                this._initO()
              },20)
          })
          window.addEventListener('resize', () => {
            if (!this.online) {
              return
            }
            this.online.refresh()
          })
      },
      methods:{
          _initO(){
              this.online = new BScroll(this.$refs.onlineContent,{
                  click:true,
                  probeType: 2,
              })
//             console.log(this.online)
            this.online.on("scroll",()=>{
                this.$refs.iWant.$el.style.right = -70 + 'px'
              this.$refs.iWant.$el.style.transition = 1 + 's'
            })
            this.online.on("scrollEnd",()=>{
              this.$refs.iWant.$el.style.right = 10 + 'px'
              this.$refs.iWant.$el.style.transition = 1 + 's'
            })
          },
        makeLarge(index){
          this.largePreview = true
          this.goindex = index
        },
        makeSmall(){
//          console.log("123")
          this.largePreview = false
        },
      },
      components:{
          "VHeader":header,
           navBar,
           Slider
      }
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
  .allConsult{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #FFFFFF;
    .iWant{
      position: fixed;
      bottom: 110rem/$rem;
      right: 40rem/$rem;
      width: 140rem/$rem;
      height: 140rem/$rem;
      border-radius: 50%;
      z-index:1000;
      background-color:#0fbdff;;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: block;
        width: 80rem/$rem;
        height: 100rem/$rem;
        font-size: 32rem/$rem;
        text-align: center;
        box-sizing: border-box;
        color: white;
        /*background-color: #E64340;*/
      }
    }
    .onlineConsult{
      position: fixed;
      top: 90px;
      bottom:100rem/$rem;
      right:0;
      left:0;
      overflow: hidden;
      z-index:100;
      /*background-color: white;*/
      ul {
        /*margin-top: 10px;*/
        /*padding-bottom: 5px;*/
        li {
          width: 690rem/$rem;
          /*height: 166px;*/
          border-radius: 7px;
          background-color:white;
          list-style-type: none;
          margin: 0 auto;
          padding: 0px 8px 8px 8px;
          >div {
            display: flex;
            justify-content: space-between;
            span.picConsult {
              font-size: 16px;
            }
            span.consultTim {
              font-size: 12px;
              color: gray;
            }
          }
          div.mainContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            >div{
              img{
                width: 22.5%;
                height: 120rem/$rem;
              }
            }
            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: 15px;
              color: gray;
              height: 52px;
              padding-top: 5px;
              /*background-color: #E64340;*/
            }
          }
          div.ConsultRelate {
            margin-top: 5px;
            span.name {
              font-size: 14px;
              color: gray;
              .circle {
                display: inline-block;
                width: 10px;
                height: 10px;
                margin-right: 3px;
                background-color: red;
                border-radius: 50%;
              }
            }
            span.money {
              font-size: 24rem/$rem;
              color: #999999;
            }
          }
        }
        li:nth-child(1){
            padding-top: 5px;
        }
      }
      ul:last-child{
        margin-bottom: 40px;
      }
    }
  }
  .centerDisplay{
    width:100%;
    height:100%;
    position: fixed;
    display: flex;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:400;
    background-color: rgba(0,0,0,.3);
    justify-content: center;
    align-items: center;
    button.imgDelete{
      background-color:white;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 70px;
      right:10%;
      border:none;
      outline: medium;
      border-radius: 10px;
      /*opacity: 0.5;*/
      color: #0FBDFF!important;
    }
    button.leftClose{
      background-color:white;
      width: 50px;
      height: 50px;
      position: absolute;
      top: 70px;
      left:10%;
      border:none;
      outline: medium;
      border-radius: 10px;
      /*opacity: 0.5;*/
      color: #0FBDFF!important;
    }
  }
  .fade-transition{
    transition: all 0.5s;
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
  .fade-enter,.fade-leave{
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
  .slider-wrapper{
    position: relative;
    width:100%;
    top:0;
    z-index:500;

    /*background-color: #E64340;*/
    overflow: hidden;
  }
  .ratings{
    color: #FF9900!important;
  }
  .number{
    color: #3399FF!important;
  }
  .green{
    color: green!important;
  }
</style>

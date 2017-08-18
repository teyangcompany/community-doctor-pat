<template>
    <div class="whole">
        <v-header :title="title" :rightTitle="rightTitle"></v-header>
        <div class="place border-1px">
            <span class="border-1px-right">杭州市</span>
            <span v-if="myPick == ''" @click="chooseType('displayType')">江干区 <img ref="rotateImg" src="../../../../static/img/u31.png" alt=""> </span>
            <span v-else @click="chooseType('displayType')">{{ myPick }} <img ref="rotateImg" src="../../../../static/img/u31.png" alt=""> </span>
        </div>
      <transition name="showlist">
        <div class="dropType" v-show="sortBy == 'displayType'">
          <ul >
            <div class="weui-cells weui-cells_radio weuiMargin">
              <label class="weui-cell weui-check__label" for="x11">
                <div class="weui-cell__bd">
                  <p>西湖区</p>
                </div>
                <div class="weui-cell__ft">
                  <input type="radio" class="weui-check" name="radio1" id="x11" value="西湖区" v-model="myPick"/>
                  <span class="weui-icon-checked"></span>
                </div>
              </label>
              <label class="weui-cell weui-check__label" for="x12">

                <div class="weui-cell__bd">
                  <p>上城区</p>
                </div>
                <div class="weui-cell__ft">
                  <input type="radio" name="radio1" class="weui-check" id="x12" value="上城区" v-model="myPick"/>
                  <span class="weui-icon-checked"></span>
                </div>
              </label>
            </div>

          </ul>
        </div>
      </transition>
      <div class="myDoctorList" ref="contactList" v-if="tempwait == 1 && followList.length > 0">
        <div>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img src="../../../../static/img/h1.jpg" alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市天水武林街道社区服务中心</span>
                    <p>电话:87098866</p>
                    <p>浙江省杭州市耶稣堂弄4号</p>
                  </div>
                </div>
                <span class="distance">
                  离我4.1km
                </span>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img src="../../../../static/img/h2.jpg" alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市上城区紫阳卫生院</span>
                    <p>电话:87098866</p>
                    <p>浙江省杭州市中山南路303号</p>
                  </div>
                </div>
                <span class="distance">
                  离我5.0km
                </span>
                <!--<div class="cancelTime">-->
                  <!--<div class="forArrow">-->
                <!--<span>-->
                  <!--离我1.1km-->
                <!--</span>-->
                  <!--</div>-->
                <!--</div>-->
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img src="../../../../static/img/h3.jpg" alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市朝晖街道卫生服务中心</span>
                    <p>电话:87098866</p>
                    <p>浙江省杭州市下城区朝晖7区12号</p>
                  </div>
                </div>
                <span class="distance">
                  离我5.4km
                </span>
              </li>
            </router-link>
          </ul>
          <!--<ul class="border-1px" v-for="item in followList">-->
            <!--<router-link tag="div" to="/institutionDetail">-->
              <!--<li>-->
                <!--<div class="cancelImg">-->
                  <!--<img :src=" item.docAvatar " alt="">-->
                <!--</div>-->
                <!--<div class="cancelIntro">-->
                  <!--<div>-->
                    <!--<span class="myDoctor">杭州市XXX社区服务中心</span>-->
                    <!--<p>{{ item.hosName }}</p>-->
                    <!--<p>{{ item.deptName }}</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="cancelTime">-->
                  <!--<div class="forArrow">-->
                <!--<span>-->
                  <!--离我1.1km-->
                <!--</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</li>-->
            <!--</router-link>-->
          <!--</ul>-->



        </div>
      </div>
      <transition name="showcover">
        <div class="back_cover" v-show="sortBy" @click="hideCover()"></div>
      </transition>
    </div>
</template>
<script>
  import header from '../../../base/header'
  import navBar from '../../../base/navBar'
  import BScroll from 'better-scroll'
  export default{
      data(){
        return{
            title:"选择机构",
            rightTitle:"",
            followList:[
              {
                docAvatar:"http://img.25pp.com/uploadfile/app/icon/20160901/1472663211278834.jpg",
                docName:"丁聪华",
                docTitle:"眼科",
                hosName:"电话：435423594325",
                deptName:"浙江省杭州市解放路88号"
              }
            ],
            tempwait:1,
            sortBy:'',
            myPick:"",
            angle:0
        }
      },
      mounted(){
         this._initPlace()
      },
      methods:{
        _initPlace(){
            this.placeScroll = new BScroll(this.$refs.contactList,{
                click:true
            })
        },
        chooseType(type){

          if(this.sortBy !== type){
            this.sortBy = type
            console.log("123")
            this.angle+=180;
            this.$refs.rotateImg.style.transform = 'rotate('+this.angle+'deg)';
            this.$refs.rotateImg.style.transition = 1 + 's';
          }else{
            this.sortBy = ''
//            this.$refs.rotateImg.className = 'reverse'

            this.angle+=180;
            this.$refs.rotateImg.style.transform = 'rotate('+this.angle+'deg)';
            this.$refs.rotateImg.style.transition = 1 + 's';
          }
        },
        hideCover(){
          this.sortBy = ''
          this.angle+=180;
          this.$refs.rotateImg.style.transform = 'rotate('+this.angle+'deg)';
          this.$refs.rotateImg.style.transition = 1 + 's';
        }
    },
      components:{
        "VHeader":header,
      },
      watch:{
        myPick(){
          this.sortBy = ''
          this.angle+=180;
          this.$refs.rotateImg.style.transform = 'rotate('+this.angle+'deg)';
          this.$refs.rotateImg.style.transition = 1 + 's';
        }
      }
  }
</script>
<style scoped lang="scss">
  /*@import '../../../common/public.scss';*/
  @import '../../../common/var1.scss';
  @import '../../../common/mixin.scss';
  .showlist-enter-active,.showlist-leave-active{
    transition: all 0.2s ease-out;
  }
  .showlist-enter,.showlist-leave-active{
    transform: translateY(-100%)
  }
  .showcover-enter-active, .showcover-leave-active {
    transition: opacity .3s
  }
  .showcover-enter, .showcover-leave-active {
    opacity: 0
  }
  .back_cover{
    position: fixed;
    top: 90px;
    left:0;
    right:0;
    bottom:98rem/$rem;
    z-index: 10;
    background-color: rgba(0,0,0,0.3);
  }
  .whole{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    .dropType{
      position: fixed;
      z-index:70;
      top: 90px;
      width:100%;
      /*text-align: center;*/
      background-color: white;
      .weuiMargin{
        margin:0;
      }
      li{
        list-style-type: none;
        height: 50px;
        line-height: 50px;
        font-size: 32rem/$rem;
      }
    }
  }
 .place{
   position: fixed;
   top: 50px;
   left:0;
   right:0;
   width:100%;
   height:40px;
   display: flex;
   z-index:300;
   background-color: #FFFFFF;
   justify-content: center;
   align-items: center;
   span{
     flex:1;
     display: block;
     height: 40px;
     font-size: 32rem/$rem;
     color: #333333;
     text-align: center;
     line-height: 40px;
     img{
       width:30rem/$rem;
       height:30rem/$rem;
     }
   }
 }
  .myDoctorList{
    width:100%;
    position: fixed;
    top: 90px;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    background-color: white;
    .emptyHistory{
      width:100%;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: inline;
        >div{
          color:#0FBDFF;
          display: inline;
        }
      }
    }
    ul{
      padding:0;
      margin:0;
      position: relative;
      height: 180rem/$rem;
      /*border-bottom: 1px solid rgb(205,205,205);*/
      li{
        list-style-type: none;
        height: 180rem/$rem;
        display: flex;
        .cancelImg{
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{

          }
        }
        .cancelIntro{
          flex:2;
          display: flex;
          align-items: center;
          /*line-height: 25px;*/
          >div{
            .myDoctor{
              border-radius:5px;
              display: inline-block;
              font-size: 32rem/$rem;
              color: #333333;
              /*line-height: 18px;*/
              text-align: center;
            }
            p{
              margin:0;
              color: #999999;
              font-size: 28rem/$rem;
            }
          }
        }
        .distance{
          position: absolute;
          right:30rem/$rem;
          top:78rem/$rem;
          font-size: 28rem/$rem;
          color: #999999;
        }
        img{
          width: 80rem/$rem;
          height: 80rem/$rem;
          border-radius: 50%;
        }
      }
    }
  }
</style>

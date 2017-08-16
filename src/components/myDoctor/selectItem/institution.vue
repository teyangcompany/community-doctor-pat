<template>
    <div class="whole">
        <v-header :title="title" :rightTitle="rightTitle"></v-header>
        <div class="place border-1px">
            <span class="border-1px-right">杭州市</span>
            <span>江干区</span>
        </div>
      <div class="myDoctorList" ref="contactList" v-if="tempwait == 1 && followList.length > 0">
        <div>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>  <ul class="border-1px" v-for="item in followList">
          <router-link tag="div" to="/institutionDetail">
            <li>
              <div class="cancelImg">
                <img :src=" item.docAvatar " alt="">
              </div>
              <div class="cancelIntro">
                <div>
                  <span class="myDoctor">杭州市XXX社区服务中心</span>
                  <p>{{ item.hosName }}</p>
                  <p>{{ item.deptName }}</p>
                </div>
              </div>
              <div class="cancelTime">
                <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>
          <ul class="border-1px" v-for="item in followList">
            <router-link tag="div" to="/institutionDetail">
              <li>
                <div class="cancelImg">
                  <img :src=" item.docAvatar " alt="">
                </div>
                <div class="cancelIntro">
                  <div>
                    <span class="myDoctor">杭州市XXX社区服务中心</span>
                    <p>{{ item.hosName }}</p>
                    <p>{{ item.deptName }}</p>
                  </div>
                </div>
                <div class="cancelTime">
                  <div class="forArrow">
                <span>
                  离我1.1km
                </span>
                  </div>
                </div>
              </li>
            </router-link>
          </ul>


        </div>
      </div>
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
            tempwait:1
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
        }
    },
      components:{
        "VHeader":header,
      }
  }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/var.scss';
  @import '../../../common/mixin.scss';
  .whole{
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
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
        .cancelTime{
          flex:1;
          .forArrow{
            display: flex;
            height: 180rem/$rem;
            align-items: center;
            justify-content: flex-end;
            margin-right: 12px;
            span{
              display: inline-block;
              text-align: right;
              font-size: 28rem/$rem;
              color: #666666;
              img{
                width: 16rem/$rem;
                height: 24rem/$rem;
              }
            }
          }
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

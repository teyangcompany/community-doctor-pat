<template>
  <div class="recentChat">
    <div class="myDoctorList" ref="contactList" v-if="tempwait == 1 && followList.length > 0">
      <div>
        <ul class="border-1px" v-for="item in followList">
          <router-link tag="div" to="/institution">
            <li>
              <div class="cancelImg">
                <img :src=" item.docAvatar " alt="">
              </div>
              <div class="cancelIntro">
                <div>
                  <span class="followName">{{ item.docName }}</span>
                  <!--<div class="badgeDoc">-->
                    <span class="myDoctor">主治医生</span>
                  <!--</div>-->
                  <p>{{ item.hosName }}</p>
                  <p>{{ item.deptName }}</p>
                </div>
              </div>
              <div class="cancelTime">
                <div class="forArrow">
                <span>
                 <span class="sign number">签约</span> <img src="../../../static/img/查看更多.png" alt="">
                </span>
                </div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="myDoctorList" v-else-if="tempwait == 1 && followList.length == 0">
      <div class="emptyHistory">
        <span>您还没有关注任何医生</span>
      </div>
    </div>
    <div class="myDoctorList" v-else>
      <div class="emptyHistory">
        <loading></loading>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Loading from '../../base/loading/loading'
  export default{
    data(){
      return{
        followList:[
          {
            docAvatar:"http://img.25pp.com/uploadfile/app/icon/20160901/1472663211278834.jpg",
            docName:"丁聪华",
            docTitle:"眼科",
            hosName:"XXX社区服务中心",
            deptName:"全科"
          }
        ],
        tempwait:1
      }
    },
    created(){

    },
    watch:{
      followList(){
        this.$nextTick(()=>{
          this._initRecentChat()
        })
      }
    },
    methods:{
      _initRecentChat(){
        this.doctorListScroll = new BScroll(this.$refs.contactList,{
          click:true
        })
      }
    },
    components:{
      Loading
    }
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
  .recentChat{
    width:100%;
    position: fixed;
    top: 90px;
    bottom:0;
    left:0;
    right:0;
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
      height: 200rem/$rem;
      /*border-bottom: 1px solid rgb(205,205,205);*/
      li{
        list-style-type: none;
        height: 200rem/$rem;
        display: flex;
        .cancelImg{
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cancelIntro{
          flex:2;
          display: flex;
          align-items: center;
          line-height: 25px;
          .followName{
            font-size: 16px;
          }
            .myDoctor{
              font-size: 28rem/$rem;
              color: #999999;
              line-height: 18px;
              text-align: center;
            }
          p{
            margin:0;
            color: #999999;
            font-size: 14px;
          }
          span{

          }
        }
        .cancelTime{
          flex:1;
          .forArrow{
            display: flex;
            height: 200rem/$rem;
            align-items: center;
            justify-content: flex-end;
            margin-right: 12px;
            span{
              display: inline-block;
              text-align: right;
              color: #666666;
              font-size: 32rem/$rem;
              .sign{
                display: inline-block;
                height: 32rem/$rem;
                width:80rem/$rem;
                line-height: 35rem/$rem;
                background-color: darkturquoise;
                font-size: 24rem/$rem;
                border-radius: 5px;
                text-align: center;
                color: white;
              }
              img{
                width: 8px;
                height: 12px;
              }
            }
          }
        }
        img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }
  /*.number{*/
    /*color: #3399FF!important;*/
  /*}*/
</style>

<template>
    <div class="wrapDetail">
       <v-header :title="title" :rightTitle="rightTitle"></v-header>
       <div class="teamList" ref="team">
         <div>
         <div class="headImg">
           <img src="../../../../static/img/u223.png" alt="">
         </div>
         <div class="card border-1px">
           <div>
             <p class="instutionTitle">杭州市上城区紫阳卫生院</p>
             <p>浙江省杭州市中山南路303号</p>
             <p>电话:87098866</p>
             <div>
               <span>医生 17</span>
               <span class="border-1px-right"></span>
               <span>患者 296</span>
               <span class="border-1px-right"></span>
               <span class="ratings">评价 9.3分 > </span>
             </div>
           </div>
         </div>
         <p class="total">共2个医生团队</p>
         <div class="team border-1px">
           <router-link tag="div" to="/teamCard" class="teamCenter">
             <div class="teamTitle">
               <span class="mainTitle">华立全科团队</span>
               <span class="rightTitle">签约患者 <span class="number">296 </span> <span>|</span> <span class="comment">评价 </span> <span class="ratings">9.5分</span> </span>
             </div>
             <div class="teamContent">
               <p>介绍:华立全科团队是一支年轻的、充满活力的、专注于慢病管理、全科健康预诊的社区服务团队</p>
               <div>
                 <div>
                   <img src="../../../../static/img/ys1.jpg" alt="">
                   <span>华立</span>
                   <span class="doctorRank">主治医生</span>
                 </div>
                 <div>
                   <img src="../../../../static/img/ys2.jpg" alt="">
                   <span>张康</span>
                   <span class="doctorRank">实习医生</span>
                 </div>
                 <div>
                   <img src="../../../../static/img/ys3.jpg" alt="">
                   <span>李爱国</span>
                   <span class="doctorRank">护工</span>
                 </div>
                 <div>
                   <img src="../../../../static/img/ys4.jpg" alt="">
                   <span>赵乾坤</span>
                   <span class="doctorRank">护工</span>
                 </div>
                 <!--<div>-->
                   <!--<img src="" alt="">-->
                   <!--<span></span>-->
                   <!--<span class="doctorRank"></span>-->
                 <!--</div>-->
               </div>
             </div>
           </router-link>
         </div>
           <div class="team border-1px">
             <router-link tag="div" to="/teamCard" class="teamCenter">
               <div class="teamTitle">
                 <span class="mainTitle">洪国立老年养护团队</span>
                 <span class="rightTitle">签约患者 <span class="number">87 </span> <span>|</span> <span class="comment">评价 </span> <span class="ratings">8.8分</span> </span>
               </div>
               <div class="teamContent">
                 <p>介绍:洪国立医生团队、有丰富的老年病（帕金森综合征、老年痴呆）养护经验、值得您的信赖</p>
                 <div>
                   <div>
                     <img src="../../../../static/img/ys5.jpg" alt="">
                     <span>洪国立</span>
                     <span class="doctorRank">主治医生</span>
                   </div>
                   <div>
                     <img src="../../../../static/img/ys6.jpg" alt="">
                     <span>陈理</span>
                     <span class="doctorRank">护工</span>
                   </div>
                   <div>
                     <img src="../../../../static/img/ys7.jpg" alt="">
                     <span>赵从</span>
                     <span class="doctorRank">护工</span>
                   </div>
                   <!--<div>-->
                     <!--<img src="../../../../static/img/chatOrigin.jpg" alt="">-->
                     <!--<span>华佗</span>-->
                     <!--<span class="doctorRank">主治医生</span>-->
                   <!--</div>-->
                   <!--<div>-->
                     <!--<img src="../../../../static/img/chatOrigin.jpg" alt="">-->
                     <!--<span>华佗</span>-->
                     <!--<span class="doctorRank">主治医生</span>-->
                   <!--</div>-->
                 </div>
               </div>
             </router-link>
           </div>
         <div class="institutionDes border-1px">
           <div class="desCenter team">
             <h4>机构介绍</h4>
             <h6>紫阳街道社区卫生服务中心是一家具有40多年历史的区级医疗卫生服务机构。老年康复病房45张。先后被评为浙江省及杭州市规范化社区卫生服务中心,杭州市中医中药进社区示范中心，首批浙江省示范社区卫生服务中心，首批浙江省五星级预防保健门诊。紫阳街道位于风景秀丽的紫阳山麓东侧，东起钱塘江中心线，南至万松岭路，西靠紫阳山、云居山，北依望江路。辖区面积3.49平方公里，所辖12个社区。辖区常住人口8.17万，其中户籍人数6.67万人，60岁以上老人有1.57万人。辖区内有3所中学，6所小学，9所幼儿园。</h6>
           </div>
         </div>
         <!--<div class="institutionDes border-1px">-->
           <!--<div class="desCenter team">-->
             <!--<h4>机构介绍</h4>-->
             <!--<h6>赛车运动赛车运动分为两大类，场地赛车和非场地赛车。起源距今已有超过100年的历史。最早的赛车比赛是在城市间的公路上进行的。</h6>-->
           <!--</div>-->
         <!--</div>-->



       </div>
       </div>
    </div>
</template>
<script>
   import header from '../../../base/header'
   import BScroll from 'better-scroll'
   export default{
       data(){
          return{
              title:"机构详情",
              rightTitle:""
          }
       },
      mounted(){
          this.$nextTick(()=>{
              setTimeout(()=>{
                this._initTeam()
            },100)
          })
      },
       methods:{
           _initTeam(){
               this.teamScroll = new BScroll(this.$refs.team,{
                   click:true
               })
           }
       },
       components:{
           "VHeader":header
       }
   }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/var.scss';
  @import '../../../common/mixin.scss';
.wrapDetail{
  position: fixed;
  width:100%;
  top:0px;
  bottom:0;
  left:0;
  right:0;
  /*background-color: red;*/
  .teamList{
    position: fixed;
    top: 50px;
    left:0;
    right:0;
    bottom:0;
    .headImg{
      width:100%;
      img{
        width:100%;
      }
    }
    .card{
      width:100%;
      height:250rem/$rem;
      margin:0 auto;
      /*padding-top: 50px;*/
      /*background-color: green;*/
      display: flex;
      justify-content: center;
      align-items: center;
      >div{
        text-align: center;
        p{
          margin:0;
          font-size: 28rem/$rem;
          color: #999999;
          /*margin-top: 5px;*/
        }
        p.instutionTitle{
          font-size: 32rem/$rem;
          color: #333333;
        }
        >div{
          display: flex;
          align-items: center;
          span{
            font-size: 28rem/$rem;
            color: #999999;
            display: inline-block;
            height:30rem/$rem;
            line-height: 30rem/$rem;
          }
          span:nth-child(2){
            margin-left: 20rem/$rem;
            margin-right: 20rem/$rem;
          }
          span:nth-child(4){
            margin-left: 20rem/$rem;
            margin-right: 20rem/$rem;
          }
        }
      }
    }
    .total{
      margin:0;
      width:100%;
      height:80rem/$rem;
      line-height:80rem/$rem ;
      padding-left: 30rem/$rem;
      font-size: 28rem/$rem;
      color: #999999;
      background-color: rgb(245,245,245);
    }
    .team{
      width:100%;
      .teamCenter{
        width:690rem/$rem;
        margin:0 auto;
        .teamTitle{
          display: flex;
          height: 30px;
          padding-top: 5px;
          align-items: center;
          justify-content: space-between;
          .mainTitle{
            font-size: 32rem/$rem;
            color: #333333;
            font-family: PingFangSC;
          }
          span.rightTitle{
            font-size:28rem/$rem;
            color: #999999;
            display: flex;
            height:30rem/$rem;
            line-height: 30rem/$rem;
            align-items: center;
            .number{
              margin-left: 10rem/$rem;
              margin-right: 20rem/$rem;
            }
            .comment{
              margin-left: 20rem/$rem;
              margin-right: 10rem/$rem;
            }
          }
        }
        .teamContent{
          width:690rem/$rem;
          >P{
            margin:0;
            font-size: 32rem/$rem;
            word-wrap: normal;
            color: #999999;
            margin-top: 5px;
          }
          >div{
            display: flex;
            margin-top: 15px;
            padding-bottom: 5px;
            >div{
              display: flex;
              flex:1;
              flex-direction: column;
              align-items: center;
              span{
                margin-top: 5px;
                font-size: 28rem/$rem;
              }
              span.doctorRank{
                color: #999999;
              }
            }

          }
        }
      }
      img{
        width:100rem/$rem;
        height:100rem/$rem;
        border-radius: 50%;
      }
    }
    .institutionDes{
      .desCenter{
        width: 690rem/$rem;
        margin:0 auto;
        padding-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .team{

      }
      h4,h6{
        margin:0;
        padding:0;
        font-weight: normal;
      }
      h4{
        font-size: 32rem/$rem;
      }
      h6{
        font-size:32rem/$rem;
        color: #999999;
      }
    }
  }
}
  .ratings{
    color: #FF9900!important;
  }
  .number{
    color: #3399FF!important;
  }
</style>

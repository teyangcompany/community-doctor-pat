<template>
    <div>
         <v-header :title="title" :rightTitle="rightTitle"></v-header>
         <div class="signTeam" ref="signTeam">
           <div>
           <div class="illness border-1px">
             <div>
               签约人
               <div @click="selectPatient()" v-if="displayPatient == ''">
                 <span class="red">{{patientAll[chosedIndex]}}</span> <img src="../../../../static/img/查看更多.png" alt="">
               </div>
               <div @click="selectPatient()" v-else>
                 <span class="red">{{ displayPatient[0].label }}</span> <img src="../../../../static/img/查看更多.png" alt="">
               </div>
             </div>
           </div>
           <div class="history border-1px">
             <div>
               签约团队
               <div>
                 <span class="number">华佗全科团队</span>
               </div>
             </div>
           </div>
           <div class="family">
             <div>
               签约有效期
               <div>
                 <span class="number">1年</span>
               </div>
             </div>
           </div>
           <div class="family basic">
             <div>
               基础服务(必选)
               <div>
                 共<span class="sumMoney">￥200/年</span>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
               <div class="sortService">
                 <div class="leftChecked">
                   <img src="../../../../static/img/chatOrigin.jpg" alt="">
                 </div>
                 <div class="rightChecked">
                   <span>图文咨询</span> <span class="number">不限次数</span>
                   <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
                 </div>
               </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
               <div class="leftChecked">
                 <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
               <div class="rightChecked">
                 <span>电话咨询</span> <span class="number">3次/月</span>
                 <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
               <div class="leftChecked">
                 <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
               <div class="rightChecked">
                 <span>上门服务</span> <span class="number">1次/月</span>
                 <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
               </div>
             </div>
           </div>
           <div class="family basic">
             <div>
               扩展服务
               <div>
                 <span>已选1项</span>,<span>增加 <span class="sumMoney">￥100/年</span></span>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
               <div class="leftChecked">
                 <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
               <div class="rightChecked">
                 <div>
                   <span>推拿理疗 <span class="number">1次/月</span></span><span class="sumMoney">+￥500/年</span>
                 </div>
                 <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
               <div class="leftChecked">
                 <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
               <div class="rightChecked">
                 <div>
                   <span>保健品鉴别 <span class="number">不限次数</span></span> <span class="sumMoney">+￥100/年</span>
                 </div>
                 <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
               <div class="leftChecked">
                 <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
               <div class="rightChecked">
                 <div>
                   <span>健康讲座 <span class="number">1次/月</span></span> <span class="sumMoney">+￥800/年</span>
                 </div>
                 <p>这里是服务介绍:比赛目的是尽量将足球射入对方的球门内，每射入一球就可以得到一分，当比赛完毕后，得分最多的一队则胜出。如果在比赛规定时间内得分相同，则须看比赛章则而定，</p>
               </div>
             </div>
           </div>
            <p class="terms border-1px">签约即表示同意 <span class="number">xxx签约医生服务协议</span> </p>
            <div class="totalAmount border-1px">
                <span class="border-1px-right sumMoney">合计￥300.00/年</span>
                <span>立即签约</span>
            </div>
         </div>
         </div>
       <toggle :patList="patientAll" :showPat="showPat" @activate="check" @toggleClosed="closePatient()"></toggle>
    </div>
</template>
<script>
  import header from '../../../base/header'
  import Toggle from '../../../base/toggle'
  import BScroll from 'better-scroll'
  import weui from 'weui.js'
  export default{
      data(){
        return{
          title:"签约团队",
          rightTitle:"",
          patientAll:['飞机','火车','装甲车','汽车','自行车','摩托车','摩拜单车','小黄车'],
          showPat:false,
          displayPatient:"",
          chosedIndex:0
        }
      },
      mounted(){
        this._initSignTeamScroll()
      },
      methods:{
        _initSignTeamScroll(){
            this.signTeamScroll = new BScroll(this.$refs.signTeam,{
                click:true
            })
        },
        selectPatient(){
//            let that = this
//            weui.picker(that.patientAll,{
//              onConfirm: function (result) {
//                console.log(result)
//                that.displayPatient = result
//              }
//            })
          this.showPat=true;
        },
        check(item){
          this.showPat=false;
          this.chosedIndex=item;
        },
        closePatient(){
           this.showPat=false;
        }
      },
      components:{
          "VHeader":header,
           Toggle
      }
  }
</script>
<style scoped lang="scss">
  @import '../../../common/public.scss';
  @import '../../../common/var.scss';
  @import '../../../common/mixin.scss';
.signTeam{
  width:100%;
  position: fixed;
  top: 50px;
  left:0;
  right:0;
  bottom:0;
  /*background-color: red;*/
  .illness,.history,.family{
    width: 100%;
    height: 90rem/$rem;
    /*border-top: 1px solid rgb(205,205,205);*/
    >div{
      width: 690rem/$rem;
      height: 90rem/$rem;
      font-size: 32rem/$rem;
      color: #333333;
      font-family: PingFangSC;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >div{
        span{
          font-size: 32rem/$rem;
          color: #666666;
          display: inline-block;
          /*margin-right: 10px;*/
        }
        img{
          width: 7.5px;
        }
        .sumMoney{
          font-size: 28rem/$rem;
          color: #FF9933;
        }
      }
    }
  }
  .basic{
    height:80rem/$rem;
    background-color: rgb(245,245,245);
    >div{
       font-size: 28rem/$rem;
       font-family: PingFangSC;
       color: #666666;
      >div{
        span{
          font-size: 28rem/$rem;
          font-family: PingFangSC;
          color: #666666;
        }
      }
    }
  }
  .wrapSort{
    width:100%;
    .sortService{
      width:690rem/$rem;
      /*height: 100px;*/
      margin:0 auto;
      /*background-color: red;*/
      display: flex;
      align-items: center;
      .leftChecked{
        img{
          width: 40px;
          height: 40px;
          margin-right: 15rem/$rem;
          border-radius: 50%;
        }
      }
      .rightChecked{
        span{
          font-size: 32rem/$rem;
          color: #333333;
        }
        >div{
           display: flex;
          justify-content: space-between;
        }
        p{
          margin:0;
          font-size: 28rem/$rem;
          color: #999999;
        }
        .sumMoney{
          font-size: 28rem/$rem;
          color: #FF9933;
        }
      }
    }
  }
  .terms{
    width:100%;
    height: 80rem/$rem;
    line-height: 80rem/$rem;
    text-align:center;
    margin:0;
    font-size: 28rem/$rem;
    color: #999999;
    background-color: rgb(245,245,245);
  }
  .totalAmount{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      height: 50px;
      flex:1;
      display: flex;
      font-size: 32rem/$rem;
      color: #333333;
      justify-content: center;
      align-items: center;
    }
  }
}
  .sumMoney{
    font-size: 28rem/$rem!important;
    color: #FF9933!important;
  }
  .red{
    color: red!important;
  }
  .number{
    font-size: 28rem/$rem!important;
    color: #3399FF!important;
  }
</style>

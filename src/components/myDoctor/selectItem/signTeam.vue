<template>
    <div>
         <v-header :title="title" :rightTitle="rightTitle"></v-header>
         <div class="signTeam" ref="signTeam">
           <div>
           <div class="illness border-1px" @click="selectPatient()">
             <div>
               签约人
               <div  v-if="displayPatient == ''">
                 <span class="red">{{patientAll[chosedIndex]}}</span> <img src="../../../../static/img/查看更多.png" alt="">
               </div>
               <div  v-else>
                 <span class="red">{{ displayPatient[0].label }}</span> <img src="../../../../static/img/查看更多.png" alt="">
               </div>
             </div>
           </div>
           <div class="history border-1px">
             <div>
               签约团队
               <div>
                 <span class="number">华立全科团队</span>
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

                     <i class="weui-icon-success weuiSuccess"></i>

                 <div class="rightChecked">
                   <p>  <span>图文咨询</span> <span class="number">不限次数</span></p>
                   <p>提供免费的图文咨询服务，承诺团队会在24小时内做出回应，解决大家的问题。</p>
                 </div>
               </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">

                 <i class="weui-icon-success weuiSuccess"></i>

               <div class="rightChecked">
                 <p>  <span>电话咨询</span> <span class="number">3次/月</span></p>
                 <p>提供每月3次电话咨询服务，可以帮助大家解答健康方面的问题。</p>
               </div>
             </div>
           </div>
           <div class="wrapSort  border-1px">
             <div class="sortService">
                 <i class="weui-icon-success weuiSuccess"></i>
               <div class="rightChecked">
                 <p>  <span>上门服务</span> <span class="number">1次/月</span></p>
                 <p>每月提供1次上门探访，可以测量血糖血压、心理疏导等。</p>
               </div>
             </div>
           </div>
           <div class="family basic">
             <div>
               扩展服务
               <div>
                 <span>已选<span class="number">{{  pickedItem  }}</span>项</span>,<span>增加 <span class="sumMoney big" ref="addBy">￥{{subtotal}}/年</span></span>
               </div>
             </div>
           </div>
             <div class="wrapSort  border-1px">
               <div class="sortService">
                 <div class=" weui-cells_checkbox">
                   <label class="weui-cell weui-check__label" for="s15">
                     <div class="weui-cell__hd">
                       <input type="checkbox" class="weui-check" name="checkbox1" id="s15" value="500" v-model="pickedValue"/>
                       <i class="weui-icon-checked"></i>
                     </div>
                     <div class="weui-cell__bd special">
                       <div>
                         <span>推拿理疗 <span class="number">1次/月</span></span><span class="sumMoney">+￥500/年</span>
                       </div>
                       <p>运用推、拿、按、摩、揉、捏、点、拍等形式多样的手法，以期达到疏通经络、推行气血、扶伤止痛、祛邪扶正、调和阴阳的疗效</p>
                     </div>
                   </label>
                   <label class="weui-cell weui-check__label" for="s16">
                     <div class="weui-cell__hd">
                       <input type="checkbox" name="checkbox1" class="weui-check" id="s16" value="100" v-model="pickedValue"/>
                       <i class="weui-icon-checked"></i>
                     </div>
                     <div class="weui-cell__bd special">
                       <div>
                         <span>保健品鉴别 <span class="number">不限次数</span></span><span class="sumMoney">+￥100/年</span>
                       </div>
                       <p>如果有人向您推销保健品，我们社区服务团队会以专业的知识为您鉴别该保健品是否正品，是否有效，帮助您或您的家人免去被骗之忧。</p>
                     </div>
                   </label>
                   <label class="weui-cell weui-check__label" for="s17">
                     <div class="weui-cell__hd">
                       <input type="checkbox" name="checkbox1" class="weui-check" id="s17" value="800" v-model="pickedValue"/>
                       <i class="weui-icon-checked"></i>
                     </div>
                     <div class="weui-cell__bd special">
                       <div>
                         <span>健康讲座 <span class="number">1次/月</span></span><span class="sumMoney">+￥800/年</span>
                       </div>
                       <p>每月组织一次健康养生方面的讲座。</p>
                     </div>
                   </label>
                 </div>

               </div>
             </div>

            <p class="terms border-1px">签约即表示同意<span class="number">特扬签约医生服务协议</span> </p>
         </div>
         </div>
      <div class="totalAmount border-1px-top">
        <span class="border-1px-right sumMoney" v-if="pickedValue.length == 0">合计￥200/年</span>
        <span class="sumMoney big" v-if="pickedValue.length > 0" ref="totalChange">合计￥{{Total}}/年</span>
        <span @click="signRight()">立即签约</span>
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
          patientAll:['刘劲松','李世峰','赵文武','孙大山'],
          showPat:false,
          displayPatient:"",
          chosedIndex:0,
          pickedValue:[],
          subtotal:0,
          Total:0,
          pickedItem:0
        }
      },
      mounted(){
        this.$nextTick(()=>{
            setTimeout(()=>{
              this._initSignTeamScroll()
            },100)
        })
      },
      computed:{

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
        },
        signRight(){
            this.$router.push('/pay')
        }
      },
      components:{
          "VHeader":header,
           Toggle
      },
      watch:{
        pickedValue:function(){
            this.$nextTick(()=>{
              if(this.pickedValue.length == 0){
                this.Total = 0
                this.pickedItem = 0
                this.subtotal = 0
                this.$refs.addBy.style.animationName = ''
                this.$refs.addBy.style.animationName = 'makeBigStart'
                this.$refs.addBy.style.animationDuration = 1 + "s"
              }else if(this.pickedValue.length == 1){
                this.Total = 0
                this.pickedItem = 1
                this.$refs.addBy.style.animationName = ''
                this.$refs.addBy.style.animationName = 'makeBig'
                this.$refs.totalChange.style.animationName=''
                this.$refs.totalChange.style.animationName='makeBig'
                this.$refs.totalChange.style.animationDuration= 1 + 's'
                this.$refs.addBy.style.animationDuration = 1 + "s"
                this.Total += parseInt(this.pickedValue[0]) + 200
                this.subtotal= parseInt(this.pickedValue[0])
              }else if(this.pickedValue.length == 2){
                this.Total = 0
                this.pickedItem = 2
                this.$refs.addBy.style.animationName = ''
                this.$refs.addBy.style.animationName = 'makeBigOne'
                this.$refs.totalChange.style.animationName=''
                this.$refs.totalChange.style.animationName='makeBigOne'
                this.$refs.totalChange.style.animationDuration= 1 + 's'
                this.$refs.addBy.style.animationDuration = 1 + "s"
                this.Total += parseInt(this.pickedValue[0])+ parseInt(this.pickedValue[1])+ 200
                this.subtotal= parseInt(this.pickedValue[0])+ parseInt(this.pickedValue[1])
              }else if(this.pickedValue.length == 3){
                this.Total = 0
                this.pickedItem = 3
                this.$refs.addBy.style.animationName = ''
                this.$refs.addBy.style.animationName = 'makeBigTwo'
                this.$refs.totalChange.style.animationName=''
                this.$refs.totalChange.style.animationName='makeBigTwo'
                this.$refs.totalChange.style.animationDuration= 1 + 's'
                this.$refs.addBy.style.animationDuration = 1 + "s"
                this.Total += parseInt(this.pickedValue[0])+ parseInt(this.pickedValue[1])+parseInt(this.pickedValue[2])+ 200
                this.subtotal= parseInt(this.pickedValue[0])+ parseInt(this.pickedValue[1])+parseInt(this.pickedValue[2])
              }
            })

        }
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
  bottom: 50px;
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
          font-size: 32rem/$rem;
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
      margin:0 auto;
      display: flex;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .big{
          /*animation-name: makeBig;*/
          animation-duration: 2s;
      }
      @keyframes makeBigStart{
        0% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes makeBig{
        0% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes makeBigOne{
        0% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes makeBigTwo{
        0% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
      .weuiSuccess{
        margin-right: 15rem/$rem;
      }
      .rightChecked{
        span{
          font-size: 32rem/$rem!important;
          color: #333333;
        }
        >div{
          display: flex;
          justify-content: space-between;
        }
        p{
          margin:0;
          font-size: 32rem/$rem;
          color: #999999;
        }
        .sumMoney{
          font-size: 32rem/$rem;
          color: #FF9933;
        }
      }
      label{
        padding:0;
      }
      .special{
        padding-top: 10px;
        padding-bottom: 10px;
        span{
          font-size: 32rem/$rem!important;
          color: #333333;
        }
        >div{
          display: flex;
          justify-content: space-between;
        }
        p{
          margin:0;
          font-size: 32rem/$rem;
          color: #999999;
        }
        .sumMoney{
          font-size: 32rem/$rem;
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
}
  .totalAmount{
    position: fixed;
    bottom:0;
    width:100%;
    height: 50px;
    background-color: white;
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
  .sumMoney{
    font-size: 32rem/$rem!important;
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

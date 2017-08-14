<template>
    <div>
         <v-header :title="title" :rightTitle="rightTitle"></v-header>
         <div class="payInfo">
           <div class="paySum border-1px">
             <span>订单金额</span>
             <span>￥199.00</span>
           </div>
           <p class="border-1px payMethod">支付方式:</p>
           <div class="payBy border-1px">
               <div class="payByCenter">
                   <div>
                     <img src="../../../../static/img/chatOrigin.jpg" alt="">
                     <span>微信</span>
                   </div>
                   <img src="../../../../static/img/chatOrigin.jpg" alt="">
               </div>
           </div>
           <div class="confirmPay">
              <div class="confirmCenter">
                 <button>确认支付</button>
              </div>
           </div>
         </div>
    </div>
</template>
<script>
  import header from "../../../base/header"
  export default{
      data(){
          return{
             title:"支付",
              rightTitle:""
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
 .payInfo{
   position: fixed;
   top: 50px;
   left:0;
   right:0;
   bottom:0;
   .paySum{
     width:100%;
     height: 100px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     span:first-child{
       font-size: 28rem/$rem;
       color: #999999;
     }
     span:last-child{
       font-size: 32rem/$rem;
       color: #333333;
       font-weight: bold;
     }
   }
   .payMethod{
     height:80rem/$rem;
     font-size: 28rem/$rem;
     color: #666666;
     background-color: rgb(245,245,245);
   }
   p{
     margin:0;
     padding-left:30rem/$rem;
     height: 50px;
     line-height: 50px;
   }
   .payBy{
     width:100%;
     height: 50px;
     .payByCenter{
       width:690rem/$rem;
       height: 50px;
       margin:0 auto;
       display: flex;
       justify-content: space-between;
       align-items: center;
       >div{
         display: flex;
         align-items: center;
         span{
           font-size: 32rem/$rem;
           color: #333333;
         }
         img{
           margin-right: 5px;
         }
       }
       img{
         width: 30px;
         height: 30px;
         border-radius: 50%;
       }
     }
   }
   .confirmPay{
     width:100%;
     height: 80px;
     margin-top: 200px;
     .confirmCenter{
       width:690rem/$rem;
       margin: 0 auto;
     }
     button{
       width:690rem/$rem;
       border:none;
       outline: medium;
       height: 50px;
       border-radius: 7px;
     }
   }
 }

</style>

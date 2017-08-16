<template>
    <div class="myConsult">
      <ul class="border-1px">
        <li >
          <div>
            <span class="picConsult">[李俊基 男 24岁][糖尿病]</span>
            <span class="consultTim">¥50</span>
          </div>
          <div class="mainContent">
            <p>我有一个问题想要咨询一下，是这样的，去年我在我们那里的医院做了一个检查，你知道德玛关于这个事情，比较复杂的你知道吗</p>
            <div>
              <img src="../../../static/img/chatOrigin.jpg" alt="">
              <img src="../../../static/img/chatOrigin.jpg" alt="">
              <img src="../../../static/img/chatOrigin.jpg" alt="">
            </div>
          </div>
          <div class="ConsultRelate">

            <span class="name"><span class="circle"></span>丁克峰回答</span>
            <span class="money">1小时前创建 | 3条回复</span>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
 .myConsult{
   position: fixed;
   top: 90px;
   bottom:0;
   left:0;
   right:0;
   z-index:200;
   background-color: #FFFFFF;
   ul {
     margin-top: 10px;
     margin-bottom: 10px;
     li {
       width: 690rem/$rem;
       /*height: 166px;*/
       border-radius: 7px;
       background-color:white;
       list-style-type: none;
       margin: 0 auto;
       padding: 8px 8px 8px 8px;
       >div {
         display: flex;
         justify-content: space-between;
         span.picConsult {
           font-size: 16px;
         }
         span.consultTim {
           font-size: 16px;
           color: red;
         }
       }
       div.mainContent {
         display: flex;
         flex-direction: column;
         justify-content: center;
         >div{
           img{
             width: 22.5%;
             height: 22.5%;
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
             width: 12px;
             height: 12px;
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
   }
 }
</style>

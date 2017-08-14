<template>
    <div>
        <v-header :title="title" :rightTitle="rightTitle"></v-header>
      <div class="healthFile" ref="healthFile">
        <div>
          <div class="basic border-1px">
            <div>
              可选服务
            </div>
          </div>
          <div class="illness border-1px">
            <div>
              上门服务
              <div>
                <span>共12次,剩余8次</span>
              </div>
            </div>
          </div>
          <div class="history border-1px">
            <div>
              推拿理疗
              <div>
                <span>共12次,剩余8次</span>

              </div>
            </div>
          </div>
          <div class="family border-1px">
            <div>
              健康讲座
              <div>
                <span>共12次,剩余8次</span>

              </div>
            </div>
          </div>
          <div class="basic">
            <div>
              预约信息
            </div>
          </div>
          <div class="alergic border-1px">
            <div>
              选择预约时间
              <div class="unBook" @click="selectTime()" v-if="date == ''">
                <span>请选择预约时间</span>
                <img src="../../../static/img/查看更多.png" alt="">
              </div>
              <div class="bookTime" @click="selectTime()" v-else>
                <span>{{date}}</span><img src="../../../static/img/查看更多.png" alt="">
              </div>
            </div>
          </div>
          <div class="remark">
            <textarea placeholder="(选填)您的情况、申请理由、地址等信息"></textarea>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
  import header from '../../base/header'
  import weui from 'weui.js'
  export default{
      data(){
          return{
            title:"预约服务",
            rightTitle:"确定预约",
            date:""
          }
      },
      components:{
          "VHeader":header
      },
      methods:{
        selectTime(){
            let that =this
            weui.datePicker({
               start: new Date(),
               end: 2030,
               defaultValue: [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()],
               onChange: function(result){
               },
               onConfirm: function(result){
//                 that.$set(that.$data,'date',result)
                 setTimeout(()=>{
                   that.selectHour(result)
                 },500)
               },
             })
        },
        selectHour(result){
            var date = result[0].label + result[1].label +result[2].label
             var hours = []
             var minutes = []
             var symbol = [{
                 label:':',
                 value:0
             }]
             if(!hours.length){
                 for(var i=0;i<24;i++){
                     var hours_item = {}
                     hours_item.label = (''+ i).length === 1? '0'+i : ''+i
                     hours_item.value = i;
                     hours.push(hours_item);
                 }
             }
          if (!minutes.length) {
            for (var j= 0; j < 60; j++) {
              var minites_item = {};
              minites_item.label = ('' + j).length === 1 ? '0' + j : '' + j;
              minites_item.value = j;
              minutes.push(minites_item);
            }
          }
          let that = this
          weui.picker(hours,symbol, minutes, {

            defaultValue: [new Date().getHours()+1, 0, 0],
            onConfirm: function(result) {
              var time = result[0].label + ':' + result[2].label;
              var completeTime = date + ' ' + time
              that.date = completeTime
            },
            id: 'ma_expect_time'
          });
        }
      }
  }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
  @import '../../common/mixin.scss';
  .healthFile{
    width:100%;
    position: fixed;
    top:50px;
    bottom:0;
    left:0;
    right:0;
  /*background-color: green;*/
  .basic,.illness,.history,.family,.alergic,.record{
    width: 100%;
    height: 90rem/$rem;
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
    width:450rem/$rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  span{
    font-size: 32rem/$rem;
    color: #666666;
    display: inline-block;
    /*margin-right: 10px;*/
  }
  img{
    width: 7.5px;
  }
  }
    .bookTime{
      display: flex;
      width:360rem/$rem;
      span{
        font-size: 32rem/$rem;
        display: inline-block;
        width:350rem/$rem;
        text-align: center;
      }
      img{
        width: 7.5px;
      }
    }
    .unBook{
      display: flex;
      width:260rem/$rem;
      span{
        font-size: 32rem/$rem;
        display: inline-block;
        width:260rem/$rem;
        text-align: center;
      }
      img{
        width: 7.5px;
      }
    }
  }
  }
    .remark{
      width:100%;
      textarea{
        width:100%;
        height:200rem/$rem;
        font-size: 28rem/$rem;
        color: #999999;
        resize: none;
        outline: medium;
        border: none;
        padding-top: 5px;
        padding-left: 30rem/$rem;
        background-color: rgb(245,245,245);
      }
    }
  .basic,.record{
    background-color: rgb(245,245,245);
  }
  .basic{
    height:80rem/$rem;
    >div{
      font-size: 28rem/$rem;
      color: #666666;
    }
  }
  }

</style>

<template>
  <div>
    <div class="picturePatient" v-for="item in items">
      <router-link tag='div' :to="item.relateLink">
        <div class="patient_center">
          <p>{{ item.item1 }}</p>
          <p> ></p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      items:{
        type:Array,
        default:[]
      }
    }
  }
</script>
<style scoped lang="scss">
  .picturePatient{
    width:100%;
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-top: 1px solid rgb(205,205,205);
    border-bottom: 1px solid rgb(205,205,205);
    .patient_center{
      width:95%;
      display: flex;
      margin:0 auto;
      justify-content: space-between;
      p{
        font-size: 18px;

      }
    }
  }
</style>

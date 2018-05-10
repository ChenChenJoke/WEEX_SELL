<template>
  <div class="wrapper">
    <!-- navbar -->
    <div class="header">
      <text class="back" @click="goBack()">后退</text>
      <text class="title">分期商城</text>
      <text class="next">帮助</text>
    </div>
 </div>
</template>

<script>

    export default{
        data:{

        },
        methods:{
            goBack:function(){
                console.log(this.$router);
                this.$router & this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  .wrapper {
    background-color: rgb(238, 238, 238);
    /*
    justify-content: center;
    align-items: center;
    */
  }

  .header{
    background-color: #fff;
    flex-direction: row;
    align-items:center;
    height: 100px;
    
  }
  .back {
    text-align:center;
    flex:1;
    font-size: 30px;
    color: #ff0000;
  }
  .title {
    text-align:center;
    flex:3;
    font-size: 40px;
    color: #727272;
  }
  .next{
    text-align:center;
    flex:1;
    font-size: 30px;
    color: #ff0000;
    
  }
  </style>
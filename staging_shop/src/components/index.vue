<template>
  <div class="wrapper">
   
      <!-- 额度展示 -->
      <div class="banner">
        <text class="comment">融卡分期额度(元)</text>
        <text class="money">8000</text>
      </div>

      <!-- 中心入口 -->
      <div class="recharge_tip">
          <div class="sale_area">
              <div class="sale_img">
                  <image class="sale_img_url" src="https://static.rong360.com/upload/png/59/37/59371b2a604b4595c2de979ae563993b.png"></image>
              </div>
              <div class="sale_cont">
                  <text class="sale_goods">充值中心</text>
                  <text class="goods_ex">网游、视频娱乐、礼品卡</text>
              </div>
          </div>
          <div class="sale_area">
              <div class="sale_img">
                  <image class="sale_img_url" src="https://static.rong360.com/upload/png/2e/b7/2eb76ecd359e34c0f284799df57ef0d3.png"></image>
              </div>
              <div class="sale_cont">
                  <text class="sale_goods">数码3C</text>
                  <text class="goods_ex">手机、电子产品</text>
              </div>
          </div>
      </div>
      
      <!-- 货物列表 -->
      <div class="goods_list_area">
          <div>
              <text class="goods_title">热门商品</text>
          </div>
          <list class="goods_list">
              <cell class="goods_info" @click="jump('detail')">
                  <div class="goods_img">
                      <image style="width:168px; height:180px; background-color: green; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="https://static.rong360.com/upload/png/c6/ed/c6ed92ee5b7f81ace8fed17f5c7b3261.png"></image>
                      <text class="no_goods">暂无库存</text>
                  </div>
                  <div class="goods_details">
                      <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
                      <text class="goods_price">¥3799</text>
                      <div class="pay_area">
                          <text class="m_p">月供：</text>
                          <div class="m_m">
                              <text class="pay_money">￥200</text>
                              <text class="m_q">起</text>
                          </div>
                      </div>
                  </div>
              </cell>
              <cell class="goods_info" @click="jump('detail')">
                  <div class="goods_img">
                      <image style="width:168px; height:180px; background-color: green; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="https://static.rong360.com/upload/png/c6/ed/c6ed92ee5b7f81ace8fed17f5c7b3261.png"></image>
                      <text class="no_goods">暂无库存</text>
                  </div>
                  <div class="goods_details">
                      <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
                      <text class="goods_price">¥3799</text>
                      <div class="pay_area">
                          <text class="m_p">月供：</text>
                          <div class="m_m">
                              <text class="pay_money">￥200</text>
                              <text class="m_q">起</text>
                          </div>
                      </div>
                  </div>
              </cell>
              <cell class="goods_info" @click="jump('detail')">
                  <div class="goods_img">
                      <image style="width:168px; height:180px; background-color: green; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="https://static.rong360.com/upload/png/c6/ed/c6ed92ee5b7f81ace8fed17f5c7b3261.png"></image>
                      <text class="no_goods">暂无库存</text>
                  </div>
                  <div class="goods_details">
                      <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
                      <text class="goods_price">¥3799</text>
                      <div class="pay_area">
                          <text class="m_p">月供：</text>
                          <div class="m_m">
                              <text class="pay_money">￥200</text>
                              <text class="m_q">起</text>
                          </div>
                      </div>
                  </div>
              </cell>
              <cell class="goods_info" @click="jump('detail')">
                  <div class="goods_img">
                      <image style="width:168px; height:180px; background-color: green; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="https://static.rong360.com/upload/png/c6/ed/c6ed92ee5b7f81ace8fed17f5c7b3261.png"></image>
                      <text class="no_goods">暂无库存</text>
                  </div>
                  <div class="goods_details">
                      <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
                      <text class="goods_price">¥3799</text>
                      <div class="pay_area">
                          <text class="m_p">月供：</text>
                          <div class="m_m">
                              <text class="pay_money">￥200</text>
                              <text class="m_q">起</text>
                          </div>
                      </div>
                  </div>
              </cell>
              <cell class="goods_info" @click="jump('detail')">
                  <div class="goods_img">
                      <image style="width:168px; height:180px; background-color: green; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="https://static.rong360.com/upload/png/c6/ed/c6ed92ee5b7f81ace8fed17f5c7b3261.png"></image>
                      <text class="no_goods">暂无库存</text>
                  </div>
                  <div class="goods_details">
                      <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
                      <text class="goods_price">¥3799</text>
                      <div class="pay_area">
                          <text class="m_p">月供：</text>
                          <div class="m_m">
                              <text class="pay_money">￥200</text>
                              <text class="m_q">起</text>
                          </div>
                      </div>
                  </div>
              </cell>
          </list>
      </div>
  </div>
</template>

<script>
    var navigator = weex.requireModule('navigator');
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream');
    export default {
        methods: {
            jump (event) {
              this.$router && this.$router.push(event);
              modal.toast({ message: 'callback: 跳转回调成功'+event});

            }
        },
        data () {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
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
  /* 额度分期提示 */
  .banner{
    height: 260px;
    background-image: linear-gradient(to right,#FF8A71,#FF3061);
    flex-direction: column;
    align-items: center;
  }
  .comment {
    lines:1;
    font-size: 28px;
    height: 38px;
    color: #fff;
    text-align: center;
    margin-top: 56px;
  }
  .money {
    lines:1;        
    font-size: 76px; 
    color: #fff;
    text-align: center;
    height: 100px;
    padding-top: 6px;
  }
  /* 充值中心入口、数码3C */
  .recharge_tip {
        height: 160px; 
        display: flex;
        flex-direction: row;
        background-color: #fff;
        margin-top: 20px;
        padding-top: 40px;
        padding-bottom: 40px;
        justify-content: space-between;
        align-items: center;
    }
  .sale_area {
        flex-direction: row;
        flex: 1;
        height:160px;
        align-items:center;
        padding-left:40px;
  }
  .sale_img_url{
      width: 80px;
      height: 80px; 
  }
  .sale_cont {
        flex: 2;
        margin-left: 10px;
    }
  .sale_goods {
        height: 42px;
        line-height: 42px; 
        font-size: 30px;
        color: #333;
    }
  .goods_ex {
        height: 28px;
        line-height: 28px; 
        font-size: 20px;
        color: #999;
        margin-top: 10px;
    }
  /* 产品列表 */
  .goods_list_area {
      margin-top: 20px;
      background-color: #fff;      
  }
  .goods_list{
    flex-direction: column;    
    height: 1120px;
  }
  .goods_title {
      padding-left: 30px;
      height: 88px;
      line-height: 88px;
      font-size: 30px;
      color: #333;
      border-bottom-color: #EFEFF4;
      border-bottom-width: 1px;
      border-bottom-style: solid;
  }
  .goods_info {
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 20px;
      flex-direction: row;
  }
  .goods_img {
      flex: 170;
      position: relative;
      margin-bottom: 20px;
  }
  .no_goods {
      width: 168px;
      height: 32px;
      line-height: 32px; 
      color: #fff;
      font-size: 18px;
      text-align: center;
      background-color: rgba(51,51,51,.8);
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
  }
  .goods_details {
      flex: 520;
      margin-left: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #EFEFF4;
  }
  .goods_name {
      font-size: 28px;
      line-height: 36px;
      color: #333;
      margin-top: -2px;
  }
 .goods_price {
      font-size: 24px;
      height: 32px;
      line-height: 32px;
      color: #999;
      margin-top: 21px;
  }
  .pay_area {
      flex-direction: row;
      height: 40px;
      margin-top: 15px;
  }
  .m_p {
      flex: 20;
      font-size: 24px;
      color: #999;
      height: 36px;
      line-height: 36px;
  }
  .m_m {
      flex: 118;
      flex-direction: row;
  }
  .pay_money {
      flex: 10;
      font-size: 30px;
      color: #FA5D5D;
      height: 40px;
      line-height: 40px;
      margin-top: -4px;
  }
  .m_q {
      flex: 35;
      font-size: 24px;
      color: #FA5D5D;
      height: 36px;
      line-height: 36px;
  }
</style>

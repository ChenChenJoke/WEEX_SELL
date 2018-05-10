<template>
    <div class="goods_details_views">
        <div class="titlebar">
            <text class="cont">商品详情</text>
            <text class="goback_btn" @click="jump('index')"><</text>
        </div>
        <div class="goods_info">
            <div class="show_img">
                <div class="img_box">
                    <image style="width: 448px; height: 504px; background-color: red;" src="https://static.rong360.com/upload/png/db/be/dbbe6f992e10829c08889f0cf6086afa.png"></image>
                </div>
                <div>
                    <text class="img_num">3/7</text>
                </div>
            </div>
            <div>
                <text class="goods_name">苹果 Apple iPad Pro 平板电脑 9.7英寸 2017新款</text>
            </div>
            <div>
                <text class="goods_price">¥3799</text>
            </div>
            <div class="goods_service">
                <div class="real">
                    <div class="icon_box">
                        <image style="width: 24px; height: 26px; background-color:red;"></image>
                    </div>
                    <text class="icon_cont">正品保障</text>
                </div>
                <div class="s_day">
                    <div class="icon_box">
                        <image style="width: 24px; height: 26px; background-color:red;"></image>
                    </div>
                    <text class="icon_cont">7天退换</text>
                </div>
                <text class="go_choose">></text>
            </div>
        </div>
        <div class="choose_version">
            <text class="cv_label">选择</text>
            <div class="cv_cont_box">
                <text class="cv_cont" lines="1">颜色分类，内存容量，优惠套餐，版本型号，尺寸大小</text>
            </div>
            <text class="cv_go">></text>
        </div>
        <div style="background-color: #fff;">
            <div class="goods_details">
                <div>
                    <text class="gd_title">商品详情</text>
                </div>
                <div class="big_img">
                    <div class="bm_box">
                        <image style="width: 500px; height: 420px;" src="https://static.rong360.com/upload/png/8b/a9/8ba9750a05399ed0616f67ad634ba8c2.png"></image>
                    </div>
                </div>
                <list class="sm_img_box">
                    <cell class="sm_img_line">
                        <div class="sm_img_row" style="margin-right:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                        <div class="sm_img_row" style="margin-left:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                    </cell>
                </list>
                <list class="sm_img_box">
                    <cell class="sm_img_line">
                        <div class="sm_img_row" style="margin-right:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                        <div class="sm_img_row" style="margin-left:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                    </cell>
                </list>
                <list class="sm_img_box">
                    <cell class="sm_img_line">
                        <div class="sm_img_row" style="margin-right:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                        <div class="sm_img_row" style="margin-left:10px">
                            <div class="sm_img">
                                <div class="sm_box">
                                    <image style="width: 200px; height: 360px;" src="https://static.rong360.com/upload/png/a9/17/a9178c8d9ab61c7b274adcc2817dedea.png"></image>
                                </div>
                            </div>
                            <text class="sm_cont">采用巴拉巴拉小魔仙</text>
                        </div>
                    </cell>
                </list>
            </div>
            <div class="link_seller">
                <div class="icon_img">
                    <image style="width: 32px; height: 34px; background-color: red;"></image>
                </div>
                <text class="icon_cont">联系商家</text>
            </div>
        </div>
        <div class="pay_btn_area">
            <div class="money_area">
                <text class="ma_l">月供：</text>
                <text class="ma_m">￥200</text>
                <text class="ma_e">起</text>
            </div>
            <div class="submit_btn">
                <text class="submit_cont">分期购买</text>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {
          
        }
    }
</script>
<style>
    .goods_details_views .goods_details_views {
        background-color: #eee;
    }
    .goods_details_views .titlebar {
        background-color: #fff;
        padding-left: 32px;
        padding-right: 32px;
        font-size: 32px;
        height: 80px;
        position: relative;
        width: 100%;
    }
    .goods_details_views .titlebar .goback_btn {
        width: 20px; 
        height: 38px;
        position: absolute;
        left: 32px;
        top: 20px;
    }
    .goods_details_views .titlebar .cont {
        width: 100%;
        height: 80px;
        color: #000;
        line-height: 80px;
        text-align: center;
    }
    
    .goods_details_views .goods_info {
        background-color: #fff;
        padding-left: 30px;
        padding-right: 30px;
    }
    .goods_details_views .goods_info .show_img {
        width: 100%;
        height: 580px;
        position: relative;
    }
    .goods_details_views .goods_info .img_box {
        width: 448px; 
        height: 504px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -252px;
        margin-left: -224px;
    }
    .goods_details_views .goods_info .img_num {
        width: 80px; 
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 24px;
        background-color: #D8D9DC;
        color: #fff;
        position: absolute;
        right: 0px;
        top: 510px;
        border-bottom-left-radius: 20px; 
        border-bottom-right-radius: 20px; 
        border-top-left-radius: 20px; 
        border-top-right-radius: 20px;
    }
    .goods_details_views .goods_info .goods_name {
        height: 40px;
        line-height: 40px;
        font-size: 30px;
        color: #555;
        margin-top: 30px;
    }
    .goods_details_views .goods_info .goods_price {
        height: 52px; 
        line-height: 52px; 
        font-size: 40px;
        color: #FA5D5D;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #EFEFF4;
    }
    .goods_details_views .goods_info .goods_service {
        flex-direction: row;
        padding-top: 22px;
        padding-bottom: 22px;
    }
    .goods_info .goods_service .real, 
    .goods_details_views .goods_info .goods_service .s_day {
        flex-direction: row;
        flex: 1;
    }
    .goods_details_views .goods_info .goods_service .s_day {
        flex: 2;
    }
    .goods_details_views .goods_info .goods_service .go_choose {
        flex: 1;
        color: #999;
        text-align: right;
    }
    .goods_details_views .goods_info .goods_service .icon_box {
        margin-top: 4px;
    }
    .goods_details_views .goods_info .goods_service .icon_cont {
        height: 34px; 
        line-height: 34px; 
        font-size: 24px; 
        color: #999;
        margin-left: 10px;
    }


    .goods_details_views .choose_version {
        flex-direction: row;
        background-color: #fff;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 22px;
    }
    .goods_details_views .choose_version .cv_label {
        height: 90px;
        line-height: 90px;
        color: #999;
        font-size: 26px;
        flex: 1;
    }
    .goods_details_views .choose_version .cv_cont_box {
        flex: 9.5;
    }
    .goods_details_views .choose_version .cv_cont {
        height: 90px;
        line-height: 90px;
        color: #4B4B4B;
        font-size: 26px;
        lines: 1;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .goods_details_views .choose_version .cv_go {
        height: 90px;
        line-height: 90px;
        color: #999;
        flex: 1;
        font-size: 26px;
        text-align: right;
    }

    .goods_details_views .goods_details {
        margin-top: 20px;
        background-color: #fff;
        padding-left: 30px;
        padding-right: 30px;
    }
    .goods_details_views .goods_details .gd_title {
        font-size: 26px;
        height: 78px;
        line-height: 78px;
        color: #999;
    }
    .goods_details_views .goods_details .big_img {
        width: 100%;
        height: 420px;
        background-color: #ececec;
        position: relative;
    }
    .goods_details_views .goods_details .big_img .bm_box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px; 
        height: 420px;
        margin-top: -210px;
        margin-left: -250px;
    }

    .goods_details_views .goods_details .sm_img_line {
        flex-direction: row;
        height: 420px;
    }
    .goods_details_views .goods_details .sm_img_row {
        flex: 1;
    }
    .goods_details_views .goods_details .sm_img {
        width: 100%;
        height: 360px;
        background-color: #ececec;
        position: relative;
    }
    .goods_details_views .goods_details .sm_box {
        width: 200px; 
        height: 360px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -180px;
        margin-left: -100px;
    }
    .goods_details_views .goods_details .sm_cont {
        font-size: 20px;
        color: #999;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }

    .goods_details_views .link_seller {
        width: 236px;
        height: 60px;
        border: 1px solid #4080E8;
        margin-top: 42px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 130px;
        border-bottom-left-radius: 6px; 
        border-bottom-right-radius: 6px; 
        border-top-left-radius: 6px; 
        border-top-right-radius: 6px;
        flex-direction: row;
    }
    .goods_details_views .link_seller .icon_img {
        flex: 3;
        justify-content: center;
        align-items:center;
        margin-left: 40px;
    }
    .goods_details_views .link_seller .icon_cont {
        flex: 10;
        font-size: 26px;
        height: 60px;
        line-height: 60px;
        color: #4080E8;
    }


    .goods_details_views .pay_btn_area {
        width: 100%;
        height: 90px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        flex-direction: row;
    }
    .goods_details_views .pay_btn_area .money_area {
        flex: 46;
        flex-direction: row;
    }
    .goods_details_views .pay_btn_area .ma_l {
        flex: 57;
        font-size: 24px;
        height: 90px;
        line-height: 90px;
        color: #999;
        text-align: right;
    }
    .goods_details_views .pay_btn_area .ma_m {
        flex: 63;
        height: 90px;
        line-height: 90px;
        margin-top: -4px;
        font-size: 40px;
        color: #FA5D5D;
    }
    .goods_details_views .pay_btn_area .ma_e {
        flex: 123;
        font-size: 24px;
        height: 90px;
        line-height: 90px;
        color: #FA5D5D;
    }
    .goods_details_views .pay_btn_area .submit_btn {
        flex: 29;
        width: 100%;
        height: 90px;
        background-image: linear-gradient(to right,#FF8A71,#FF3061);
    }
    .goods_details_views .pay_btn_area .submit_cont {
        height: 90px;
        line-height: 90px;
        text-align: center;
        color: #fff;
        font-size: 32px;
    }
</style>
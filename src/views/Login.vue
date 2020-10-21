<template>
    <div class="login"
         :style="{'backgroundImage': 'url(' + img + ')'}">
        <div class="box">
            <div class="box-l">
                <img class="logo" :src="moyunLogo"/>
                <p>摩云网络科技作为华厦建工从传统建筑业向装配式建筑模式转型，并逐步用互联网的方式赋能建筑业的重要组成部分，致力于通过新一代信息技术打造互联网建筑企业，打通建筑行业产业链条，缔造建筑企业一站式服务中心</p>
                <h4>智慧·专业·创新·未来</h4>
            </div>
            <div class="box-r">
                <h2 class="title">安全监督平台</h2>
                <p class="login-tab">登录</p>
                <el-input placeholder="请输入手机号" prefix-icon="el-icon-user-solid" v-model="mobile" style="margin-top: 40px"/>
                <el-input placeholder="请输入密码"
                            prefix-icon="el-icon-s-goods"
                            v-model="pwd"
                            style="margin-top: 20px"
                            type="password"/>
                <button class="login-btn">立即登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                img: require('@/assets/images/login.jpg'),
                pwd: '',
                mobile: ''
            }
        },
        computed: {
            ...mapState(['tokenName', 'moyunLogo'])
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        height: 100vh;
        position: relative;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .box {
            width: 700px;
            height: 485px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            .box-l {
                box-sizing: border-box;
                width: 300px;
                padding: 50px 30px;
                background-color: rgba(58, 98, 215, 0.54);
                .logo {
                    display: block;
                    width: 100%;
                }
                p {
                    font-size: 14px;
                    color: #fff;
                    margin-top: 50px;
                    padding: 0 20px;
                    text-align: justify;
                }
                h4 {
                    font-size: 20px;
                    color: #fff;
                    margin-top: 30px;
                    padding: 0 20px;
                }
            }
            .box-r {
                box-sizing: border-box;
                width: 400px;
                background-color: #fff;
                padding: 45px 40px;
                .title {
                    color: $color;
                    font-size: 28px;
                    text-align: center;
                    letter-spacing: 5px;
                    font-weight: normal;
                }
                .login-tab {
                    color: $color;
                    font-size: 20px;
                    text-align: center;
                    letter-spacing: 5px;
                    line-height: 40px;
                    margin-top: 30px;
                    border-bottom: 2px solid $color;
                }
                /deep/ .el-input__inner {
                    background-color: rgba(181,187,204, .1);
                    height: 50px;
                    font-weight: 600;
                    font-size: 18px;
                    padding-left: 48px;
                    letter-spacing: 1px;
                    &:focus {
                        border-color: rgb(202, 205, 211);
                    }
                }
                /deep/ .el-input__icon {
                    line-height: 48px;
                    margin-left: 10px;
                    font-size: 18px;
                    color: #999;
                }
                .login-btn {
                    background-color: $color;
                    display: block;
                    width: 100%;
                    height: 50px;
                    margin-top: 44px;
                    border: none;
                    font-size: 18px;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                    &:active {
                        background-color: rgb(72, 109, 218);
                    }
                }
            }
        }
    }
</style>

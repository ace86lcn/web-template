<template>
    <div class="project-detail">
        <div class="top-box com_box" >
            <p class="top project_top">企业详情</p>
            <div class="detail">
                <div class="left">公司名称
                    <span>111</span>
                </div>
                <div class="left">统一社会信用代码
                    <span style="margin-left: 49px;">111</span>
                </div>
                <div class="left">法人姓名
                    <span>111</span>
                </div>
                <div class="left">注册时间
                    <span>111</span>
                </div>
            </div>
        </div>
        <div class="top-box com_box bottom_box">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item  class="top">社保单</el-menu-item>
            </el-menu>
            <div class="detail">
                <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
                    <el-table-column fixed prop="teamName" label="编号" ></el-table-column>
                    <el-table-column prop="teamNo" label="订单时间" ></el-table-column>
                    <el-table-column prop="corp_name" label="订单金额（元）" ></el-table-column>
                    <el-table-column prop="corp_name" label="缴纳月份" ></el-table-column>
                    <el-table-column prop="corp_name" label="企业缴纳金额（元）" ></el-table-column>
                    <el-table-column prop="corp_name" label="个人缴说金额（元）" ></el-table-column>
                </el-table>
                <pages :page.sync="page" :total="total"></pages>
            </div>
        </div>
    </div>
    
</template>

<script>
import { GetCompanyDetail } from '@/api/CompanyDetail'
import Pages from '../../components/Pages'
export default {
    components: {
        Pages
    },
    data() {
        return {
            page: 1,
            total: 0,
            activeIndex: '1',
            tableData: []
            // id: this.$router.query.id
        }
    },
    methods: {
        getListDetail() {
            this.$http(GetCompanyDetail, {})
        }
    },
    created() {
    }
}
</script>

<style lang="scss">

 .el-table{
    margin-left: 0 !important;
}
.container .main .content-container .content-wrapper[data-v-fae5bece] {
    background: #F3F3F3 100%;
    padding: 0 !important;
}
.el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
    .project-detail{
        width: 100%;
        .com_box{
            padding-top: 20px;
        }
        .top-box{
            background: #fff;
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0);
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
            margin-bottom: 10px;
            .top{
                color: #000;
                font-weight:500;
                margin-left: 50px;
                font-size: 18px;
            }
            font-size: 20px;
            font-weight: 100;
            color: rgba(16, 16, 16, 1);
            font-family: PingFangSC-regular;
            .detail{
                margin-top: 30px;
                font-size: 18px;
                margin-left: 50px;
                margin-bottom: 10px;
                padding-right: 20px;
                .left{
                    padding-bottom: 16px;
                }
                span{
                    margin-left: 121px;
                }
            }
        }
        .bottom_box{
            padding-bottom: 50px;
        }
    }
</style>

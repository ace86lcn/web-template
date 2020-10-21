<template>
    <div class="project">
        <search 
            @search="handleSearch" 
            @reset="handleReset"
            placeholder='请输入公司名称搜索'
            >
        </search>
        <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
            <el-table-column fixed prop="teamName" label="企业名称" width="250"></el-table-column>
            <el-table-column prop="teamNo" label="社会统一信用代码" width="300"></el-table-column>
            <el-table-column prop="corp_name" label="缴纳社保人员数量" width="300"></el-table-column>
            <el-table-column prop="corp_name" label="缴税单总数量" width="302"></el-table-column>
            <el-table-column prop="corp_name" label="缴税总金额（元）" width="302"></el-table-column>
            <el-table-column fixed="right" prop="corp_name" label="操作" width="250">
                <template slot-scope="scope"> 
                    <el-button @click="handleDetail(scope.row)" type="text" size="small">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pages :page.sync="page" :total="total"></pages>
    </div>
</template>

<script>
import Search from '../../components/Search'
import Pages from '../../components/Pages'
import { GetProjectList } from '@/api/CompanyDetail'
export default {
    components: {
        Search,
        Pages
    },
    data() {
        return {
            tableData: [],
            content: '',
            page: 1,
            total: 0,
        }
    },
    watch: {
        'page'(val) {
            this.getList()
        }
    },
    methods: {
        // 搜索
        handleSearch(val) {
            this.content = val
            this.page = 1
            this.getList()
        },
        // 重置
        handleReset() {
            this.content = ''
            this.page = 1
            this.getList()
        },
        getList() {
            this.$http(GetProjectList, {content: this.content, page: this.page})
            .then(res => {
                if(res.data.code == 200) {
                    this.tableData = res.data.data.data;
                    this.total = res.data.data.total;
                }
            })
        },
        handleDetail(row) {
            let id = this.row.id
            this.$router.push({
                path: '/socia-data/detail',
                query: {
                    id
                }
            })
        }
    },
    created() {
        this.getList()
    }
}
</script>

<style lang="scss" scoped>
    
</style>

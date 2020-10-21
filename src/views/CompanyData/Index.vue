<template>
    <div class="company">
        <search 
            @search="handleSearch" 
            @reset="handleReset"
            placeholder='请输入公司名称搜索'
            >
        </search>
        <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
            <el-table-column fixed prop="teamName" label="编号" width="400"></el-table-column>
            <el-table-column prop="teamNo" label="企业名称" ></el-table-column>
            <el-table-column prop="corp_name" label="社会统一信用代码" ></el-table-column>
            <el-table-column fixed="right" prop="corp_name" label="法人姓名" width="250"></el-table-column>
        </el-table>
        <pages :page.sync="page" :total="total"></pages>
    </div>
</template>

<script>
import Search from '../../components/Search'
import Pages from '../../components/Pages'
import { GetConpanyList } from '@/api/company'
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
            this.$http(GetConpanyList, {content: this.content, page: this.page})
            .then(res => {
                if(res.data.code == 200) {
                    this.tableData = res.data.data.data;
                    this.total = res.data.data.total;
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

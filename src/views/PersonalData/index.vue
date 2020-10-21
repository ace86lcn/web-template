<template>
    <div class="personal">
        <search 
            @search="handleSearch" 
            @reset="handleReset"
            placeholder='请输入姓名搜索'
            >
        </search>
        <el-table :data="tableData" border style="width: 100%;margin-top:20px;">
            <el-table-column fixed prop="teamName" label="编号" ></el-table-column>
            <el-table-column prop="teamNo" label="姓名" ></el-table-column>
            <el-table-column prop="corp_name" label="身份证号" ></el-table-column>
        </el-table>
        <pages :page.sync="page" :total="total"></pages>
    </div>
</template>

<script>
import Search from '../../components/Search'
import Pages from '../../components/Pages'
import { GetPersonalList } from '@/api/personal'
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
            this.$http(GetPersonalList, {content: this.content, page: this.page})
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

<template>
    <div>
        <el-row>
            <el-form inline :model="sForm" label-width="80px">
                <el-form-item prop="name" label="车名">
                    <el-input v-model="sForm.name"/>
                </el-form-item>
                <el-form-item prop="vendor" label="厂商">
                    <el-select v-model="sForm.vendor">
                        <el-option v-for="(car, index) in cars" :key="index" :label="car" :value="car"/>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-row style="margin-bottom: 22px">
            <el-button>添加</el-button>
            <el-button>删除</el-button>
        </el-row>
        <el-row style="margin-bottom: 22px">
            <el-table :data="tableData" border stripe>
                <el-table-column prop="name" label="车名"/>
                <el-table-column prop="vendor" label="厂家"/>
                <el-table-column prop="price" label="价格"/>
            </el-table>
        </el-row>
        <el-row>
            <el-pagination
                    @size-change="sizeChange"
                    @current-change="pageChange"
                    :current-page="pager.page"
                    :page-sizes="[5,10,20]"
                    :page-size="pager.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pager.total">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    const cars = ['丰田', '马自达', '日产', '铃木', '本田', '斯巴鲁', '三菱']
    const testData = [
        {
            name: '车名',
            vendor: '厂家',
            price: '15',
        }, {
            name: '车名',
            vendor: '厂家',
            price: '15',
        }, {
            name: '车名',
            vendor: '厂家',
            price: '15',
        }, {
            name: '车名',
            vendor: '厂家',
            price: '15',
        }, {
            name: '车名',
            vendor: '厂家',
            price: '15',
        },
    ]

    export default {
        name: "CarList",
        data() {
            return {
                cars,
                tableData: testData,
                sForm: {
                    name: '',
                    vendor: ''
                },
                pager: {
                    page: 1,
                    size: 5,
                    total: 500
                }
            }
        },
        methods: {
            sizeChange() {
            },
            pageChange() {
            }
        }
    }
</script>

<style scoped>

</style>
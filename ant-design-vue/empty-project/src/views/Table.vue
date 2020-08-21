<template>
    <div>
        <a-row>
            <h3>用户名：{{$store.state.userInfo.nickName}}</h3>
        </a-row>
        <a-row>
            <!-- 一定要添加row-key -->
            <!-- row-selection加入checkbox选择列 -->
            <a-table
                    :pagination="false"
                    :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                    :columns="columns" :data-source="tableData" :row-key="record=>record.id">
                <div slot="id" slot-scope="text, record"><span style="color: red">{{ text+' '+record.name }}</span>
                </div>
                <div slot="idTitle">
                    <a-icon type="key"/>
                    序号
                </div>
                <div slot="nameTitle">
                    <a-icon type="book"/>
                    书名
                </div>
                <div slot="authorTitle">
                    <a-icon type="user"/>
                    作者
                </div>
                <div slot="priceTitle">
                    <a-icon type="pay-circle"/>
                    价格
                </div>
                <div slot="publishTitle">
                    <a-icon type="calendar"/>
                    发行日
                </div>
                <div slot="op" slot-scope="_, record">
                    <a-button size="small" @click="edit(record)">编辑</a-button>
                    <a-button style="margin-left: 5px" type="danger" size="small" @click="removeOne(record)">删除
                    </a-button>
                </div>
                <template slot="footer">
                    <a-pagination
                            :current="pager.page"
                            :total="pager.total"
                            :show-total="total=>`共 ${total} 条数据`"
                            :show-size-changer="true"
                            :page-size-options="['5', '10', '20']"
                            :page-size="pager.size"
                            @change="onPageChange"
                            @showSizeChange="onShowSizeChange"
                    />
                </template>
            </a-table>

            <a-modal v-model="form.visible" title="编辑">
                <a-form-model :model="form.data" layout="horizontal">
                    <a-form-model-item label="书名">
                        <a-input v-model="form.data.name"/>
                    </a-form-model-item>
                    <a-form-model-item label="作者">
                        <a-input v-model="form.data.author"/>
                    </a-form-model-item>
                    <a-form-model-item label="类型">
                        <a-select v-model="form.data.type">
                            <a-select-option value="科幻">
                                科幻
                            </a-select-option>
                            <a-select-option value="言情">
                                言情
                            </a-select-option>
                            <a-select-option value="传记">
                                传记
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item label="价格">
                        <a-input-number v-model="form.data.price"/>
                    </a-form-model-item>
                </a-form-model>

                <template slot="footer">
                    <a-button key="back" @click="handleCancel">
                        取消
                    </a-button>
                    <a-button key="submit" type="primary" @click="handleOk">
                        提交
                    </a-button>
                </template>
            </a-modal>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                form: {
                    visible: false,
                    data: {
                        id: '',
                        name: '',
                        author: '',
                        type: '',
                        description: '',
                        price: 0,
                        publishTime: ''
                    }
                },
                tableData: this.$store.state.tableData.data,
                columns: [
                    {
                        dataIndex: 'id',
                        key: 'id',
                        // title: '序号',
                        slots: {title: 'idTitle'}, // 声明
                        scopedSlots: {customRender: 'id'}, // 声明slot的名称
                    },
                    {
                        // title: '书名',
                        dataIndex: 'name',
                        key: 'name',
                        slots: {title: 'nameTitle'}
                    },
                    {
                        // title: '作者',
                        dataIndex: 'author',
                        key: 'author',
                        slots: {title: 'authorTitle'}
                    },
                    {
                        title: '类型',
                        key: 'type',
                        dataIndex: 'type',
                        scopedSlots: {customRender: 'type'},
                    },
                    {
                        title: '简介',
                        key: 'description',
                        dataIndex: 'description'
                    },
                    {
                        // title: '价格',
                        key: 'price',
                        dataIndex: 'price',
                        slots: {title: 'priceTitle'}
                    },
                    {
                        // title: '发行日',
                        key: 'publishTime',
                        dataIndex: 'publishTime',
                        slots: {title: 'publishTitle'}
                    },
                    {
                        title: '操作',
                        key: 'operation',
                        scopedSlots: {customRender: 'op'}
                    },
                ],
                selectedRowKeys: [],
                pager: {
                    page: 1,
                    size: 5,
                    total: 500
                }
            }
        },
        methods: {
            onSelectChange(keys, items) {
                console.log(keys)
                console.log(items)
                this.selectedRowKeys = keys
            },
            removeOne(record) {
                console.log(record)
                // 用代码调用模态对话框
                this.$confirm({
                    title: '确定删除？',
                    content: `将要删除 序号: ${record.id} 书名: ${record.name} 的书，确定么？`,
                    okType: 'danger',
                    onOk() {
                        console.log('OK');
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            },
            edit(record) {
                for (let key in this.form.data) {
                    this.form.data[key] = record[key]
                }
                this.form.visible = true
            },
            handleOk() {
                this.form.visible = false
            },
            handleCancel() {
                this.form.visible = false
            },
            onShowSizeChange(current, size) {
                console.log(current)
                console.log(size)
                this.pager.size = size
            },
            onPageChange(page) {
                console.log(page)
                this.pager.page = page
            }
        }
    }
</script>

<style scoped>

</style>

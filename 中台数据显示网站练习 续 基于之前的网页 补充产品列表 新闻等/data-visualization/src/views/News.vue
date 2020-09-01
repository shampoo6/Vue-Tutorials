<template>
    <div class="news-container">
        <div class="content-container">
            <!--第一列-->
            <div class="news-col" style="margin-right: 15px;">
                <!--走马灯-->
                <div>
                    <el-carousel height="300px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!--公告列表-->
                <div>
                    <Title :title="'公告'"/>
                    <List v-for="(item, index) in anno" :item="item" :key="index">
                        <template slot-scope="scope">
                            <a style="cursor: pointer; color: blue">{{scope.item.content}}</a>
                        </template>
                    </List>
                </div>
            </div>
            <!--第二列-->
            <div class="news-col">
                <Title :title="'新闻'"/>
                <List v-for="(item, index) in news" :item="item" :key="index">
                    <template slot-scope="scope">
                        <a style="cursor: pointer">{{scope.item.content}}</a>
                    </template>
                </List>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../components/Title'
    import List from '../components/List'

    export default {
        name: 'News',
        components: {
            Title,
            List
        },
        data() {
            return {
                anno: [
                    {content: '这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告'},
                    {content: '这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告'},
                    {content: '这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告'},
                    {content: '这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告'},
                    {content: '这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告这是一个特别长的公告'},
                ],
                news: [
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                    {content: '这是一个新闻'},
                ]
            }
        }
    }
</script>

<style scoped>
    .news-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .content-container {
        display: flex;
        max-width: 1360px;
        flex-wrap: wrap;
    }

    .news-col {
        /*border: 1px black solid;*/
        width: 508px;
        height: 100%;
    }

    .el-carousel__item {
        text-align: center;
    }

    .el-carousel__item h3 {
        /*color: #475669;*/
        color: #fff;
        font-size: 14px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

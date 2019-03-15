<template lang="pug">
.question
    img.bg(src='/static/imgs/test.jpg')
    scroll-view.qs_content(v-if='questions.length > 0' scroll-y)
        div(v-if='!startqs')
            p.title 温馨提示
            p 《更愿意和谁一个team》
            .warn_tag 为了更好的制定工作计划，提高大家的协作效率，请回答以下问题（部分为多选）
        div(v-else)
            p.title {{questions[currentIndex].title}} (选{{questions[currentIndex].limit_number}}人,共{{questions[currentIndex].option.length}}人)
            .response(
                v-for="(item,index) in questions[currentIndex].option" 
                :key='index'
                @click="selectCheckbox(index)"
                )
                img(v-if='item.select' src='/static/imgs/selected.jpg')
                img(v-else src='/static/imgs/unselect.jpg')
                span {{item.label}}

            //- div(v-if='plus_show' style="margin-top:20px;") 有什么好的建议或想法？
            //-     textarea(placeholder='选填' style='border:1px solid #ccc;height:90px;')
    button.qs_btn(
        @click='btn_click'
        :disabled="disabled"
    ) {{btn_title}}
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            startqs: false, // 是否显示问题列表
            currentIndex: 0, // 记录当前回答到第几道题
            btn_title: '开始问答', // 按钮的title
            lesson: '', // 记录提交的问题

            plus_show: true,// 补充说明
        }
    },
    onLoad() {
        this.getData();
    },
    onShow() {
        // 理解mpvue的生命周期
        // https://www.cnblogs.com/imgss/p/9164924.html
        // 重新进入页面后，需重置
        this.startqs = false
        this.currentIndex = 0
        this.btn_title = '开始问答'
        this.lesson = ''

        this.plus_show = true
    },
    computed: {
        disabled() {
            if (!this.startqs) return false
            else {
                const option = this.questions[this.currentIndex].option
                let select = false

                option.forEach(item => {
                    if (item.select) select = true
                })

                return !select
            }
        }
    },
    methods: {
        getData() {
            // this.questions = [
            //     {
            //         "title": "UI",
            //         "option": [{
            //                 "label": "凡文娟",
            //                 "select": false,
            //                 vote_number:2,
            //             },
            //             {
            //                 "label": "韩文杰",
            //                 "select": false,
            //                 vote_number:3,
            //             }
            //         ],
            //         limit_number:1,
            //     },{
            //         "title": "前端",
            //         "option": [
            //             {
            //                 "label": "王剑飞",
            //                 "select": false,
            //                 vote_number:3,
            //             },
            //             {
            //                 "label": "李鹏",
            //                 "select": false,
            //                 vote_number:3,
            //             },
            //             {
            //                 "label": "吴明昊",
            //                 "select": false,
            //                 vote_number:2,
            //             },
            //             {
            //                 "label": "郝丕煜",
            //                 "select": false,
            //                 vote_number:1,
            //             },
            //             {
            //                 "label": "楚士通",
            //                 "select": false,
            //                 vote_number:5,
            //             }
            //         ],
            //         limit_number:2,
            //     }
            // ]

            this.questions = [
                {
                    "title": "UI",
                    "option": [
                        {
                            "label": "凡文娟",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "韩文杰",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:1,
                },{
                    "title": "产品",
                    "option": [
                        {
                            "label": "何建斌",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "孟明华",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "李琦",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:1,
                },{
                    "title": "ios",
                    "option": [
                        {
                            "label": "张安东",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "张朝阳",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:1,
                },{
                    "title": "android",
                    "option": [
                        {
                            "label": "宁杉",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "王飞",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:1,
                },{
                    "title": "前端",
                    "option": [
                        {
                            "label": "李鹏",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "王剑飞",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "吴明昊",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "郝丕煜",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "楚士通",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:2,
                },{
                    "title": "测试",
                    "option": [
                        {
                            "label": "王海超",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "高亚超",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "苏日",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "常超",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "张威",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:2,
                },{
                    "title": "后端",
                    "option": [
                        {
                            "label": "李定宇",
                            "select": false,
                            vote_number:0,
                        },{
                            "label": "田海宁",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "马贺伟",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "程森",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "冻小宏",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "张迪",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "张彪",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "高义强",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "张钰潇",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "普乾晟",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "陈鹏飞",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "吴晨旭",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "李亚洲",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "李银峰",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "白长健",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "陈涛",
                            "select": false,
                            vote_number:0,
                        },
                        {
                            "label": "吴晨旭",
                            "select": false,
                            vote_number:0,
                        }
                    ],
                    limit_number:8,
                },
            ]
        },
        btn_click() {
            // 开始答题
            if (!this.startqs) {
                this.startqs = true
                this.btn_title = '下一组'
            }
            // 答题中
            else {
                this.lesson += this.getSelectOption()
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++
                    this.lesson += ','
                    // 最后一题
                    if (this.currentIndex == this.questions.length - 1) {
                        this.btn_title = '完成'
                    }
                } else {
                    // console.log(this.lesson)
                    // 完成
                    this.sendQuestions()
                }

                if(this.currentIndex > 0){
                    this.plus_show = false
                }
            }
        },
        selectAnswer(index) {
            const option = this.questions[this.currentIndex].option
            // 将列表中的是否选项都置为未选中
            option.forEach(item => {
                item.select = false
            });
            // 将点击的选项选中
            option[index].select = !option[index].select
        },
        selectCheckbox(index) {
            const option = this.questions[this.currentIndex].option

            // 将点击的选项选中
            option[index].select = !option[index].select
            // 计票数增减
            if(option[index].select){
                option[index].vote_number++
            }else{
                option[index].vote_number--
            }
        },
        getSelectOption() {
            const option = this.questions[this.currentIndex].option
            let label = ''
            option.forEach(item => {
                if (item.select) label = item.label
            })
            return label
        },
        sendQuestions() {
            // console.log(this.lesson)
            // 存储对应成员答题情况，

            // 跳转结果展示页面
            // wx.navigateTo({
            //     url: `../result/main?lesson=${this.lesson}`,
            // })
            // console.log(this.lesson)

            // 处理结果
            const questions = this.questions
            // 重置选中状态
            questions.forEach((item,index)=>{
                item.option.forEach((cItem,cIndex)=>{
                    // console.log(this.questions[index])
                    // console.log(this.questions[index].option[cIndex])
                    this.questions[index].option[cIndex].select = false
                })
            })

            // 保存结果
            var saveResult = this.questions;

            // 展示结果,按部门内部排序
             saveResult.forEach((item,index)=>{
                saveResult[index].option.sort((a,b)=>{
                    return b.vote_number - a.vote_number
                })
            })
            var showResult = encodeURI(JSON.stringify((this.questions)));

            // console.log('+++++++++saveResult:',saveResult)
            // console.log('+++++++++showResult:',showResult)

            // 跳转结果展示页面
            wx.navigateTo({
                url: `../result/main?lesson=${showResult}`,
            })

        }
    }
}
</script>

<style scoped>
.question {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.question .bg {
    width: 100%;
    height: 100%;
}

.qs_content {
    position: absolute;
    width: 80%;
    height: 50%;
    background: #fff;
    top: 36%;
    left: 10%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    color: rgb(13, 28, 51);
}

.qs_btn {
    position: absolute;
    top: 90%;
    left: 10%;
    width: 80%;
    background-color: #009eef;
    color: white;
}

.title {
    font-weight: bold;
    margin-bottom: 20px;
    word-break: break-all;
}

.warn_tag {
    padding: 40px 10px;
}

.response {
    padding: 10px;
}

.response img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>

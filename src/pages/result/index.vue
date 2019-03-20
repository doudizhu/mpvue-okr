<template lang="pug">
    scroll-view.learn(scroll-y)
        //- .start_lesson
        //-     navigator(url='../question/main')
        //-         button 重新提交

        .hot_lesson
          vote-person-cell(:img='votePerson.img' :title='votePerson.title' :level='votePerson.level' :count='votePerson.count' :url='votePerson.url')
                
        .hot_lesson
            .lesson_all 
                span 统计结果
                span.look_all 分类
            //- div(v-for='(item,index) in hotLessons' :key='index')
            //-     lesson-cell(:img='item.img' :title='item.title' :level='item.level' :count='item.count' :url='item.url')
            div(v-for='(item,index) in hotLessons' :key='index' style='margin:0 0 20rpx 20rpx;')
              h3 {{item.title}}：
              div(v-for='(citem,cindex) in item.option' :key='cindex')
                p {{citem.label}}
                  | ({{citem.vote_number}}票)
</template>

<script>
import lessonCell from '../../components/lessonCell/index'
import votePersonCell from '../../components/votePersonCell/index'
export default {
    data(){
        return {
            votePerson:[],
            hotLessons:[],
        }
    },
    onLoad(option){
        // console.log(option)
        // console.log(this.$store.state.user)
        // let item = option.lesson.split(','),
        //     level = item[0],
        //     count = item[1],
        //     url = item[2],

        //     user = this.$store.state.user,
        //     img = user.avatarUrl,
        //     title = user.nickName,

        //     hotlesson = {
        //         img,
        //         title,
        //         level,
        //         count,
        //         url,
        //     }
            
        // this.hotLessons.unshift(hotlesson)

        // console.log(JSON.parse(decodeURIComponent(option.lesson)))
        // 0.用户信息展示模块
        let user = this.$store.state.user,
            img = user.avatarUrl,
            title = user.nickName;
        this.votePerson = {
          img,
          title,
          level:'',
          count:'',
          url:'',
        }

        // 1.调用保存结果接口
        this.hotLessons = JSON.parse(decodeURIComponent(option.lesson));
        this.$https.request({
          url: this.$interfaces.saveOkrTeamWithVote,
          data: {
            okrTeamWithVote:this.hotLessons,
          },
        })
        .then(res => {
          console.log(res)
          // 1.统计，融合数组
          var result = res.list.reduce(function (previousValue,currentValue,currentIndex) {
              previousValue.forEach(function(item,index){
                  item.option.forEach(function(cItem,cIndex){
                      previousValue[index].option[cIndex].vote_number += currentValue[index].option[cIndex].vote_number
                  })
              })
              return previousValue
          })
          // 2.排序，按部门内部
          result.forEach((item,index)=>{
              result[index].option.sort((a,b)=>{
                  return b.vote_number - a.vote_number
              })
          })
          // 3.展示结果，赋值
          this.hotLessons = result;
        })
        .catch(err => console.log(err))
    },
    components:{
        lessonCell,
        votePersonCell,
    },
}
</script>

<style scoped>
.learn {
  height: 100%;
  box-sizing: border-box;
}
.learn_info {
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
}
.learn_info img {
  width: 85px;
  height: 85px;
}
.info_text {
  padding: 10px;
}
.info_text h4 {
  font-weight: bold;
}
.info_text h4 span {
  color: #009eef;
}
.info_text p {
  color: #ccc;
  font-size: 14px;
  margin-top: 10px;
}
.info_text p span {
  color: #85c646;
}

.my_lesson .hot_lesson {
  width: 100%;
  margin-top: 16px;
  background-color: #fff;
  border: 1px solid #ebeef5;
}

.lesson_wrap {
  width: 100%;
  overflow-x: auto;
}
.lesson_scroll {
  max-width: 200%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
}
.lesson_card {
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 10px 5px;
}
.lesson_card img {
  width: 100%;
  height: 100px;
  border-radius: 5px;
}
.lesson_card span {
  font-size: 14px;
  color: #333;
}
::-webkit-scrollbar {
  display: none;
}
.start_lesson {
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
}
.start_lesson button {
  background-color: #fff;
  color: #009eef;
  width: 150px;
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.start_lesson button::after {
  border: none;
}

/* 修复样式 */
.my_lesson,
.start_lesson{
  background-color: #fff;
}
.my_lesson{
  margin-top: 16px;
  border-top: 1px solid #ebeef5;
}
.start_lesson{
  border-bottom: 1px solid #ebeef5;
}

.hot_lesson {
  width: 100%;
  margin-top: 16px;
  background-color: #fff;
  border: 1px solid #ebeef5;
}


.lesson_all {
  width: 100%;
  box-sizing: border-box;
  /* padding: 10px; */
  overflow: hidden;
  line-height: 46px;
  padding: 0 10px;
}
.lesson_all .look_all {
  font-size: 12px;
  color: #aaa;
  float: right;
  
}
</style>

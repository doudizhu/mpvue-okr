<template lang="pug">
    .lesson_cell
        img(:src='img')
        .cell_text
            h4 {{title}}
            navigator(url='../question/main')
                button 重新提交
            //- p
            //-     span.level {{level}}
            //-     span.learn_count 建议{{count}}开始
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        level: String,
        count: String,
        url: String,
    },
}
</script>

<style>
.lesson_cell {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 240rpx;
  padding: 20rpx 32rpx;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
.lesson_cell img {
  /* width: 40%; */
  width: 200rpx;
  height: 200rpx;
  margin-right: 10px;
  border-radius: 5px;
}
.cell_text {
  width: 60%;
}
.cell_text h4 {
  margin-top: 10px;
  /* height: 60px; */
  height: 90rpx;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.cell_text p {
  font-size: 14px;
}
.cell_text p .level {
  color: #eb8831;
  margin-right: 20px;
}
.cell_text p .learn_count {
  color: #ccc;
}


button {
  background-color: #fff;
  color: #009eef;
  width: 150px;
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
button::after {
  border: none;
}
</style>
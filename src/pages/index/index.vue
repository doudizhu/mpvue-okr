<template lang="pug">
.container
    .login
        img(src='/static/imgs/guide_bg.jpg')
    .learn
        button(
            open-type="getUserInfo"
            @getuserinfo="getUserInfo"
        ) 调查问卷
</template>

<script>
export default {
    methods: {
        getUserInfo(e) {
            // 判断授权是否成功
            if (e.mp.detail.userInfo) {
                // console.log(e.mp.detail.userInfo)
                // 存储到vuex
                this.$store.dispatch('setIsAuthenticated', true)
                this.$store.dispatch('setUser', e.mp.detail.userInfo)
                // 获取code(临时登录凭证)
                this.getCode()

                wx.redirectTo({
                    url: '../question/main',
                })
            }
        },
        getCode(){
            // 在mpvue中，提供了一个全局小程序对象 wx
            wx.login({
                success: res => {
                    this.getOpenid(res.code)
                }
            })
        },
        getOpenid(code){
            // 三个参数 appid secret code
            const appid = 'wxd6fd386162d262f7'
            const secret = 'a8616ba0579022a93fc26dd488212d8c'
 
            wx.request({  
                url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&js_code='+code+'&grant_type=authorization_code',  
                data: {},  
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                // header: {}, // 设置请求的 header  
                success: function(res){
                    var obj={};
                    obj.openid=res.data.openid;  
                    obj.expires_in=Date.now()+res.data.expires_in;  
                    //console.log(obj);
                    wx.setStorageSync('user', obj);//存储openid 
                    console.log(wx.getStorageSync('user'))
                }  
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.login {
    width: 100%;
    height: 100%;
    position: relative;
}

.login img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.login .learn {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
}

.learn button {
    position: absolute;
    top: 90%;
    left: 10%;
    width: 80%;
    background-color: #009eef;
    color: white;
}
</style>
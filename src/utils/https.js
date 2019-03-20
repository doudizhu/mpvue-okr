const https = {
    request(options = {}){
        const {
            url,
            data,
            header = {
                "Content-Type": "application/x-www-form-urlencoded",
            },// post请求需要这条配置
            method = 'post',
        } = options

        // 加载动画
        wx.showLoading({
            title: '加载中...',
        })

        return new Promise((resolve,reject) => {
            wx.request({
                url,
                data: method == 'post' ? {
                    params: JSON.stringify(
                        // 请求参数加入openid
                        Object.assign(
                            data,
                            {
                                openid:wx.getStorageSync('user').openid,
                            }
                        )
                    ),
                    from: 'M',
                    imei: 'imei',
                    appKey: '88888888',
                } : data,
                header,
                method,
                success(res){
                    wx.hideLoading()
                    
                    // 判断网络
                    if(res.statusCode == 404){
                        reject()
                        return false
                    }else if(res.statusCode != 200){
                        wx.showToast({
                            title: '网络出错，稍后再试！',
                            icon: 'none',
                        })

                        return false
                    }
                    
                    // 成功返回数据
                    resolve(res.data)
                },
                fail(error){
                    // 失败
                    wx.hideLoading()
                    reject(error)
                },
                complete(){
                    wx.hideLoading()
                },
            })  
        })
    }
}

export default https
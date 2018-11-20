Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        
        // 跳转到tabBar页面，并关闭所有非tabBar页面
        wx.switchTab({
            url: "../posts/post"
        });
        
    }
})
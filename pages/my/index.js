var app = getApp()
Page( {
  data: {
    userInfo: {},
    // projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ 
    //   {
    //   icon: '../../images/orders-icon.png',
    //  // icon: '../../images/order.png',
    //   text: '我的订单',
    //   isunread: true,
    //   unreadNum: 2
    // }, 
    // {4px
    //     icon: '../../images/iconfont-card.png',
    //     text: '我的代金券',
    //     isunread: false,
    //     unreadNum: 2
    //   }, 
      // {
      //   icon: '../../images/iconfont-icontuan.png',
      //   text: '我的拼团',
      //   isunread: true,
      //   unreadNum: 1
      // }, 
      // {
      //   icon: '../../images/adress-icon.png',
      //   text: '收货地址管理',
      //   isunread: true,
      //   unreadNum: 2
      // }, 
      // {
      //   icon: '../../images/iconfont-kefu.png',
      //   text: '联系客服'
      // }, 
      // {
      //   icon: '../../images/iconfont-help.png',
      //   text: '常见问题'
      // }
      ]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  // 联系地址
  tap_address: function (e) {
    wx.navigateTo({
      url: "../addresss/index"
    })
  },
})
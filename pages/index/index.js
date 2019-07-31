//获取应用实例
var app = getApp()
import {rootUrl} from '../../utils/params'
var call = require("../../utils/request.js")
Page({
    data: { 
      imgUrls: [  
            
        ],
      proLst:[],
      // imgUrls: [
      //   {
      //     link: `/pages/proInfo/index?id=85`,
      //     url: 'https://pic0.test.com/item/user_0102/desc20190428/64b1c76a54accaee_-1x-1.jpg'
      //     // url:`${rootUrl}/images/upload/index_ppt_001.jpg` 
      //   }, {
      //     link: '/pages/proInfo/index?id=93',
      //     url: 'https://pic2.test.com/item/user_0102/desc20190423/4b984cafcec68f45_-1x-1.jpg'
      //     // url:`${rootUrl}/images/upload/index_ppt_003.jpg`  
      //   }
      // ]
      // proLst:[
      //     {
      //           link:`/pages/proInfo/index?id=93`,  
      //     url:`https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174909441,2495215020&fm=26&gp=0.jpg` ,
      //           text:'洁面水乳+天才水+玻尿酸精华',
      //           title:'年终特惠价￥158.00'
      //     },{
      //         link:`/pages/proInfo/index?id=86`,  
      //         url: `${rootUrl}/images/upload/index_list_ban_093.jpg`,
      //           text:'白竹炭净颜洗面奶男女通用100ML',
      //           title:'销售价￥58.00'
      //     },{
      //         link:`/pages/proInfo/index?id=88`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_088.jpg` ,
      //           text:'玻尿酸精华液25ML',
      //           title:'销售价￥109.00'
      //     },{
      //         link:`/pages/proInfo/index?id=87`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_087.jpg` ,
      //           text:'青春密码天才水爽肤水125ML',
      //           title:'销售价￥109.00'
      //     },{
      //         link:`/pages/proInfo/index?id=85`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_085.jpg` ,
      //           text:'蓝莓水盈深润蚕丝面膜25ML*6片装',
      //           title:'销售价￥49.90'
      //     },{
      //         link:`/pages/proInfo/index?id=84`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_084.jpg` ,
      //           text:'玫瑰提亮净颜蚕丝面膜25ML*6片装',
      //           title:'销售价￥49.90'
      //     },{
      //         link:`/pages/proInfo/index?id=82`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_082.jpg` ,
      //           text:'水灵灵密集保湿蚕丝面膜30ML*6片装',
      //           title:'销售价￥59.90'
      //     },{
      //         link:`/pages/proInfo/index?id=81`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_081.jpg` ,
      //           text:'鲜嫩嫩舒缓修复蚕丝面膜30ML*6片装',
      //           title:'销售价￥59.90'
      //     },{
      //         link:`/pages/proInfo/index?id=95`,  
      //           url:`${rootUrl}/images/upload/index_list_ban_095.jpg` ,
      //           text:'天杞园特殊膳食 科学 安全 有效 不反弹',
      //           title:'销售价￥198.00'
      //     }
      // ],  
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        // loadingHidden: false,  // loading
        userInfo:'',
        userDate:''
    },
    onShareAppMessage() {
        return {
        title: '佰露集微商城',
        desc: '一个专卖良心商品的小网站',
        path: '/pages/index'
        }
    },
    onLoad(){
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo((userInfo)=>{
            // 更新数据
            this.setData({
                userInfo: userInfo
            })
        })

      call.getData('/item//item/api/queryItem', this.shuffleSuc, this.fail);
      



        //sliderList
        // wx.request({
        //     url: `${rootUrl}/api/dbCart_action.php?act=cartCount`,
        //     method: 'POST',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: (res)=>{
        //         this.setData({
        //             userDate: res,
        //             loadingHidden:true
        //         })
        //     }
        // })

  }, shuffleSuc: function (data) {

    var that = this;

    that.setData({

      imgUrls: data.imgUrls,
      proLst: data.proLst

    })

    //我后面测试了一下，直接this.setData也可以，但是因为我在没有使用封装方法的时候

    //this.setData报过错，不能直接用this，所以我在赋值的时候一般都会加上var that = this;

  },

  fail: function () {

    console.log("失败")

  },
})

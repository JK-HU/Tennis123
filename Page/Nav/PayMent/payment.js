// Page/Nav/PayMent/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paymoney:'168',
    paydetails:[
      { type:'级别',value:'单打'},
      { type: '城市', value: '合肥'},
      { type: '场馆', value: '合肥体育馆'},
      { type: '已报名', value:'6',signUpall:'80'}
    ]
  },

  /**
   * goWxPay 支付按钮
   * wxPayRequest
   */
  goWxPay: function() {
      wx.showModal({
        title:'提示',
        content:'报名后退赛须收取一定比例手续费, 请您报名时仔细阅读比赛信息。用户在比赛开始前24小时以上退赛时系统将收取退赛手续费5%（如报名费100元，退赛手续费5元）24小时以内找到替补成功退赛，系统将收取退赛费10%（如报名费100元，退赛手续费10元）。',
        success: (res) => {
          console.log(res);
          if (res.confirm) {
            //确认
            this.requesFun();

          }else if(res.cancel){
            //取消

          }
        }
      })
  },
  requesFun: function() {
    wx.request({
      url: '',
      method:'POST',
      header:{
        'content-type':'application/json'
      },
      data:{
        openId: openId

      },
      success : (res) => {
        this.wxPayRequest(res);
        this.showToastFun();
      },
      fail: (res) => {
        console.log(res)
        let title = '支付失败';
        this.showToastFun(title);
      }
    })
  },
  //wxPayRequest请求支付
  wxPayRequest: function (param) {
    wx.requestPayment({
      timeStamp: '', 
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
    })
  },
  //showToast提示
  showToastFun: function (title = '支付成功') {
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2000
    });

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
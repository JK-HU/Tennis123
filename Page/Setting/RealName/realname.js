// Page/Setting/RealName/realname.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : '',
    idcard : '',
    verification : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
<<<<<<< HEAD
   * bindName 监听姓名输入
   * bindIdCard 身份证输入
   * bindVerification 验证码输入
=======
   * bindVerification 验证按钮
>>>>>>> 赛事小程序
  */
  bindIpt : function(res) {
    if (res.target.dataset.type == 'name') {
      this.data.name = res.detail.value
    }
    if (res.target.dataset.type == 'idcard') {
      this.data.idcard = res.detail.value
    }
    if (res.target.dataset.type == 'verification') {
      this.data.verification = res.detail.value
    }
<<<<<<< HEAD
    // console.log(this.data.name)
    // console.log(this.data.idcard)
    // console.log(this.data.verification)
=======
>>>>>>> 赛事小程序

  },

  /**
  * bindVerification
  */
  bindVerification: function (res) {
<<<<<<< HEAD
=======
    if (this.data.name == '') {
      this.toastFun('姓名没有填写');
      return false;
    }
    if (this.data.idcard == '') {
      this.toastFun('证件号没有填写');
      return false;
    }
    if (this.data.verification == '') {
      this.toastFun('验证码没有填写');
      return false;
    }
>>>>>>> 赛事小程序
    wx.request({
      url : '',
      header : {
        'content:type' : 'application/json'
      },
      method : 'POST',
      data : {
        name : this.data.name,
        idcard: this.data.idcard,
        verification : this.data.verification
      },
      success : function(res) {
<<<<<<< HEAD

=======
        
>>>>>>> 赛事小程序
      },
      fail : function() { 
        console.log('验证失败!');
      }

    })
  },
<<<<<<< HEAD
=======
  toastFun(title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 1600
    });
  },
  showLoadFun(title = '加载中') {
    wx.showLoading({
      title: title
    });
  },
  hideLoadFun() {
    wx.hideLoading();
  },
>>>>>>> 赛事小程序


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
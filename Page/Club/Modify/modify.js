// Page/Club/CreateClub/createClub.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleVal: '',
    descriptVal: '',
    status: [
      { sclass_id: '1', sclass_name: '胜一场+5积分, 败一场-5积分' },
      { sclass_id: '2', sclass_name: '胜一场+5积分, 败一场+1积分' },
      { sclass_id: '3', sclass_name: '胜一场+10积分, 败一场+1积分 ' }
    ],
    matchState: '' //胜利获积分
  },

  /**
   * bindSave 保存  
   * getTitle 俱乐部名称
   * getDescript 俱乐部介绍内容
  */
  getTitle: function (res) {
    this.setData({
      titleVal: res.detail.value
    })
  },
  getDescript: function (res) {
    this.setData({
      descriptVal: res.detail.value
    })
  },
  radioChange: function (res) {

    this.data.matchState = res.detail.value;
  },
  bindSave: function (res) {
    wx.request({
      url: '',
      data: {
        titleVal: this.data.titleVal,
        descriptVal: this.data.descriptVal,
        matchState: this.data.matchState //胜利积分
      },
      success: () => {
        this.showLoadingFun('保存成功');
        this.hideLoadingFun();
      },
      fail: () => {
        this.showLoadingFun('保存失败');
        this.hideLoadingFun();
      }
    })
  },
  showLoadingFun: function (tit) {
    wx.showLoading({
      title: tit
    })
  },
  toastFun: function(title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 1600
    });
  },
  hideLoadingFun: function () {
    setTimeout(function () {
      wx.hideLoading();
    }, 900)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    
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
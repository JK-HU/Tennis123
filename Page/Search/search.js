// Page/Search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconLeft : 43,
    iconDisplay : 'display',
    cancelFlag : false,
    placeHolderTextStyle : 'center',
    searchArr : []
  },

  /** 
   * bindsearch 绑定搜索
   * toSearch 搜索请求函数
   * loadFun  加载方法
   * bindfocus - bindGet 获取焦点
   * bindblur - bindLose  失去焦点
  */

  bindsearch : function(event) {
    this.setData({
      value: event.detail.value
    });
    this.toSearch();
    this.loadShowFun();
  },
  bindGet : function() {
    this.setData({
      iconLeft : 7,
      iconDisplay: 'block',
      placeHolderText : '输入用户名',
      placeHolderTextStyle : 'left'
    });
  },
  toSearch : function() {
    wx.request({
      url: 'https://api.avatardata.cn/Account/Info?key=9edcb640291a495c898192699a4a51f8',
      header : {
        'content-type' : 'application/xml'
      },
      success : (res) => {
        wx.hideLoading();
        let result = [...res.data.result.packages];
        this.setData({
          searchArr : result
        });

        
      },
      fail : function(res) {
        wx.hideLoading();
        console.log('请求失败!');
      }
    })
  },

  loadShowFun : function() {
    wx.showLoading({
      title: '加载中',
    })
  },
  loadHideFun : function() {
    
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
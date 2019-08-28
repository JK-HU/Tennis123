// Page/Group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconLeft: 43,
    iconDisplay: 'display',
    cancelFlag: false,
    placeHolderTextStyle: 'center',
<<<<<<< HEAD
    searchArr: []
=======
    searchArr: [],
    matchArr: [
      { imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=396447046,3924424001&fm=15&gp=0.jpg', title:'2019武汉网球公开赛城市网球俱乐部巡回赛(第八站)',time:'2019-07-13',adress:'安徽省',look:'234'}
    ],
    scrollTop: 0,
    height: 0
>>>>>>> 赛事小程序
  },
  /** 
   * bindsearch 绑定搜索
   * toSearch 搜索请求函数
   * loadFun  加载方法
   * bindfocus - bindGet 获取焦点
   * bindblur - bindLose  失去焦点
   * 
   * navBtnTt 团体赛的按钮
   * ajaxComFun 请求数据的公共方法
  */

  bindsearch : function(event) {
    this.setData({
      value: event.detail.value
    });
    //this.loadShowFun();
  },
  bindGet: function() {
    this.setData({
      iconLeft: 7,
      iconDisplay: 'block',
      placeHolderText: '输入用户名',
      placeHolderTextStyle: 'left'
    });
  },
  bindLose : function() {
    this.loadHideFun();
  },
  loadShowFun: function() {
    wx.showLoading({
      title: '加载中',
    })
  },
  navBtnTt : function() {
    
  },

<<<<<<< HEAD
  ajaxComFun : function() {

  },


=======
  pullUpFun: function () {
    wx.request({
      url: '',
      data: {
        getNum: getNum,
        start: start
      },
      success: function (res) {

      },
      fail: function () { }
    });
  },
  lower: function (event) {
    console.log('-------滑到底部了------');
    this.setData({
      start: start + 5
    });
    console.log(this.data.start)
    this.showLoadingFun('正在加载');
    this.hideLoadingFun();
  },
  scroll: function (event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    })
  },
>>>>>>> 赛事小程序


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD

=======
    wx.getSystemInfo({
      success: (res) => {
        // 获取可使用窗口高度
        let clientHeight = res.windowHeight;
        // 获取可使用窗口宽度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;

        this.setData({
          height: height - 140
        })
      },
      fail: () => {

      }
    })
>>>>>>> 赛事小程序
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
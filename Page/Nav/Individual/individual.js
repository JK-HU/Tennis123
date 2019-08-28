// Page/Nav/Individual/individual.js
Page({

  /**
   * 页面的初始数据
<<<<<<< HEAD
   */
  data: {

=======
   * array 地区
   * state 状态
   * level 级别
   * category 类别
   * 
   */
  data: {
    scrollTop: 0,
    height : 0,
    array : ['安徽'], // 安徽省
    state: ['全部状态','正在报名','比赛进行中','比赛结束'],
    level: ['所有级别','公开赛单','5.0单','4.5单','4.0单','3.5单','3.0单','2.5单','2.0单','公开赛双','9.0双','8.0双','7.0双','6.0双','5.0双','4.0双'],
    category: ['类别','成人','中小学生'],
    index: 0, //地区选择索引,默认为零
    statIndex: 0, //状态索引
    levelIndex: 0, //级别索引
    categoryIndex: 0, //类别索引
    matchArr : [
      { title: '("鱼飞"网球俱乐部邀请公开赛单) 2019', peopleNum: '6/16', matchState: '比赛结束', playStyle: '单打', openStyle: 'open', peopleCategory: '中小学生', time: '2019-6-28 08:08', adress:'合肥奥体中心网球俱乐部 | 合肥'}
    ],
    getNum : 5, //上拉加载的个数
    start : 0 //从哪点开始
  },

/**
  * bindRegionChange 地区选择
  * bindStateChange 全部状态
  * bindLevelChange 所有级别
  * bindCategoryChange 类别
  * pullUpFun 上拉加载
  */ 
  bindRegionChange: function(options) {
    
    this.setData({
      index : options.detail.value
    });
    this.selectFun('region', this.data.index);
  },
  bindStateChange: function(options) {
    
    this.setData({
      statIndex: options.detail.value
    });
    this.selectFun('state', this.data.statIndex);
  },
  bindLevelChange: function(options) {
    this.setData({
      levelIndex: options.detail.value
    });
    this.selectFun('level', this.data.levelIndex);
  },
  bindCategoryChange: function(options) {
    this.setData({
      categoryIndex: options.detail.value
    });
    this.selectFun('category', this.data.categoryIndex);
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
      scrollTop : event.detail.scrollTop
    })
  },

  selectFun: function (title,opts) {
    const requestTask = wx.request({
      url: 'https://api.avatardata.cn/Nba/NomalRace?key=ffdf5822f50e4c819083dbd5861576f4',
      data : {
        title : title,
        index : opts
      },
      success : (e) => {
        this.showLoadingFun(title = '加载完成');
      },
      fail : (e) => {
        this.showLoadingFun(title = '加载失败');
        this.hideLoadingFun();
      }
    })
  },
  pullUpFun: function() {
    wx.request({
      url : '',
      data : {
        getNum: getNum,
        start : start
      },
      success : function(res) {

      },
      fail : function() {}
    });
  },

  showLoadingFun: function(tit) {
    wx.showLoading({
      title : tit 
    })
  },
  hideLoadingFun: function() {
    setTimeout(function() {
      wx.hideLoading();
    },900)
>>>>>>> 赛事小程序
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD

=======
    wx.getSystemInfo({
      success : (res) => {
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
      fail : () => {

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
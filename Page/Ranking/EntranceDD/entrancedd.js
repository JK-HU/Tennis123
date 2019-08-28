// Page/Ranking/EntranceDD/entrancedd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   *switchChange 仅看当前用户的方法
   *  
   */
  switchChange : (res) => {
    console.log(res);
  },


=======
    regionIndex : 0, //地区索引
    yearIndex : 0, //年份索引
    dstyleIndex : 0, //单5.0 索引
    peopleIndex : 0,  //人群索引
    regionArr : ['安徽'], //地区数组
    yearArr: ['选择年份', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012'], //年份数组
    dArr : ['公开赛单','5.0单','4.5单','4.0单','3.5单','3.0单','2.5单','2.0单'], //单5.0数组
    peopleArr : ['类别','成人','中小学生'], //人群数组
    getNum: 5, //上拉加载的个数
    start: 0, //从哪点开始
    dataArr: [
      { name: '张三', ranking: '第一名', integral: '8847', nickName_G: '7', nickName_Y: '23', joinMatch: '23', winMatch: '93/100', winProbabillity: '79.2%' }
    ]
  },

  /**
   * bindRegionChange 地区选择
   * bindYearChange 年份选择
   * bindDstyleChange 公开赛单
   * bindPeopleChange 人,类别
   * switchChange 仅看当前用户
   * 
   */
  bindRegionChange: function(res) {
    this.setData({
      regionIndex: res.detail.value
    });
    this.selectFun('region', this.data.regionIndex);
  },
  bindYearChange: function(res) {
    this.setData({
      yearIndex: res.detail.value
    });
    this.selectFun('region', this.data.yearIndex);
  },
  bindDstyleChange: function(res) {
    this.setData({
      dstyleIndex: res.detail.value
    });
    this.selectFun('region', this.data.dstyleIndex);
  },
  bindPeopleChange: function(res) {
    this.setData({
      peopleIndex: res.detail.value
    });
    this.selectFun('region', this.data.peopleIndex);
  },
  switchChange : function(res) {
    let onlyCurrUser = res.detail.value;

    this.selectFun('onlyCurrUser', onlyCurrUser);
  },
  selectFun: function (title, opts) {
    const requestTask = wx.request({
      url: 'https://api.avatardata.cn/Nba/NomalRace?key=ffdf5822f50e4c819083dbd5861576f4',
      data: {
        title: title,
        opts: opts
      },
      success: (e) => {
        this.showLoadingFun(title = '加载完成');
      },
      fail: (e) => {
        this.showLoadingFun(title = '加载失败');
        this.hideLoadingFun();
      }
    })
  },
  showLoadingFun: function (tit) {
    wx.showLoading({
      title: tit
    })
  },
  hideLoadingFun: function () {
    setTimeout(function () {
      wx.hideLoading();
    }, 900)
  },
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
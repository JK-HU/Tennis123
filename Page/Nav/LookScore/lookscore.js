// Page/Nav/LookScore/lookscore.js
Page({

  /**
   * 页面的初始数据
   * 在
   */
  data: {
    currentTab: 0,
    dateArray : [
      { xz: '小组1', sc: '胜场', jsj: '净胜局', pm: '排名', bf: '比分'}
    ],
    mainArray:[
      {name:'jack',win : '2' , onlyWin : '4' , sort : '3' , bifen : '比分'},
      { name: 'mary', win: '2', onlyWin: '4', sort: '3', bifen: '比分' }
    ],
    sceneArray : [
      {
        first : [
          {
            scene : '第1场',
            name : 'jack',
            age : '3'
          },
          {
            name: 'mary',
            age: '7' 
          }
        ]
      },
      {
        first: [
          {
            scene: '第2场',
            name: 'helly',
            age: '8'
          }
        ] 
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  /**
   * 点击tab clickTab
   */

  clickTab: function (e) {
<<<<<<< HEAD
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
=======
    console.log(e.target.dataset.current)
    this.setData({
      currentTab: e.target.dataset.current
    });
    this.switchTabFun(e.target.dataset.current);
    this.showLoadFun('加载中');
    this.hideLoadFun();
>>>>>>> 赛事小程序
  },

  /*
   *bindToTable
  */
  bindToTable : function(e) {
    wx.navigateTo({
      url: '/Page/Nav/LookScore/LookScoreTable/lookscoretable'
    });
  }, 

<<<<<<< HEAD
=======
  switchTabFun: function (currTabIndex = this.data.currentTab) {
    wx.request({
      url: '',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function () { },
      fail: function () { }
    })
  },
  showLoadFun: function (tit) {
    wx.showLoading({
      title: tit
    });
  },
  hideLoadFun: function () {
    setTimeout(() => {
      wx.hideLoading();
    }, 2000);
  },

>>>>>>> 赛事小程序
  /**
   * 
   * stopTouchMove
   */
  stopTouchMove : function () {
    return false;
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
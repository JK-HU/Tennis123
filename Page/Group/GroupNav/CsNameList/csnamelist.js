// Page/Group/GroupNav/CsNameList/csnamelist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    groupArr : [
      {group: "A组", name : "陈乐仁"},
      {group: "B组", name : "无敌"}
    ]

  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式, 同时这里当标题改变的时候,对应的内容也要传参改变
  swichNav: function (e) {
<<<<<<< HEAD
    console.log(e)
    console.log(e.target.offsetLeft)
    var cur = e.target.dataset.current;
=======
    let cur = e.target.dataset.current;
    console.log(cur)
>>>>>>> 赛事小程序
    if (this.data.currentTaB == cur) { 
      return false; 
    }else {
      this.setData({
        currentTab: cur,
        scrollLeft: e.target.offsetLeft
      })
    }
<<<<<<< HEAD
=======
    this.switchTabFun(e.target.dataset.current);
    this.showLoadFun('加载中');
    this.hideLoadFun();
>>>>>>> 赛事小程序
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        // scrollLeft: 300
      })
    } else {
      this.setData({
        // scrollLeft: 0
      })
    }
  },
  /**
   *catchtouchmove 阻止滑动
   */
  catchtouchmove: function() {
    return false;
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
    }, 1500);
  },

>>>>>>> 赛事小程序
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });

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
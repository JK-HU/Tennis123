// Page/Group/GroupNav/Table/table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    display: true, //切换小组赛和淘汰赛是的显示隐藏
    mainArray: [
      {
        group: [
          {
            xz: '小组A'
          }
        ],
        gp: [
          {name: '瑜豪园', bf: '777', win: '1', onlyWin: '4', sort: '3',v:'1',m:'2'},
          { name: '张三', bf: '888', win: '2', onlyWin: '4', sort: '3', v: '2', m: '2'},
          { name: '李四', bf: '999', win: '3', onlyWin: '4', sort: '3', v: '3', m: '1'},
          { name: '王五', bf: '999', win: '3', onlyWin: '4', sort: '3', v: '2', m: '3'},
          { name: '名次', bf: '1999', win: '4', onlyWin: '8', sort: '3', v: '1', m: '9'}
          // { name: '净胜/盘', bf: '12', win: '4', onlyWin: '8', sort: '3', v: '1', m: '3'},
          // { name: '净胜/局', bf: '1999', win: '4', onlyWin: '8', sort: '3', v: '1', m: '5'}



        ]
      }
      
    ]

  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
<<<<<<< HEAD
=======
    this.switchTabFun(e.detail.current);
    this.showLoadFun('加载中');
    this.hideLoadFun();
>>>>>>> 赛事小程序
  },
  // 点击标题切换当前页时改变样式, 同时这里当标题改变的时候,对应的内容也要传参改变
  swichNav: function (e) {
    console.log(e)
    console.log(e.target.offsetLeft)
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur,
        scrollLeft: e.target.offsetLeft
      })
    }
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
  catchtouchmove: function () {
    return false;
  },

  /*
  miniMatch 小组赛
  eliminateMatch 淘汰赛
  */ 
  miniMatch: function() {
    this.setData({
      display: true
<<<<<<< HEAD
    })
=======
    });
    this.switchTabFun('minMatch');
    this.showLoadFun('加载中');
    this.hideLoadFun();
>>>>>>> 赛事小程序
  },
  eliminateMatch: function() {
    this.setData({
      display: false
<<<<<<< HEAD
    })
  },
=======
    });
    this.switchTabFun('eliminateMatch');
    this.showLoadFun('加载中');
    this.hideLoadFun();
  },

  switchTabFun: function (currTabIndex = this.data.currentTab) {
    wx.request({
      url: '',
      data: {},
      header:{
        'content-type':'application/json'
      },
      success: function(){},
      fail: function(){}
    })
  },
  showLoadFun: function(tit){  
    wx.showLoading({
      title : tit
    });
  },
  hideLoadFun: function() {
    setTimeout( () => {
      wx.hideLoading();
    },2000);
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
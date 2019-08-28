// Page/RecordsEntries/recordsentries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    date: '2016-09-01',
    filterList : [
      { sclass_id: '1',sclass_name : '团体赛'},
      { sclass_id: '2', sclass_name: '个人赛' },
      { sclass_id: '3', sclass_name: '青少年赛  ' },
      { sclass_id: '4', sclass_name: '大学生赛' },
      { sclass_id: '5', sclass_name: '系列赛' }
    ],
    status : [
      { sclass_id: '1', sclass_name: '待审核' },
      { sclass_id: '2', sclass_name: '已提交' },
      { sclass_id: '3', sclass_name: '不通过  ' },
      { sclass_id: '4', sclass_name: '通过' }
    ]
  },

  /**
   * bindDateChange
   * bindBlur赛事地点 失去焦点时获取
=======
    // filterList : [ //这个不用了
    //   { sclass_id: '1',sclass_name : '团体赛'},
    //   { sclass_id: '2', sclass_name: '个人赛' }
    // ],
    state: ['全部状态', '正在报名', '比赛进行中', '比赛结束'],
    level: ['所有级别', '公开赛单', '5.0单', '4.5单', '4.0单', '3.5单', '3.0单', '2.5单', '2.0单', '公开赛双', '9.0双', '8.0双', '7.0双', '6.0双', '5.0双', '4.0双'],
    statIndex:'0', //状态索引
    levelIndex: 0, //级别索引
    status : [
      { sclass_id: 'td', sclass_name: '团体赛' },
      { sclass_id: 'gr', sclass_name: '个人赛' }
    ],
    time: '2016-09-01', //默认是这个时间
    matchName:'', //赛事名字
    matchPlace: '', //赛事地点
    matchCity:'', //赛事城市
    // matchLabel: [], //赛事标签
    matchState: '', //赛事类型
    matchPeopleNum:'', //赛事总人数
    matchMoney:'',//赛事费用
    matchlevel:'' //赛事级别
  },


  /**
   * bindDateChange
   * bindMatchName 赛事名称
   * bindMatchPlace 赛事地点
   * bindMatchCity 赛事城市
   * bindMatchPeopleNum 参赛总人数
   * bindMatchMoney 费用
   * bindLevelChange级别
   * bindStateChange状态
>>>>>>> 赛事小程序
   * radioChange 单选
   * checkboxChange 多选
   */ 
  bindDateChange: function (e) {
<<<<<<< HEAD
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  checkboxChange: function(e) {},
  radioChange: function(e) {},
=======
    console.log(e.detail.value);
    this.setData({
      time: e.detail.value
    })
  },
  //赛事名称
  bindMatchName: function(res) {
    this.data.matchName = res.detail.value
  },
  //参数总人数
  bindMatchPeopleNum: function(res) {
    this.data.matchPeopleNum = res.detail.value;
  },
  //费用
  bindMatchMoney: function(res) {
    this.data.matchMoney = res.detail.value;
  },
  // 选择状态
  bindStateChange: function (options) {
    this.setData({
      statIndex: options.detail.value
    });
  },
  //选择级别
  bindLevelChange: function (options) {
    console.log(options.detail.value);
    this.setData({
      levelIndex: options.detail.value
    });
    this.data.matchlevel = this.data.level[this.data.levelIndex];

  },
  //赛事地点
  bindMatchPlace: function(res) {
    this.data.matchPlace = res.detail.value
  },
  //赛事城市
  bindMatchCity:function(res){
    this.data.matchCity = res.detail.value
  },
  checkboxChange: function(res) {
    console.log(res.detail.value)
    this.data.matchLabel = res.detail.value;
  },
  radioChange: function(res) {
    console.log(res);
    this.data.matchState = res.detail.value;
  },
  
  toastFun(title) {
    wx.showToast({
      title : title,
      icon : 'none',
      duration : 1600
    });
  },
  showLoadFun(title='加载中') {
    wx.showLoading({
      title:title
    });
  },
  hideLoadFun() {
    wx.hideLoading();
  },
  // 提交
  bindSubmit: function () {
    
    if (this.data.matchName == '') {
      this.toastFun('赛事名称没有填写');
      return false;
    }
    if (this.data.matchPlace == '') {
      this.toastFun('赛事地点没有填写');
      return false;
    }
    if (this.data.matchCity == '') {
      this.toastFun('赛事城市没有填写');
      return false;
    }
    if (this.data.matchPeopleNum == '') {
      this.toastFun('赛事总人数没有填写');
      return false;
    }
    if (this.data.matchMoney == '') {
      this.toastFun('赛事费用没有填写');
      return false;
    }
    if (this.data.matchlevel == '') {
      this.toastFun('赛事级别没有选择');
      return false;
    }
    if (this.data.matchState == '') {
      this.toastFun('赛事类型没有选择');
      return false;
    }
    // if (this.data.matchLabel.length == 0) {
    //   this.toastFun('赛事标签没有选择');
    //   return false;
    // }

    wx.request({
      url: 'https://api.avatardata.cn/Nba/NomalRace?key=ffdf5822f50e4c819083dbd5861576f4',
      data: {
        time: this.data.time, //时间
        matchName: this.data.matchName,//赛事名称
        matchPlace: this.data.matchPlace, //赛事地点
        matchCity: this.data.matchCity, //城市
        matchState: this.data.matchState, //赛事类型,td为团队赛,gr为个人赛
        matchPeopleNum: this.data.matchPeopleNum, //赛事总人数
        matchMoney: this.data.matchMoney, //费用
        matchlevel: this.data.matchlevel //赛事级别
      },
      success: () => {
        let title = '提交成功';
        this.showLoadFun(title);
        setTimeout(() => {
          this.hideLoadFun();
        }, 1600);
      },
      fail: () => {
        let title = '提交失败';
        this.showLoadFun(title);
        setTimeout(() => {
          this.hideLoadFun();
        }, 1600);
      }
    });
  },
>>>>>>> 赛事小程序

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
=======
  onLoad: function (res) {
    let that = this;
    // 这里用户是否登录的判断已经存在userInfo中了,直接判断就行了
    if (!getApp().globalData.userInfo.id) {
      wx.redirectTo({
        url: '../../Login/login',
      });
      return false;
    }
    // 进入创建赛事前,检测有没有创建俱乐部
    
    wx.request({
      url: getApp().globalData.domain + '/api/shop/getStoreInfo',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        u_id: getApp().globalData.userInfo.id
      },
      //  返回 res.data.code=1,说明已经创建
      success : function(res) {
        let isCreate = res.data.code
        if (isCreate !== '1') {
          that.toastFun('您还没有创建俱乐部,正在转向俱乐部'); //这步好像没执行
          setTimeout(function () {
            wx.request({
              url: '/Page/Club/CreateClub/createClub'
            })
          }, 1000);
        }
      }
    });
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
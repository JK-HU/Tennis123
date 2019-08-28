// Page/Setting/RetrievePsword/retrievepsword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    currentTab: 0,
    a_phone : '',
    a_verification :'',
    toastTitle : '',
    isDisabled: false,
    countDown: 10
=======
    // a_user: '',
    a_phone : '', //手机号
    getVerificationVal: '',//验证码的值
    toastTitle : '',
    isDisabled: false,
    countDown: 10,
    newPsword: '', //新密码
    configPsword: '' //确认密码
>>>>>>> 赛事小程序
  },

  /***
   * clickTab
   * bindData 监听表单数据
   * toastFun 提示
<<<<<<< HEAD
   * nextTo 下一步
   * isRegFuna 第一步的检验input方法
=======
>>>>>>> 赛事小程序
   * getVerification 验证码倒计时
   */
  bindData: function (e) {
    let value = e.detail.value;
    let valueType = e.target.dataset.type;
<<<<<<< HEAD
    switch (valueType) {
      case 'phone':
        this.data.a_phone = value;
        break;
      case 'verification':
        this.data.a_verification = value;
        break;
    }
  },
  
  clickTab : function(e) {
    
    let phoneReg = /^1[3578][0-9]{9}$/;
    if (this.data.a_phone == '') {
      this.data.toastTitle = '手机号没有填写';
      this.toastFun();
      return false;
    }
    if (!phoneReg.test(this.data.a_phone)) {
      this.data.toastTitle = '手机号不正确';
      this.toastFun();
      return false;
    }
    if (this.data.a_verification == '') {
      this.data.toastTitle = '验证码没有填写';
      this.toastFun();
      return false;
    }
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
=======
    this.data.a_phone = value;
    console.log(this.data.a_phone);
  },
  

>>>>>>> 赛事小程序
  stopTouchMove : function() {
    return false;
  },
  toastFun: function (tit = this.data.toastTitle) {
    wx.showToast({
      title : tit,
      icon : 'none',
      duration: 2000
    })
  },
<<<<<<< HEAD
  nextTo : function() {
    let phoneReg = /^1[3578][0-9]{9}$/;
=======

  // 验证码
  getVerification : function(event) { //验证码
    let phoneReg = /^1[3578][0-9]{9}$/;
    console.log(this.data.a_phone);
>>>>>>> 赛事小程序
    if (this.data.a_phone == '') {
      this.data.toastTitle = '手机号没有填写';
      this.toastFun();
      return false;
    }
<<<<<<< HEAD
    if (this.data.a_verification == '') {
      this.data.toastTitle = '验证码没有填写';
      this.toastFun();
      return false;
    }
=======
>>>>>>> 赛事小程序
    if (!phoneReg.test(this.data.a_phone)) {
      this.data.toastTitle = '手机号不正确';
      this.toastFun();
      return false;
<<<<<<< HEAD
    }else{
      this.setData({
        currentTab: 1
      })
    }

  },
  getVerification : function(event) {
=======
    }
    // 倒计时
>>>>>>> 赛事小程序
    let setval = setInterval (() => {
      let countDown = this.data.countDown;
      countDown--;
      this.setData({
        countDown : countDown,
        isDisabled: true
      })

      if (countDown <= 1) {
        clearInterval(setval);
        this.setData({
          countDown: 10,
          isDisabled: false
        });
      }
    },1000);
  },
<<<<<<< HEAD

=======
  // 验证码的值
  getVerificationVal: function(e) {
    this.data.getVerificationVal = e.detail.value
    console.log(this.data.getVerificationVal);
  },
  //监听密码和确认密码
  getPsword: function(e) { 
    console.log(e.detail.value);
    let valueType = e.target.dataset.type;

    switch (valueType) {
      case 'newPsWord' : 
        this.data.newPsword = e.detail.value
        break;
      case 'configNewPsWord' :
        this.data.configPsword = e.detail.value
        break;
    }
  },
  // 确认更改按钮
  changeConfirm: function() {
    let phoneReg = /^1[3578][0-9]{9}$/;
    if (this.data.a_phone == '') {
      this.data.toastTitle = '手机号没有填写';
      this.toastFun();
      return false;
    }
    if (!phoneReg.test(this.data.a_phone)) {
      this.data.toastTitle = '手机号不正确';
      this.toastFun();
      return false;
    }
    //验证码
    if (this.data.getVerificationVal == '') {
      this.data.toastTitle = '验证码没有填写';
      this.toastFun();
      return false;
    }
    if (this.data.newPsword !== this.data.configPsword) {
      this.data.toastTitle = '两次密码不一致';
      this.toastFun();
      return false;
    }

    wx.request({
      
      url : '',
      header : {
        'content-type':'application/json'
      },
      data:{
        phone: this.data.a_phone,
        getVerificationVal:this.data.getVerificationVal,
        configPsword:this.data.configPsword
      },
      success : function() {
        
      },
      fail : function() {
        
      }
    });
  },
>>>>>>> 赛事小程序

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
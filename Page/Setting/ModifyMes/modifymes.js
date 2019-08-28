// Page/Setting/ModifyMes/modifymes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fieldArr : [
      { field : '身高(cm)', name : 'sg'},
      { field : '体重(kg)', name : 'kg'},
<<<<<<< HEAD
      { field : '城市', name : 'cs'},
      { field : '学校', name : 'xx'},
      { field : '签名', name : 'qm'}
=======
      { field : '城市', name : 'cs'}
>>>>>>> 赛事小程序
    ],
    date: '2019-1-1',

    ballArray : ['prince 王子' , 'leader 领导' , 'Head 海德' , 'Babolal 百保利' , 'Wilson 威尔胜' , 'Volkl 沃克' , 'yonex 尤尼克斯' , 'Dunlop 邓禄普' , 'lining 李宁' , 'slazenger 史莱辛格'],
    objectBallArray : [
      { id: 0, name: 'prince 王子'},
      { id: 1, name: 'leader 领导' },
      { id: 2, name: 'Head 海德' },
      { id: 3, name: 'Babolal 百保利' },
      { id: 4, name: 'Wilson 威尔胜' },
      { id: 5, name: 'yonex 尤尼克斯' },
      { id: 6, name: 'Dunlop 邓禄普' },
      { id: 7, name: 'lining 李宁' },
      { id: 8, name: 'slazenger 史莱辛格' }
    ],
    ballIndex : 0,
<<<<<<< HEAD

    handBallArray : ['正手' , '反手'],
    handBallfArray: ['正手', '反手'],
    objectHandBallArray : [
      { id : 0 , name : '正手'},
      { id: 1, name: '反手' }
    ],
    objectHandBallfArray: [
      { id: 0, name: '正手' },
      { id: 1, name: '反手' }
    ],
    handBallIndex : 0,
    handBallfIndex: 0,

    jstypeArray : ['技术类型1','技术类型2'],
    objectJstypeArray : [
      { id : 0 , name : '技术类型1'},
      { id : 1 , name : '技术类型2'}
    ],
    jstypeArrayIndex : 0,

    heihgt: '',
    weight : '',
    city : '',
    school : '',
    autograph :''
=======
    name:'',
    phone:'',
    sex:'',
    height: '168cm',
    weight : '48kg',
    city : '合肥',
>>>>>>> 赛事小程序

  },

  /**
   * bindPickerChange 监听年份
   * bindZsChange 正手
   * bindFsChange 反手
   * bindjslx 技术类型
   * bindSave 保存
   * bindGetValue 获取表单值
  */

  bindDateChange : function(e) {

    this.setData({
      date: e.detail.value
    })
  },
  bindBallPaiChange : function(e) {
<<<<<<< HEAD
    console.log(e);
=======
>>>>>>> 赛事小程序
    this.setData({
      ballIndex : e.detail.value
    })
  },
<<<<<<< HEAD
  bindZsChange : function(e) {
    this.setData({
      handBallIndex: e.detail.value
    })
  },
  bindFsChange : function(e) {
    this.setData({
      handBallfIndex: e.detail.value
    })
  },
  bindjslx : function(e) {
    this.setData({
      jstypeArrayIndex: e.detail.value
    })
  },
=======
>>>>>>> 赛事小程序
  bindGetValue : function(e) {
    let valueType = e.target.dataset.type;
    let value = e.detail.value;
    switch (valueType) {
      case 'sg':
      this.data.height = value;
      break;
      case 'kg':
      this.data.weight = value;
      break; 
      case 'cs':
      this.data.city = value;
      break;
<<<<<<< HEAD
      case 'xx':
      this.data.school = value;
      break;
      case 'qm':
      this.data.autograph = value;
      break;
    }
  },
  bindSave: function (e) {
=======
    }
  },
  bindPhone: function(e){
    this.data.phone = e.detail.value
  },
  bindName: function(e) {
    this.data.name = e.detail.value
  },
  bindSex: function(e) {
    this.data.sex = e.detail.value
  },
  bindSave: function (e) {
    console.log(this.data.phone);
    console.log(this.data.name);
    console.log(this.data.sex);
    console.log(this.data.city);
    console.log(this.data.height);
    console.log(this.data.weight);
    console.log(this.data.date); //日期
    console.log(this.data.ballArray[this.data.ballIndex]) //现在使用球拍

>>>>>>> 赛事小程序
    wx.request({
      url : '',
      header : {
        'content-type': 'application/json'
      },
      data: {
<<<<<<< HEAD
        heihgt: this.data.height,
        weight: this.data.weight,
        city: this.data.city,
        school: this.data.school,
        autograph: this.data.autograph,
        wqnf: this.data.date,
        qpmz: this.data.ballArray[this.data.ballIndex],
        zswp: this.data.handBallArray[this.data.handBallIndex],
        fswp: this.data.handBallfArray[this.data.handBallfIndex],
        jslx: this.data.jstypeArray[this.data.jstypeArrayIndex]
=======
        phone: this.data.phone,
        name: this.data.name,
        sex: this.data.sex,
        heihgt: this.data.height,
        weight: this.data.weight,
        wqnf: this.data.date,
        city: this.data.city,
        qpmz: this.data.ballArray[this.data.ballIndex]
>>>>>>> 赛事小程序
      },
      success : function() {

      },
      fail : function() {
        console.log('失败!');
      }

    });
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
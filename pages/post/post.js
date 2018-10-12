// pages/post/post.js
var postdata=require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_con:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_data = postdata.postList;
    // console.log(post_data[0])
    this.setData({  post_con : post_data})
  },
  onpostview:function(event){
    var post_id=event.currentTarget.dataset.postid;
    // console.log(post_id);
    wx.navigateTo({
      url: 'post-detail/postdetail?post_id='+post_id
      
    })
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
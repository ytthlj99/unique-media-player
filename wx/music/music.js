// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  post0: function () {
    wx.request({
      url: 'http://api.heclouds.com/devices/504080160/datapoints',
      header: {
        'api-key': "MPHfR1XXq=JG2ESBwJqYbXCU=qY="
      },
      method: 'POST',
      data: {
        "datastreams": [{
          "id": "1",
          "datapoints": [{
            "value": "0"
          }
          ]
        }
        ]
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  post1:function(){
   wx.request({
     url: 'http://api.heclouds.com/devices/504080160/datapoints',
     header:{
       'api-key':"MPHfR1XXq=JG2ESBwJqYbXCU=qY="
     },
     method:'POST',
     data:{
     "datastreams": [{
       "id": "1",
       "datapoints": [{
         "value": "1",
       }
       ]
     }
     ]
   },
   success(res) {
       console.log(res.data)
     }
   })
  },
  post2: function () {
    wx.request({
      url: 'http://api.heclouds.com/devices/504080160/datapoints',
      header: {
        'api-key': "MPHfR1XXq=JG2ESBwJqYbXCU=qY="
      },
      method: 'POST',
      data: {
        "datastreams": [{
          "id": "1",
          "datapoints": [{
            "value": "2"
          }
          ]
        }
        ]
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  post3: function () {
    wx.request({
      url: 'http://api.heclouds.com/devices/504080160/datapoints',
      header: {
        'api-key': "MPHfR1XXq=JG2ESBwJqYbXCU=qY="
      },
      method: 'POST',
      data: {
        "datastreams": [{
          "id": "1",
          "datapoints": [{
            "value": "3"
          }
          ]
        }
        ]
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  pingmu: function () {
    var that = this;
    var width;
    wx.getSystemInfo({
      success: function (res) {
        //屏幕高宽
        var windowWidth = res.windowWidth;
        var windowHeight = res.windowHeight;
        var width = (windowWidth-80)/2;
        that.setData({
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          width:width,
      })
      }
    })
    console.log(width)
    return width;
  },
  })
  

  
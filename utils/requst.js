var apiURL = "http://10.9.1.183:8890/";
var imgURL = apiURL + 'source/miniapp/';
var uploadImgURL = apiURL + 'source/res/miniapp/';
let DEBUG = true; //切换数据入口 false代表接口，true代表mock
var Mock = require('mock.js')
const {
  $Toast
} = require('../iwiew/weapp/dist/base/index');

function toLogin() {
  wx.navigateTo({
    url: "/pages/login/index"
  })
}

//获取OPENID
function getOpenId() {
  var info = wx.getStorageSync('userinfo');
  var userinfo = info ? JSON.parse(info) : {};
  if (!userinfo.open_id) return 0;
  return userinfo.open_id;
}

function ajax(url, data, callback) {
  if (!DEBUG) {
    wx.request({
      url: apiURL + url,
      method: 'POST',
      data: data,
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        if (res.error_code == '200') {//成功的code
          callback(res.data);
        } else {//其他code
          $Toast({
            content: res.error_msg
          });
        }
      }
    });
  } else {
    // 模拟数据（注@后面是可变参数可以查看mock.js）
    var res = {};
    if (url == 'getdata') {
      res = Mock.mock({
        'error_code': '200',
        'error_msg': '成功',
        'data|10': [{
          'id|+1': 1,
          'img': "@image('200x100', '#4A7BF7','#fff','pic')",
          'title': '@ctitle(3,6)',
          'city': "@county(true)",
          'zip': "@zip(6)",
          'stock_num': '@integer(0,10)', //库存数量  
          'marketing_start': '@datetime()',
          'marketing_stop': '@now()',
          'price': '@integer(100,2000)', //现价，单位：分  
          'original_price': '@integer(100,3000)'
        }]
      })
    } else if(url == 'getPeople') {
      res = Mock.mock({
        'error_code': '200',
        'error_msg': '成功',
        'data|300': [{
          'id|+1': 1,
          'name': '@cname(2,5)',
          'pinyin|1': ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
          'pic': "@image('100x100', '#4A7BF7','#fff','pic')",
        }]
      })
    }
    if (res.error_code == '200') {
      callback(res.data);
    } else {
      $Toast({
        content: res.error_msg
      });
    }

  }
}

/**********************************公共方法 ***********************************/
/**
 * 16进制字符串转arrayBuffer
 * @param {*} hex_str 
 */
function hex2ArrayBuffer(hex_str) {
  let typedArray = new Uint8Array(hex_str.match(/[\da-f]{2}/gi).map(function (h) {
    return parseInt(h, 16)
  }))
  let buffer = typedArray.buffer
  return buffer
}
/**
 * arrayBuffer 转 16进制字符串
 * @param {*} buffer 
 */
function arrayBuffer2Hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
/**
 * 产生固定位数的16进制字符串
 * @param {*} n 
 */
function randomString(n) {
  let str = 'abcdef9876543210';
  let tmp = '',
    i = 0,
    l = str.length;
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}
/**
 * 产生固定位数的字符串
 * @param {*} n 
 */
function randomStringMserve(n) {
  let str = 'qw5ertyuiopl1kjh2g4fd3sazxcv9bnmQA6ZXS7WEDCVFRTG8BNHYUJ0MKIOLP';
  let tmp = '',
    i = 0,
    l = str.length;
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}
/**
 * 前端生成随机数GUID
 * @param {*} loop 
 */
var guid = function (loop) {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  var g = "";
  for (var i = 0; i < loop; i++) {
    g = g + S4();
  }
  return g;
}

function chooseImage(options) {
  const self = options.self;
  wx.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: res => {
      console.log('图片选择成功', new Date().getSeconds())
      let fileSize = res.tempFiles[0].size / 1024
      console.log('图fileSize', fileSize)
      const endSize = options.endSize || 80;
      console.log('endSize', endSize)
      if (fileSize > endSize) {
        photoCompress({
          self: self,
          path: res.tempFiles[0].path,
          quality: 8,
          endSize: endSize
        }, options.success, options.fail)

      } else {
        photoHandle({
          self: self,
          endSize: options.endSize,
          path: res.tempFiles[0].path,
        }, options.success, options.fail)
      }
    },
    fail: err => {
      if (options.fail) options.fail(err)
    }
  })
}

/**********************************图片处理 ***********************************/
/**
 * 图片压缩
 * @param {*} options 
 * @param {*} callback 
 * @param {*} failCallback 
 */
function photoCompress(options, callback, failCallback) {
  const self = options.self; //页面this
  const path = options.path; //图片地址，wx.getImageInfo要求path是图片的本地路径
  const quality = options.quality; //图片质量 1-10区间，因为下方会乘以0.1
  const endSize = options.endSize; //回调返回 （path, base64）
  console.log('photoCompress压缩开始', options)
  wx.getImageInfo({
    src: path,
    success: Infores => {
      const initW = Infores.width,
        initH = Infores.height;
      if (initW > initH) {
        var width = initW > 800 ? 800 : initW;
        var base = initW / width;
        var height = parseInt(initH / base);
      } else {
        var height = initH > 800 ? 800 : initH;
        var base = initH / height;
        var width = parseInt(initW / base);
      }
      self.setData({
        canvas_quality: quality,
        canvasW: width,
        canvasH: height
      })
      let ctx = wx.createCanvasContext('myCanvas')
      ctx.drawImage(Infores.path, 0, 0, width, height)
      ctx.draw(true, () => {
        setTimeout(() => {
          wx.canvasToTempFilePath({
            quality: quality * 0.1,
            fileType: 'jpg', //quality仅对jpg有效
            canvasId: 'myCanvas',
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            success: res => {
              photoHandle({
                self: self,
                endSize: endSize,
                path: res.tempFilePath,
              }, callback, failCallback)
              ctx.clearRect(0, 0, width, height)
            },
            fail: err => {
              if (failCallback) failCallback(err)
            }
          })
        }, 300)
      })
    },
    fail: err => {
      if (failCallback) failCallback(err)
    }
  })
}

/**
 * 生成base64
 * @param {*} options 
 * @param {*} callback 
 * @param {*} failCallback 
 */
function photoHandle(options, callback, failCallback) {
  const self = options.self;
  const path = options.path;
  ``
  const endSize = options.endSize;
  console.log('photoHandle', options)
  let base64Img = 'data:image/jpg;base64,' + wx.getFileSystemManager().readFileSync(path, "base64")
  if (showSize(base64Img) / 1 > endSize) {
    console.log('压缩后', showSize(base64Img))
    self.data.canvas_quality = self.data.canvas_quality - 1;

    if (self.data.canvas_quality <= 4) { //后面备注该处处理原因
      console.log('跳出压缩', showSize(base64Img))
      callback && callback({
        path: path,
        base64: base64Img
      })
      return
    }
    photoCompress({
      self: self,
      path: path,
      quality: self.data.canvas_quality,
      endSize: endSize
    }, callback, failCallback)
  } else {
    console.log('压缩结束', showSize(base64Img))
    callback && callback({
      path: path,
      base64: base64Img
    })
  }
}
/**
 * 获取base64图片大小，返回kb数字
 * @param {*} base64url 
 */
function showSize(base64url) {
  //把头部去掉
  var str = base64url.replace('data:image/png;base64,', '');
  // 找到等号，把等号也去掉
  var equalIndex = str.indexOf('=');
  if (str.indexOf('=') > 0) {
    str = str.substring(0, equalIndex);
  }
  // 原来的字符流大小，单位为字节
  var strLength = str.length;
  // 计算后得到的文件流大小，单位为字节
  var fileLength = parseInt(strLength - (strLength / 8) * 2);
  // 由字节转换为kb
  var size = "";
  size = (fileLength / 1024).toFixed(2);
  var sizeStr = size + ""; //转成字符串
  var index = sizeStr.indexOf("."); //获取小数点处的索引
  var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
  if (dou == "00") { //判断后两位是否为00，如果是则删除00                
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
  }
  return size;
}

module.exports = {
  globalData: [],
  that: null,
  ajax: ajax,
  //方法
  hex2ArrayBuffer: hex2ArrayBuffer,
  arrayBuffer2Hex: arrayBuffer2Hex,
  randomString: randomString,
  randomStringMserve: randomStringMserve,
  guid: guid,
  chooseImage: chooseImage,
}
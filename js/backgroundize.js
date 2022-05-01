const bgUrl = 'https://qingshaner.oss-cn-hangzhou.aliyuncs.com/images/202205011921669.jpg'

document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: url()')

document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')

document
  .querySelector('#web_bg')
  .setAttribute('style', `background-image: url(${bgUrl});position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
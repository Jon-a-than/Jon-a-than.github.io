document.title = '今夕何夕💌见此良人'
window.onblur = () => document.title = '春草明年绿💔王孙归不归'
window.onfocus = () => document.title = '今夕何夕💌见此良人'

const print = (colorCode, input) => 
  console.log(`\x1b[0;${colorCode}m${input}\x1b[0m`)

setTimeout(() => {
  // console.clear()
  print(91, '今夕何夕💌见此良人')
}, 1000)

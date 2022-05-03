const languageStyle = (str) => {
  if (['js', 'javascript'].includes(str)) return 'JavaScript' // 单独优化
  if (['ts', 'typescript'].includes(str)) return 'TypeScript'
  if (str === 'plaintext') return 'Text'
  if (str === 'markdown') return 'Markdown'
  if (str === 'powershell') return 'PowerShell'
  if (str === 'shell') return 'Shell'
  if (str === 'bash') return 'Bash'
  if (str === 'xml') return 'Vue'                             // 曲线救国(Highlight不支持vue)
  // return str                                               // 全小写风格
  return str.toUpperCase()                                    // 全大写风格
  // return str[0].toUpperCase() + str.substring(1)           // 首字母大写风格
}

document.querySelectorAll('figure.highlight').forEach((item) => {
  item.setAttribute('data-type', languageStyle(item.getAttribute('class').substring(10)))
  console.log(1)
})
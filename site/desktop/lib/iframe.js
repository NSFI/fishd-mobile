let init = false
export default function initIframe () {
  if (init) {
    return
  }
  init = true
  window.addEventListener('message', (e) => {
    const event = e.data || ''
    switch(event.type) {
      case 'pathChange':
        // #/zh-CN/button
        const arr = event.data.split('/')
        const lang = arr[1]
        const demo = arr[2]
        if (demo) {
          location.assign(`/#/${lang}/components/${demo}`)
        }
        break
    }
  })
  // 重新加载demo
  window.reloadDemo = function (data) {
    const iframe = document.querySelector('.u-iframe');
    if (iframe) {
      iframe.contentWindow.postMessage({
        type: 'reloadDemo',
        data
      }, '*')
    }
  }
}

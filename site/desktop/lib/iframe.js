let init = false
export default function initIframe () {
  if (init) {
    return
  }
  init = true

  // 监听子页面postmessage事件
  window.addEventListener('message', (e) => {
    const event = e.data || ''
    switch (event.type) {
      case 'pathChange':
        const arr = event.data.split('/')
        const lang = arr[1]
        const demo = arr[2]
        if (demo) {
          location.replace(`#/${lang}/components/${demo}`)
        }
        break
    }
  })

  // 监听hash事件，并同步子页面路由
  window.addEventListener('hashchange', () => {
    const iframe = document.querySelector('.u-iframe')
    document.documentElement.scrollTop = 0
    if (iframe) {
      iframe.contentWindow.postMessage(
        {
          type: 'pathChange',
          data: location.hash
        },
        '*'
      )
    }
  })

  // 重新加载demo
  window.reloadDemo = function (data) {
    const iframe = document.querySelector('.u-iframe')
    if (iframe) {
      iframe.contentWindow.postMessage(
        {
          type: 'reloadDemo',
          data
        },
        '*'
      )
    }
  }
}

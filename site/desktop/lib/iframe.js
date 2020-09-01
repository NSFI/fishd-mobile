import _ from 'lodash';
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

  // 添加deboucne防止 父子页面相互触发事件造成死循环
  const handleHashChange = _.debounce(() => {
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
  }, 300)

  // 监听hash事件，并同步子页面路由
  window.addEventListener('hashchange', handleHashChange)

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

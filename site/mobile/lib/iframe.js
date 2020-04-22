import eventbus from './eventbus'
let init = false
export default function initIframe () {
  if (init) {
    return
  }
  init = true

  // 监听路由改变，同步父页面路由
  window.addEventListener('hashchange', () => {
    window.parent.postMessage(
      {
        type: 'pathChange',
        data: location.hash
      },
      '*'
    )
  })

  // 监听父路由事件
  window.addEventListener('message', (e) => {
    const event = e.data || ''
    switch (event.type) {
      case 'reloadDemo':
        eventbus.emit('reloadDemo', event.data)
        break
      case 'pathChange':
        // #/zh-CN/components/button
        const arr = event.data.split('/')
        const lang = arr[1]
        const demo = arr[3] || ''
        if (demo) {
          location.replace(`#/${lang}/${demo}`)
        }
        break
    }
  })
}

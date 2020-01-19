import eventbus from './eventbus'
let init = false
export default function initIframe () {
  if (init) {
    return
  }
  init = true
  window.addEventListener('hashchange', () => {
    window.parent.postMessage({
      type: 'pathChange',
      data: location.hash
    },'*');
  })

  window.addEventListener('message', (e) => {
    const event = e.data || ''
    switch(event.type) {
      case 'reloadDemo':
        eventbus.emit('reloadDemo', event.data)
        break
    }
  })
}

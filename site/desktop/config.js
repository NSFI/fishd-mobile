import componentsConfig from '../config'
import { getPlainComponentsList } from './utils'

const isProd = process.env.NODE_ENV === 'production'

export const config = {
  /**
   * 组件预览地址
   * 如果是非H5组件库，请自行实现组件预览效果，并在此配置预览路径
   */
  demoBaseUrl: isProd ? 'https://hangaoke1.github.io/fishd-page/#/' : 'http://localhost:4100/#/',
  // 如果是自己启动的项目，请注意demo路径是否正确
  genDemoUrl (lang, demoName) {
    return `${this.demoBaseUrl}${lang}/${demoName}`
  },
  codeEdit: true,
  nav: [
    {
      name: '开发指南',
      nameEn: 'Guide',
      key: 'development',
      children: [
        {
          key: 'quickStart',
          type: 'markdown',
          name: '快速上手',
          nameEn: 'QuickStart',
          published: true
        },
        {
          key: 'contributing',
          type: 'react',
          name: '色彩',
          nameEn: 'Color',
          component: require('../docs/react/ruleColor'),
          published: true
        }
      ]
    },
    ...componentsConfig
  ]
}

export const components = config.nav

export const plainComponents = getPlainComponentsList(components)

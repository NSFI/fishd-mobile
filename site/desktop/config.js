import componentsConfig from '../config'
import { getPlainComponentsList } from './utils'

const isProd = process.env.NODE_ENV === 'production'

export const config = {
  /**
   * 组件预览地址
   * 如果是非H5组件库，请自行实现组件预览效果，并在此配置预览路径
   */
  demoBaseUrl: isProd ? 'https://nsfi.github.io/fishd-mobile-demo/#/' : 'http://localhost:4100/#/',
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
          key: 'color',
          type: 'react',
          name: '色彩',
          nameEn: 'Color',
          component: require('../docs/react/ruleColor'),
          published: true
        },
        {
          key: 'cra',
          type: 'markdown',
          name: '在create-react-app中使用',
          nameEn: 'Use in create-react-app',
          published: true
        },
        {
          key: 'theme',
          type: 'markdown',
          name: '定制主题',
          nameEn: 'Theme',
          published: true
        },
        {
          key: 'adaptation',
          type: 'markdown',
          name: '移动端适配',
          nameEn: 'Adaptation',
          published: true
        },
        {
          key: 'update',
          type: 'markdown',
          name: '更新日志',
          nameEn: 'Update logs',
          published: true
        }
      ]
    },
    ...componentsConfig
  ]
}

export const components = config.nav

export const plainComponents = getPlainComponentsList(components)

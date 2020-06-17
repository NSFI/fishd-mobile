export const algolia = {
  apiKey: 'ddba94e7e0f7ae0fee63b1645548fc00',
  indexName: 'ppfish',
  inputSelector: '#search-box input',
  debug: false // Set debug to true if you want to inspect the dropdown
}

export default [
  {
    name: '基础组件',
    nameEn: 'BaseGeneral',
    key: 'baseGeneral',
    children: [
      {
        key: 'button',
        type: 'markdown',
        name: 'Button 按钮',
        nameEn: 'Button',
        published: true
      },
      {
        key: 'actionSheet',
        type: 'markdown',
        name: 'ActionSheet 动作面板',
        nameEn: 'ActionSheet',
        published: true
      },
      {
        key: 'switch',
        type: 'markdown',
        name: 'Switch 滑动开关',
        nameEn: 'Switch',
        published: true,
      },
      {
        key: 'numberKeyboard',
        type: 'markdown',
        name: 'NumberKeyboard 数字键盘',
        nameEn: 'NumberKeyboard',
        published: true,
      }
    ]
  },
  {
    name: '导航组件',
    nameEn: 'NavigationComponents',
    key: 'NavigationComponents',
    children: [
      {
        key: 'navbar',
        type: 'markdown',
        name: 'NavBar 导航栏',
        nameEn: 'NavBar',
        published: true,
      },
      {
        key: 'grid',
        type: 'markdown',
        name: 'Grid 宫格',
        nameEn: 'Grid',
      },
      {
        key: 'tabs',
        type: 'markdown',
        name: 'Tabs 标签页',
        nameEn: 'Tabs',
        published: true,
      }
    ]
  },
  {
    name: '表单组件',
    nameEn: 'Data Entry',
    key: 'Data Entry',
    children: [
      {
        key: 'input',
        type: 'markdown',
        name: 'Input 输入框',
        nameEn: 'Input',
        published: true,
      },
      {
        key: 'checkbox',
        type: 'markdown',
        name: 'Checkbox 复选框',
        nameEn: 'Checkbox',
        published: true,
      },
      {
        key: 'radio',
        type: 'markdown',
        name: 'Radio 单选框',
        nameEn: 'Radio',
        published: true,
      },
    ]
  },
  {
    name: '数据展示',
    nameEn: 'Data Display',
    key: 'Data Display',
    children: [
      {
        key: 'list',
        type: 'markdown',
        name: 'List 列表',
        nameEn: 'List',
        published: true,
      },
      {
        key: 'carousel',
        type: 'markdown',
        name: 'Carousel 走马灯',
        nameEn: 'Carousel',
        published: true,
      },
      {
        key: 'noticeBar',
        type: 'markdown',
        name: 'NoticeBar 通告栏',
        nameEn: 'NoticeBar',
        published: true,
      },
    ]
  }
]

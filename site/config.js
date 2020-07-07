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
        key: 'layout',
        type: 'markdown',
        name: 'Layout 布局',
        nameEn: 'Layout',
        published: true
      },
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
      },
      {
        key: 'toast',
        type: 'markdown',
        name: 'Toast 轻提示',
        nameEn: 'Toast',
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
      },
      {
        key: 'tabBar',
        type: 'markdown',
        name: 'TabBar 标签栏',
        nameEn: 'TabBar',
        published: true,
      },
      {
        key: 'modal',
        type: 'markdown',
        name: 'Modal 对话框',
        nameEn: 'Modal',
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
      {
        key: 'datePickerView',
        type: 'markdown',
        name: 'DataPickerView 日期选择面板',
        nameEn: 'DataPickerView',
        published: true,
      },
      {
        key: 'datePicker',
        type: 'markdown',
        name: 'DatePicker 日期选择器',
        nameEn: 'DatePicker',
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
        key: 'badge',
        type: 'markdown',
        name: 'Badge 徽标数',
        nameEn: 'Badge',
        published: true,
      },
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
      {
        key: 'dropdown',
        type: 'markdown',
        name: 'Dropdown 下拉框',
        nameEn: 'Dropdown',
        published: true,
      },
    ]
  }
]

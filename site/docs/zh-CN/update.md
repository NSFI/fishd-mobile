## 1.0.0
`2018.08.01`

- TimePicker
  - 🔨 TimePicker更名为BizDatePicker
  - 🔨 active属性更名为visible （用于手动控制浮层显隐）
  - 🎊 增加属性clickAreaStyle，设置点击区域的样式
  - 🔨 value类型从moment改为Date类型

- Table
  - 🎊 新增API sorterType参数，['defualt','firstLetter'] 首字母A-Z排序功能
  - 🎊 新增API activeRowByClick参数，默认false 可以点击根据key高亮当前行  
  - 🐛 单屏表头固定使用`calc`解决，例：`scroll:{{y:'calc('100vh - 300px')'}}`
  - 🎊 新增Class fishd-table-ellipsis-col 支持table内容长度超出...处理

- Select
  - 🔨 根据交互需求进行重做，去除mode='tag'及相关API
  - 🎊 增加API extraOption/labelClear/maxScrollHeight/selectAllText/showSingleClear/loading 等参数，详情 [select](https://nsfi.github.io/ppfish-components/#/components/select)
  
---
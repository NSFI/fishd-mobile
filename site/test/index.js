class a {
  state = {
    dateTime: '',
    date: '',
    time: ''
  };

  render () {
    return (
      <div className='components-tpl-demo-basic'>
        <List>
          <DatePicker title='标题' value={this.state.dateTime} onChange={(dateTime) => this.setState({ dateTime })}>
            <List.Item>日期时间</List.Item>
          </DatePicker>
          <DatePicker
            mode='date'
            title='选择日期'
            extra='请选择日期'
            value={this.state.date}
            onChange={(date) => this.setState({ date })}
          >
            <List.Item>日期</List.Item>
          </DatePicker>
          <DatePicker
            mode='time'
            title='选择时间'
            extra='请选择时间'
            value={this.state.time}
            onChange={(time) => this.setState({ time })}
          >
            <List.Item>时间</List.Item>
          </DatePicker>
        </List>
      </div>
    );
  }
}

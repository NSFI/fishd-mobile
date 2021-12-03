/* eslint-disable array-bracket-spacing */
/* eslint-disable no-new-func */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { cold } from 'react-hot-loader';
import { transform } from 'babel-standalone';
import collect from '@/lib/collect';
import eventbus from '@/lib/eventbus';
import Home from '@/pages/Home';
import part_1 from '../images/part_1.png';

import arrayTreeFilter from 'array-tree-filter';
import * as source from '../../../index';

import './Demo.less';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.playerId = 'u-playerId';
  }

  componentDidMount() {
    this.renderDemoList();
    eventbus.on('reloadDemo', this.reloadDemo);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.unmountDemoList();
    eventbus.removeAllListeners('reloadDemo');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.demo !== this.props.params.demo) {
      this.renderDemoList();
      window.scrollTo(0, 0);
    }
  }

  reloadDemo = data => {
    const locationOne = location.hash.split('/') || [];
    const locationTwo = location.hash.split('/') || [];
    if (locationOne[locationOne.length - 1] === locationTwo[locationTwo.length - 1]) {
      this.renderSource(data.code, this.playerId + '-' + data.index);
    }
  };

  renderDemoList = () => {
    this.unmountDemoList();
    this.props.demos.forEach((item, index) => {
      this.renderSource(item.jsCode, this.playerId + '-' + index);
    });
  };

  unmountDemoList = () => {
    /** 卸载手动挂载的react组件  */
    this.props.demos.forEach((item, index) => {
      const playerId = this.playerId + '-' + index;
      ReactDOM.unmountComponentAtNode(document.getElementById(playerId));
    });
  };

  renderSource = (value, playerId) => {
    new Promise(resolve => {
      const args = ['context', 'React', 'ReactDOM', 'arrayTreeFilter'];
      const argv = [this, React, ReactDOM, arrayTreeFilter];
      source &&
        Object.keys(source).forEach(key => {
          args.push(key);
          argv.push(source[key]);
        });
      resolve({ args, argv });
    })
      .then(({ args, argv }) => {
        let code;
        if (/ReactDOM\.render/.test(value)) {
          code = transform(
            `
           ${value.replace('mountNode', `document.getElementById('${playerId}')`)}
        `,
            {
              presets: ['react', 'stage-1'],
            },
          ).code;
        } else {
          code = transform(
            `
          class Demo extends React.Component {
             ${value}
          }
          ReactDOM.render(<Demo {...context.props} />,
          document.getElementById('${playerId}'))
          `,
            {
              presets: ['react', 'stage-1'],
            },
          ).code;
        }
        args.push(code);
        new Function(...args).apply(null, argv);
      })
      .catch(err => {
        if (process.env.NODE_ENV !== 'production') {
          throw err;
        }
      });
  };

  render() {
    const name = this.props.params.demo;
    return (
      <div className="u-demo">
        <h3 className="u-demo__title">
          <img className="u-part_1" src={part_1} alt="" />
          <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          <div className="u-demo__subTitle">UI组件</div>
        </h3>
        <div className="u-demo__list">
          {this.props.demos.map((item, index) => {
            return (
              <div id={item.id} key={item.id}>
                <div id={`${this.playerId}-${index}`} />
                {item.lessCode && <style>{item.lessCode}</style>}
                {item.cssCode && <style>{item.cssCode}</style>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default collect(Demo, Home);
// export default collect(cold(Demo), Home);

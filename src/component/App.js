import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from '../redux/Action'//action函数
import {indexInput} from '../redux/State'//state
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router';
class App extends Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        {this.props.propsValue}
        <ul>
          <li><Link to="/e3">Example1</Link></li>
        </ul>
      </div>
    );
  }
  changeHandle(){
    const node = ReactDOM.findDOMNode(this.refs.input);//拿到DOM 
    const value = node.value.trim();//获取到value的值
    this.props.changes(value);//调用action
  }
}



//将state的指定值映射在props上，将action的所有方法映射在props上
//哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
//哪些 action 创建函数是我们想要通过 props 获取的？
export default connect(indexInput,action)(App);//

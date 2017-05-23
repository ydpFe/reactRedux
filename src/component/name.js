/**
 * Created by Administrator on 2016/6/21.
 */
import React from 'react';
import { Router, Route, Link , browserHistory, IndexRoute} from 'react-router';
import {indexInput} from '../redux/State'//state
import { connect } from 'react-redux';
class Name extends React.Component{
  render(){
    return (
      <div>
       <div>{this.props.propsValue}</div>
        <div>
          <Link to="/">返回</Link>
        </div>
      </div>
    )
  }
}
export default connect(indexInput)(Name);//
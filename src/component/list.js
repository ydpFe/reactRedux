/**
 * Created by Administrator on 2016/6/21.
 */
import React from 'react';

class Avatar extends React.Component{
  render(){
    return (
      <div>
        <div>
          <h3>{this.props.name}</h3>
        </div>
      </div>
    )
  }
}

export default class List extends React.Component{
  render(){
    return (
      <div>
        <Avatar name="hhh"/>
      </div>
    )
  }
}
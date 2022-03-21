import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props){
       
            super(props);
            this.state={
                count:0,
            }
        }
    
    Add = () => {
        this.setState({
            count:this.state.count+1
        })
        // count++ wrong
      };
      
      Subtract = () => {
        this.setState({
            count:this.state.count-1
        })
      };

  render() {
    return (
        <div>
        <h1>MY COUNTING APP</h1>
        <h2>The count is : {this.state.count}</h2>
        <button onClick={this.Add}>+</button>
        <button onClick={this.Subtract}>-</button>
      </div>
    )
  }
}

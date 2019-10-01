import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
     <button className="mdl-button--fab mdl-js-button mdl-button--raised mdl-button--colored"
        onClick={()=>this.props.callback(this.props.show)} value="testValue">
        {this.props.show}
      </button>
    );
  }
}

export default Button;

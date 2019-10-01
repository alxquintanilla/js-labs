import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button className=" calc_btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
        onClick={()=>this.props.callback(this.props.value)} >
        {this.props.show}
      </button>
    );
  }
}

export default Button;

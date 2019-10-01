import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.props.callback(this.props.childId, e.target.value);
  }

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <input className="" type="text" onChange={(e)=>this.onChange(e)}
            value={this.props.value} />
      </div>
    );
  }
}

export default Input;

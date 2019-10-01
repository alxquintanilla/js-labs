import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout--fixed-header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">React Calculator</span>
          <div className="mdl-layout-spacer"></div>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;

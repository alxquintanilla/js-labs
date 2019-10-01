import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Button from './components/button/Button.js';
import Input from './components/input/Input.js';
import CircularButton from './components/button/CircularButton.js';
import calc from './Calculator.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      result_: "",
      calc: calc(),
      operation_: "",
    };
    this.operation = this.operation.bind(this);
    this.onClickWriteNumber = this.onClickWriteNumber.bind(this);
  }

  onClickBtn = (value) => {
    this.operation("=");
  }

  onClickWriteNumber = (value) => {
    let numbers = this.state.result_;
    if(numbers === undefined){
      numbers = "";
    }else{
      numbers += "";
      let lcalc = this.state.calc;
      if(lcalc.result === undefined || lcalc.result === 0){
        lcalc.result = Number.parseFloat(value);
        this.setState({ calc: lcalc });
      }
    }
    numbers += value;
    this.setState({result_: numbers});
  }

  operation = (opType) => {
    let numbers = this.state.result_
    let lastOperation = this.state.operation_;
    let lcalc = this.state.calc;

    console.log("operation type : ", opType);

    switch (opType) {
      case '+':
          lcalc.addition(numbers);
          this.setState({result_: "", calc: lcalc});
        break;
      case '-':
          lcalc.substraction(numbers);
          this.setState({result_: "", calc: lcalc});
        break;
      case 'x':
          lcalc.multiplication(numbers);
          this.setState({result_: "", calc: lcalc});
        break;
      case '/':
          lcalc.division(numbers);
          this.setState({result_: "", calc: lcalc});
        break;
      case '=':
          console.log("when is = , lastoperation ", lastOperation);
          if(lastOperation !== '='){
            this.operation(lastOperation);
            this.setState({operation_: lastOperation});
          }else{
            this.state.calc.addition("0");
            this.setState({result_: "", calc: lcalc});
          }
        break;
      default:
        break;
    }

    this.setState({operation_: opType});
  }

  render() {

    return (
      <div className="App">
      <div className="mdl-layout mdl-js-layout">
        <Header />

        <main className="mdl-layout__content">
          <div className="page-content">

            <Input childId="calculator_numberInput" value={this.state.result_}/>

            <div id="result"> {this.state.calc.result}</div>

            <Button show="1" value="1" callback={this.onClickWriteNumber}/>
            <Button show="2" value="2" callback={this.onClickWriteNumber}/>
            <Button show="3" value="3" callback={this.onClickWriteNumber}/>
            <Button show="4" value="4" callback={this.onClickWriteNumber}/>
            <Button show="5" value="5" callback={this.onClickWriteNumber}/>
            <Button show="6" value="6" callback={this.onClickWriteNumber}/>
            <Button show="7" value="7" callback={this.onClickWriteNumber}/>
            <Button show="8" value="8" callback={this.onClickWriteNumber}/>
            <Button show="9" value="9" callback={this.onClickWriteNumber}/>
            <Button show="0" value="0" callback={this.onClickWriteNumber}/>

            <br/><br/>
            <CircularButton show="+" callback={this.operation}/>
            <CircularButton show="-" callback={this.operation}/>
            <CircularButton show="x" callback={this.operation}/>
            <CircularButton show="/" callback={this.operation}/>

            <br/>
            <br/>
            <Button show="=" callback={this.onClickBtn}/>
          </div>
        </main>
        </div>

      </div>
    );
  }


}

export default App;

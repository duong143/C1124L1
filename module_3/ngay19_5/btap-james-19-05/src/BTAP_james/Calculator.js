import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOperation = (operator) => {
    const { number1, number2 } = this.state;
    const n1 = parseInt(number1);
    const n2 = parseInt(number2);
    let result = '';

    if (isNaN(n1) || isNaN(n2)) {
      result = 'Vui lòng nhập số hợp lệ!';
    } else {
      switch (operator) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case 'x':
          result = n1 * n2;
          break;
        case '/':
          result = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Không thể chia cho 0';
          break;
        default:
          result = 'Phép toán không hợp lệ!';
      }
    }

    this.setState({ result });
  };

  render() {
    return (
      <div style={{ padding: 20, fontFamily: 'Arial', maxWidth: 400, margin: '0 auto' }}>
        <h2>Máy Tính Đơn Giản</h2>
        <input
          type="text"
          name="number1"
          value={this.state.number1}
          onChange={this.handleChange}
          placeholder="Nhập số thứ nhất"
        />
        <br /><br />
        <input
          type="text"
          name="number2"
          value={this.state.number2}
          onChange={this.handleChange}
          placeholder="Nhập số thứ hai"
        />
        <br /><br />
        <button onClick={() => this.handleOperation('+')}>+</button>
        <button onClick={() => this.handleOperation('-')}>-</button>
        <button onClick={() => this.handleOperation('x')}>x</button>
        <button onClick={() => this.handleOperation('/')}>/</button>
        <br /><br />
        <div>
          <strong>Kết quả: </strong>{this.state.result}
        </div>
      </div>
    );
  }
}

export default Calculator;

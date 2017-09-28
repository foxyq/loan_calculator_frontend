import React, { Component } from 'react';

import { LoanForm, Results } from './components';
import './App.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 20000,
      months: 24,
      insurance: false,
      result: 20000,
    };

    this.getApiResult = this.getApiResult.bind(this);
    this.setApiResult = this.setApiResult.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onMonthsChange = this.onMonthsChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  onPriceChange(event) {
    this.setState({ price: Number(event.target.value) }, () => {
      this.getApiResult();
    });
  }
  onMonthsChange(event) {
    this.setState({ months: Number(event.target.value) }, () => {
      this.getApiResult();
    });
  }

  setApiResult(result) {
    this.setState({ result });
  }

  getApiResult() {
    fetch(`${baseUrl}/loan`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: this.state.price,
        months: this.state.months,
        insurance: this.state.insurance,
      }),
    })
      .then(response => response.json())
      .then(result => this.setApiResult(JSON.parse(result)))
      .catch(e => console.error(e));
  }

  handleOptionChange() {
    this.setState({ insurance: !this.state.insurance }, () => {
      this.getApiResult();
    });
  }

  render() {
    const { price, months, insurance, result } = this.state;
    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>React kalkulačka</h2>
        </div>

        <div className="app-window">
          <LoanForm
            price={price}
            months={months}
            insurance={insurance}
            result={result}
            onPriceChange={this.onPriceChange}
            onMonthsChange={this.onMonthsChange}
            onInsuranceChange={this.handleOptionChange}
          />
          <Results result={result} months={months} getApiResult={this.getApiResult} />
        </div>
      </div>
    );
  }
}

export default App;

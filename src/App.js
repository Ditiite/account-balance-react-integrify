import React, { Component } from 'react';
import './App.css';

import Report from './components/Report.jsx';
import AddTransaction from "./components/AddTransaction.jsx";

import { transactions, initialBalance } from './data.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: transactions
        }
        this.addTransaction = this.addTransaction.bind(this);
    }

    addTransaction(transaction) {
        this.setState((previousState) => {
            let newState = { ...previousState };
            newState.transactions.push(transaction);
            return newState;
        });
    }

    render() {
        return(
            <div className="account-container">
                <h1>Account Balance</h1>
                <AddTransaction addTransaction={ this.addTransaction } />
                <Report transactions={this.state.transactions} initialBalance={initialBalance} />   
            </div>
        )
    }
};

export default App;
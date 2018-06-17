import React, { Component } from 'react';
import './Report.css';
import Transaction from './Transaction';
import Summary from './Summary'

import { calculateTotal, splitIncomeAndExpense } from '../services/account';

class Report extends Component {
    
    render() {
        const incomesAndExpenses = splitIncomeAndExpense(this.props.transactions);
        const total = calculateTotal(this.props.initialBalance, this.props.transactions)

        return(
            <div className="report">
                <Transaction title="Income" 
                    transactionList={incomesAndExpenses.incomes}    
                />
                <Transaction title="Expense"
                    transactionList={incomesAndExpenses.expenses}
                />
                <Summary total={total}/>
            </div>
        )
    }
}

export default Report;
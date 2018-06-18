import React, { Component } from 'react';
import './Report.css';
import Transaction from './Transaction';
import Summary from './Summary'
import PropTypes from 'prop-types';

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

Report.propTypes = {
    initialBalance: PropTypes.number.isRequired
}
export default Report;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Transaction.css';

class Transaction extends Component {

    render() {

        return(
            <div className="transaction-container">
                <h2>{this.props.title}</h2>
                <ul>
                    { 
                        this.props.transactionList.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <p>{item.description}</p>
                                    <p>{item.amount} €</p>
                                    <p>{item.date}</p>
                                    <p>{item.time}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}

Transaction.propTypes= {
    title: PropTypes.string.isRequired,
    transactionList: PropTypes.array.isRequired
}

export default Transaction;
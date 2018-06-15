import React, { Component } from 'react';

class Type extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <select>
                <option>Income</option>
                <option>Expense</option>
                <option>Balance</option>
            </select>
        );
    }
};

export default Type;
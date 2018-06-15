import React, { Component } from 'react';

class InputData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <input
                    placeholder="Description"
                    type="text"
                    value={this.props.description}
                    onChange={this.props.handleChange}
                    />
                <input
                    placeholder="Amount"
                    type="number"
                    value={this.props.amount}
                    onChange={this.props.handleChange}
                    min="1"
                    />
            </div>
        );
    }
};

export default InputData;
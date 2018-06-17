import React, { Component } from "react";

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: '',
            type: 'income'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.target.reset();

        this.setState({
            description: '',
            amount: '',
            type: 'income'
        });

        this.props.addTransaction({
            description: this.state.description,
            
            amount: parseFloat(this.state.amount, 10),
            date: '13/6/2018',
            time: '10:30',
            type: this.state.type 
        });
    }

    handleChange(event) {
        const target = event.target;

        switch(target.name) {
            case 'description':
                this.setState({
                    description: target.value
                });
                break;
            case 'amount': 
                this.setState({
                    amount: target.value
                });
                break;
            case 'type': 
                this.setState({
                    type: target.value
                });
                break;
        } 
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}  
                    />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={this.state.amount}  
                    onChange={this.handleChange}  
                    />
                <select 
                    value={this.state.type}
                    name="type" 
                    onChange={this.handleChange} >
                    <option value="income">Income</option>
                    <option value="expense" >Expense</option>
                </select>
                <button>Add</button>
            </form>
        )
    }
}



export default AddTransaction;
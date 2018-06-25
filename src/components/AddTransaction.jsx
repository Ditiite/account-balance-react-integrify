import React, { Component } from 'react';

import './AddTransaction.css';

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
        this.getYear = this.handleSubmit.bind(this);
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
            date: this.getDate(),
            time: this.getTime(),
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
                console.log(this.description);
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

    getDate(){
        let date = new Date;

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        let currentDate = `${month}-${day}-${year}`;
        return currentDate;
    }

    getTime() {
        let time = new Date();
        let hours = time.getHours();
        let minute = time.getMinutes();
        let currentTime = `${hours}:${minute}`;
        return currentTime;
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    className="description"
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required  
                    />
                <input
                    className="amount"
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={this.state.amount}  
                    onChange={this.handleChange} 
                    required 
                    min="1"
                    />
                <select 
                    value={this.state.type}
                    name="type" 
                    onChange={this.handleChange} >
                    <option value="income">Income</option>
                    <option value="expense" >Expense</option>
                </select>
                <button className="add-btn">Add</button>
            </form>
        )
    }
}

export default AddTransaction;
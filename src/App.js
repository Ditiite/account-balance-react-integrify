import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import RenderInput from './components/RenderInput';

class App extends Component {
    state = {
      income: [
        {
            description: "salary",
            amount : 0,
            date: 'date',
            time: 'time'
        },
        {
            description: "alary1",
            amount : 1,
            date: 'date',
            time: 'time'
        },
        {
            description: "lary2",
            amount : 2,
            date: 'date',
            time: 'time'
        }
      ]
    }
    render() {
        return(
            <div>
                <h1>Account Balance</h1>
                <form>
                    <RenderInput income = {this.state.income}/>
                </form>
            </div>
        );
    }
};


export default App;

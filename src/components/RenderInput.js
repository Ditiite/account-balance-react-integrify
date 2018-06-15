import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class RenderInput extends Component {
    static propTypes = {
        income: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }

    state = {
        query: ''
    }

    updateQuery(query) {
        this.setState({ 
            query: query
        })
    }

    render() {
        const { income } = this.props;
        const { query } = this.state;
        //Filter the data by the description name
        let showingInfo;
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingInfo = this.props.income.filter((type) => match.test(type.description))
        } else {
            showingInfo = this.props.income
        }

        //Sort description alphabetically using sort-by libery
        showingInfo.sort(sortBy('description'));

        return(
            <div>
                {JSON.stringify(this.state)}
                <h3>Income</h3>

                {/* Shows how may matching data have founded under the search name */}
                { showingInfo.length !== income.length && (
                    <p>Showing match {' ' + showingInfo.length} out of {' ' + income.length }</p>
                )}
                <input 
                    type = "text"
                    placeholder = "Search for"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>
                <ol>
                    {showingInfo.map((type, index) => (
                        <li key = {index}>
                            <p>{type.description}</p>
                            <p>{type.amount}</p>
                            <p>{type.date}</p>
                            <p>{type.time}</p>
                        </li>
                    ))} 
                </ol>
            </div>
        );
    }
}

RenderInput.propTypes = {
    income: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }
  
export default RenderInput;
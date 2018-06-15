import React, { Component } from 'react';

class AddButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button 
                type="submit">
            Add
            </button>
        );
    }
};

export default AddButton;
import React from "react";

function Summary(props) {
    return (
        <div className="summary">
            <h2>Balance</h2>
            <p>Net:
                {props.total} €
                </p>
        </div>
    )
}

export default Summary;
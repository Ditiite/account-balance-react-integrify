import React from "react";

function Summary(props) {
    return (
        <div>
            <h1>Balance</h1>
            <p>Net:
                {props.total} €
                </p>
        </div>
    )
}

export default Summary;
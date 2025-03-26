import React from "react";

const Button = (props) => {
    return (
        <button type="button" value={props.label} onClick={props.handleClick}>
            {props.label}
        </button>
    );
};
export default Button;
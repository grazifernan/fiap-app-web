import React from "react";
import './buttons.css';

function Button(props) {
    return (
        <button className={'button ' + props.Class} onClick={props.ClickFunction} id={props.Id}>{props.Text}</button>
    );
}

export default Button;

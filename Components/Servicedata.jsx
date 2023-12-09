import React from "react";
import './Servicetrip.css'

function Servicedata(props) {

    return (

        <div className="st-card">
            <div className="st-image">
                <img src={props.simage} alt="trip" />
            </div>
            <h4>{props.sheading}</h4>
            <p>{props.stext}</p>
        </div>
    )
}

export default Servicedata
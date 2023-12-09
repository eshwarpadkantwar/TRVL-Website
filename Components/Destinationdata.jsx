import React from "react";
import "./Destination.css"

function Destinationdata(props) {
    return (
        <div>
            <div className={props.className}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>

                </div>
                <div className="image">
                    <img src={props.img1} alt="image1" />
                    <img src={props.img2} alt="image2" />
                </div>

            </div>

        </div>
    )
}

export default Destinationdata
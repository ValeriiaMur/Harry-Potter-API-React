// Write your Character component here
import React from "react";

const Character = (props) => {
    return (
        <div className = "card">
            <div className = "card__image-holder">
                <img className = "wrapper" src={props.img}></img>
            </div>
            <div className = "card-title">
                <h2>{props.title}</h2>
                <p>{props.house}</p>
            </div>
        </div>
    )
}


export default Character;

import React from 'react';
import hideElement from '../utils/hideElement';
import './Card.css';
const Card = props => {

    return (


        <div class="card">
            <div class="text">
                <img src={props.image} alt="" />
                <h4>{props.name}</h4>
                <p>{props.role}</p>
                <p>{props.bio}</p>
            </div>
            <div class="links">
                <a target="_blank" class="linkedin" href={props.linkedin}><i class="fa-brands fa-linkedin" /></a>
                <a target="_blank" class="twitter" href={props.twitter}><i class="fa-brands fa-twitter" /></a>
                <a target="_blank" id="link" href={props.link}> <i class="fa-solid fa-link" /></a>
                {/* { hideElement("link", props.name) } */}
            </div>
        </div>


    )
}

export default Card;

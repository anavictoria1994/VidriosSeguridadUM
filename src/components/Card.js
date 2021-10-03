import React from 'react'
import './styles/carousel.css'



function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.image} alt="Responsive image" className="img-fluid"/>
                <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import Card from './Card'
import Division from '../assets/img/division1.jpg'
import Espejos from '../assets/img/espejos.jpg'
import Pasamanos from '../assets/img/pasamanos.jpg'

const cards =[
    {
        id: 1,
        title: 'Divisiones de baño',
        image: Division
    },
    {
        id: 2,
        title: 'Espejos',
        image: Espejos
    },
    {
        id: 3,
        title: 'Pasamanos',
        image: Pasamanos
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center aling-items-center h-100">
           <div className="row">  
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image}/>
                        </div>
                    ))
                }       
           </div>
            
        </div>
    )
}

export default Cards

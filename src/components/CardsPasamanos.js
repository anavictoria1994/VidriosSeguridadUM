import React from 'react'
import Card from './Card'
import Barandilla from '../assets/img/barandilla.jpg'
import Vidrio from '../assets/img/pasamanosvidrio.jpeg'

import './styles/cards.css'

const cards =[
    {
        id: 1,
        title: 'Pasamanos de barandilla',
        image: Barandilla,
        desc: 'Pasamanos con barandillas',
        cotizar_title:'Formulario de cotización Pasamanos'
    },
    {
        id: 2,
        title: 'Pasamanos con vidrio',
        image: Vidrio,
        desc: 'Pasamanos con vidrio',
        cotizar_title:'Formulario de cotización Pasamanos'
    }
]

function CardsPasamanos() {
    return (
        <div className="container cards-container d-flex justify-content-center aling-items-center h-100">
           <div className="row">  
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card id={card.id} title={card.title} image={card.image} desc={card.desc} cotizar={card.cotizar_title}/>
                        </div>
                    ))
                }       
           </div>
            
        </div>
        
    )
}

export default CardsPasamanos

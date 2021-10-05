import React from 'react'
import Card from './Card'
import Cuadrados from '../assets/img/cuadrados.jpg'
import Redondos from '../assets/img/redondo.jpg'
import './styles/cards.css'

const cards =[
    {
        id: 1,
        title: 'Espejo Rectangular',
        image: Cuadrados,
        desc: 'Espejo con marco rectangular',
        cotizar_title:'Formulario de cotización Espejo'
    },
    {
        id: 2,
        title: 'Espejo redondo',
        image: Redondos,
        desc: 'Espejo Redondo',
        cotizar_title:'Formulario de cotización Espejo'
    }
]

function CardsEspejos() {
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

export default CardsEspejos

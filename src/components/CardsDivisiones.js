import React from 'react'
import Card from './Card'
import Glassvit from '../assets/img/glassvit.jpg'
import Batiente from '../assets/img/batiente.jpg'
import DivisionL from '../assets/img/divisionL.jpg'
import './styles/cards.css'

const cards =[
    {
        id: 1,
        title: 'Glassvit',
        image: Glassvit,
        desc: 'División de baño modelo Glassvit con vidrio de 8 mm corredizo, accesorios en acero inoxidable',
        cotizar_title:'Formulario de cotización División'
    },
    {
        id: 2,
        title: 'Batiente',
        image: Batiente,
        desc: 'División de baño modelo Batiente con vidrio de 8 mm con bisagras y accesorios en acero inoxidable',
        cotizar_title:'Formulario de cotización División'
    },
    {
        id: 3,
        title: 'Division en L',
        image: DivisionL,
        desc: 'División de baño modelo Glassvit con  4 vidrios de 8 mm con accesorios en acero inoxidable',
        cotizar_title:'Formulario de cotización División'
    }
]

function CardsDivisiones() {
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

export default CardsDivisiones

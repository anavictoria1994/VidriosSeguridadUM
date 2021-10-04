import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import division1 from '../assets/img/division1.jpg';
import pasamanos1 from '../assets/img/pasamanos.jpg';
import espejos from '../assets/img/espejos.jpg';
import mision from '../assets/img/misionn.jpeg';
import vision from '../assets/img/visionn.jpeg';
import objetivo from '../assets/img/objetivoss.jpeg';
import Cards from'../components/Cards.js'
import '../components/styles/carousel.css';

const Inicio = () => {
    return (
        <div>
            <div className="margi">
        <ReactBootStrap.Carousel>
          <ReactBootStrap.Carousel.Item>
           <img
            className="carousel"
            src ={division1}
            alt="Second slide"
            />
          <ReactBootStrap.Carousel.Caption>
            <h3>DIVISIONES DE BAÑOS</h3>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img 
            className="carousel"
            src ={espejos}
            alt="Second slide"
            
          />
          <ReactBootStrap.Carousel.Caption>
            <h3>ESPEJOS</h3>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="carousel"
            src ={pasamanos1}
            alt="Second slide"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3>PASAMANOS</h3>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>
      </div>
      <div>
      </div>
      <div className="mision">
      <main class= "col-md-12">
      <section class="altura-a-b">
          <div class="row align-items-end">
            <div class="col-12 col-sm-4 text-centar" >

              <img
                className="carousel"
                src ={mision}
              />
              <p>Nuestra misión es comercializar e instalar 
                sistemas en vidrio y aluminio para el público en general; 
                satisfaciendo las necesidades de nuestros clientes, 
                teniendo como valor agregado la calidad de nuestros productos y servicios.</p>
            </div>
            <div class="col-12 col-sm-4 text-centar">
              <img
                className="carousel"
                src ={vision}
              />
              <p>Consolidarnos a nivel nacional como la mejor empresa en la manufactura y comercialización de productos fabricados en vidrio y aluminio, 
                obteniendo con ello el reconocimiento de nuestros clientes con productos innovadores de alta calidad, 
                fomentando el desarrollo de nuestros colaboradores y el continuo crecimiento de nuestra empresa.</p>
            </div>
            <div class="col-12 col-sm-4 text-centar">
              <img
                className="carousel"
                src ={objetivo}
              />
              <p>Mantén una distancia de seguridad con personas que tosan 
                o estornuden, recuerda que en todo momento estás expuesto 
                al virus, por lo tanto sé cuidadoso.</p>
            </div>
          </div>
      </section>
     </main>
    </div>
        </div>
    )
}

export default Inicio
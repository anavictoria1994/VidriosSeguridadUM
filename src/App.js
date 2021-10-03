
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import division1 from './assets/img/divin1.png';
import pasamanos1 from './assets/img/pasamanos.jpg';
import espejos from './assets/img/espejos.jpg';
import mision from './assets/img/misionn.jpeg';
import vision from './assets/img/visionn.jpeg';
import logo from './assets/img/UMLOGO.png';
import objetivo from './assets/img/objetivoss.jpeg';
import './components/styles/carousel.css';
 
function App() {
  return (
    <div className="App">
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" className="colornavbar">
      <ReactBootStrap.Navbar.Brand  href="#inicio">Vidrios Seguridad UM</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="#inicio">Inicio</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#contacto">Contacto</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Divisiones de Baños</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Pasamanos</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Ventanas</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href="#deets">Mas informacion</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
          Siguenos
        </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      </div>
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

      <div className="mision">
      <main class= "col-md-12">
      <section class="altura-a-b">
          <div class="row">
            <div class="col-12 col-sm-4 text-centar" >
              
              <img
                className="carousel"
                src ={mision}
              />
              <p>Lávate las manos con frecuencia. Usa agua y jabón o un 
                desinfectante de manos a base de alcohol, cuantas veces 
                sea necesario.</p>
            </div>
            <div class="col-12 col-sm-4 text-centar">
              
              <img
                className="carousel"
                src ={vision}
              />
              <p>Utiliza mascarilla cuando no sea posible mantener 
                el distanciamiento físico o todo el tiempo que te sea
                posible.</p>
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

      <div>
        <footer className="footer">
      <   div class="row m-0 col-md-12 align-items-center">
            <div class="d-inline-block col-md-4" >
            <img
            className="logo"
            src ={logo}
          />
            </div>
            <div class="d-inline-block col-md-4" >
              <h5 className="letras">QUÍENES SOMOS</h5>
              <p className="letras">Somos un equipo de profesionales apasionados cuya meta
                es brindar la mejor atención a todas aquellas personas 
                que lo necesitan y estamos dispuestos a dar lo mejor 
                para lograrlo.</p>
            </div>
            <div class="d-inline-block col-md-4">
              <h5 className="letras"> CONTÁCTESE CON NOSOTROS </h5>
              <p className="letras">+57 316 712 0802 /
                318 401 2623</p>
              <p className="letras">vidrioseguridadum@gmail.com</p>
              <p></p>
            </div>
          </div>
        </footer>
      </div>
    
    </div>
  );
}

export default App;

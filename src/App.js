
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import vidrio from './assets/img/vidrio.jpg';
import mision from './assets/img/mision.jpg';
import vision from './assets/img/vision.png';
import objetivo from './assets/img/objetivo.jpg';
import './components/styles/carousel.css';

function App() {
  return (
    <div className="App">
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#inicio">Vidrios Seguridad UM</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="#inicio">Inicio</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#contacto">Contacto</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Costos</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Seguridad</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Vidrios</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
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
      <ReactBootStrap.Carousel >
        <ReactBootStrap.Carousel.Item>
          <img
            className="carousel"
            src ={vidrio}
            alt="Second slide"
          />
          <ReactBootStrap.Carousel.Caption>
            <h3>VIDRIOS</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img 
            className="carousel"
            src ={vidrio}
            alt="Second slide"
            
          />
          <ReactBootStrap.Carousel.Caption>
            <h3>BAÑOS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="carousel"
            src ={vidrio}
            alt="Second slide"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3>VENTANAS</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>
      </div>

      <div className="mision">
      <main class= "col-md-12">
      <section class="altura-a-b">
          <div class="row">
            <div class="col-12 col-sm-4 text-centar" >
              
              <h5 class="altura-texto"> MISION </h5>
              <img
                className="carousel"
                src ={mision}
              />
              <p>Lávate las manos con frecuencia. Usa agua y jabón o un 
                desinfectante de manos a base de alcohol, cuantas veces 
                sea necesario.</p>
            </div>
            <div class="col-12 col-sm-4 text-centar">
              
              <h5 class="altura-texto">VISION </h5>
              <img
                className="carousel"
                src ={vision}
              />
              <p>Utiliza mascarilla cuando no sea posible mantener 
                el distanciamiento físico o todo el tiempo que te sea
                posible.</p>
            </div>
            <div class="col-12 col-sm-4 text-centar">
             
              <h5 class="altura-texto">OBJETIVOS</h5>
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
      <section class="altura-a-b">
        <div class="container">
          <div class="embed-responsive embed-responsive-21by9">
          </div>
        </div>
      </section>
     </main>
    </div>

      <div>
        <footer>
      <   div class="row m-0 col-md-12" >
            <div class="d-inline-block col-md-4" >
            </div>
            <div class="d-inline-block col-md-4">
              <h5 >QUÍENES SOMOS</h5>
              <p>Somos un equipo de profesionales apasionados cuya meta
                es brindar la mejor atención a todas aquellas personas 
                que lo necesitan y estamos dispuestos a dar lo mejor 
                para lograrlo.</p>
            </div>
            <div class="d-inline-block col-md-4">
              <h5 > CONTÁCTESE CON NOSOTROS </h5>
              <p>+57 319 569 896 /
                425 36 96</p>
              <p>stayathome2020@gmail.com</p>
              <p></p>
            </div>
          </div>
        </footer>
      </div>
    
    </div>
  );
}

export default App;

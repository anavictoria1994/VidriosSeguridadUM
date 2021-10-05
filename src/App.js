
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import logo from './assets/img/UMLOGO.png';
import face from './assets/img/face.png';
import wasa from './assets/img/wasa.png';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Espejos from './components/Espejos';
import Divisiones from './components/Divisiones';
import Pasamanos from './components/Pasamanos';
import $ from 'jquery'; 
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink } 
  from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" className="colornavbar">
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Vidrios Seguridad UM</Link>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link style={{marginLeft:'5%'}} href="/">Inicio</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/contacto">Contacto</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="divisiones">Divisiones de Baños</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="pasamanos">Pasamanos</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="espejos">Espejos</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
       
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <Switch>
        <Route path="/" exact>
          <Inicio></Inicio>
        </Route>
        <Route path="/contacto">
          <div class="container mt-4 mb-4"><Contacto></Contacto></div>
            
        </Route>
        <Route path="/divisiones">
          <Divisiones></Divisiones>
        </Route>
        <Route path="/pasamanos">
          <Pasamanos></Pasamanos>
        </Route>
        <Route path="/espejos">
          <Espejos></Espejos>
        </Route>
      </Switch>
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
              <a href="https://www.facebook.com/VidriosdeseguridadUM"
              ><img src={face} style={{width: '10%'}} alt="Facebook"></img>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+573153938956"
              ><img src={wasa} style={{width: '10%'}} alt="Whatsapp"></img>
              </a>
              <p></p>
            </div>
          </div>
        </footer>
      </div>
    
    </div>
    </Router>
  );
}

export default App;


import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import logo from './assets/img/UMLOGO.png';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
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
      <Link  to="/">Vidrios Seguridad UM</Link>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
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
      <Switch>
        <Route path="/" exact>
          <Inicio></Inicio>
        </Route>
        <Route path="/contacto">
          <Contacto></Contacto>
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

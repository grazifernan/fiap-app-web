// import logo from './logotipo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Button from './components/button'
import Menu from './components/menu'
import Consulta from './components/consulta'
import Logo from './logotipo.png'
import Profile from './imageprofile.png'
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, FormControl } from 'react-bootstrap'

function cons() {
  console.log('botao pressionado')
}
function App() {
  return (
    <div className="App">
      <Navbar expand={false}>
  <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Sistema FIAP</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
              <Nav className="justify-content-end pe-3">
                <img src={Logo} className='logo' alt='Logo'></img>
                <Button Class='btnMenu Selected' Id='btnConsultar' Text='Consultar'></Button>
                <Button Class='btnMenu' Id='btnCadastrar' Text='Cadastrar'></Button>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      {/* <Menu></Menu> */}
      <div className='container-fluid'>
        <header className='row justify-content-end align-items-center'>
          <label className='col-md-11 col-9 text-right'>Nicolas Alexandre Benjamin Lopes</label>
          <img src={Profile} id='imgProfile' className='col-md-1 col-3 text-left' alt='Foto usuário'></img>
        </header>
          <Consulta></Consulta>
      </div>
    </div>
  );
}

export default App;

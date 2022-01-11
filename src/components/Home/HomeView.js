import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Button from '../button'
import Consulta from '../Consulta/ConsultaView'
import Cadastro from '../Cadastro/CadastroView'
import Logo from '../logotipo.png'
import Profile from '../imageprofile.png'
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, FormControl } from 'react-bootstrap'
import {Link, useHistory } from 'react-router-dom'

function changeSelected(e) {
  var oldSelected = document.getElementsByClassName('Selected')[0];
  oldSelected.classList.remove('Selected')
  var btnSelected = document.getElementById(e.target.id)
  btnSelected.classList.add('Selected')

  var offcanvas = document.getElementsByClassName('btn-close')[0];
  offcanvas.click()
}
function HomeView() {

  return (
    <div className="App"> 
    
    <Navbar expand={false} >
   <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Confiance Veículos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
              <Nav className="justify-content-end pe-3">
                <img src={Logo} className='logo' alt='Logo'></img>
                <Link to="/consulta" Id='btnConsultar' type="Button" class="btnMenu Selected" onClick={ e => changeSelected(e)}>Consultar</Link>   
                <Link to="/cadastro" Id='btnCadastrar' type="Button" class="btnMenu" onClick={ e => changeSelected(e)}>Cadastrar</Link>   
              </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
   </Container>
</Navbar>
      {/* <Menu></Menu> */}
      <div className='container-fluid'>
        <header className='row justify-content-end align-items-center'>
          <label className='col-md-11 col-9 text-right'>Aptent litora orci</label>
          <img src={Profile} id='imgProfile' className='col-md-1 col-3 text-left' alt='Foto usuário'></img>
        </header>
     
      </div>   

     </div>
   
  );
}

export default HomeView;

import React from "react";
import './consulta.css';
import Button from '../button'
import api from '../../services/api';
import { call } from 'redux-saga/effects';
import { Form, Row, Table } from 'react-bootstrap'

const ConsultaView = (props) => {

    function CarregarModelos() {
        var cmbMarca = document.getElementById('cmbMarcas');
        var codMarca = cmbMarca?.value ?? 0;
        props.buscaModelos(codMarca);
    }
    function ChangeModelo() {
        document.getElementById("cmbModelos").selectedIndex = 0;
    }
        
    return (
        <section className="container">
            <div className="row text-left">
                <h1 id='Title' className="col-sm">Consulta</h1>
            </div>
            <Form className="container text-left">
                <Row className="mb-3">
                    <Form.Group controlId="formGridMarca" className="col-md-4 mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select id="cmbMarcas" defaultValue='Selecione' onChange={ChangeModelo}>
                            <option>Selecione</option>
                            {props.veiculo.listaMarcas?.map(key => {
                                return (<option value={key.codMarca}>{key.descricao}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridAno" className="col-md-4 mb-3">
                        <Form.Label>Ano</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            {props.veiculo.listaAno?.map(key => {
                                return (<option value={key}>{key}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridCor" className="col-md-4 mb-3">
                        <Form.Label>Cor</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            {props.veiculo.listaCor?.map(key => {
                                return (<option value={key.codCor}>{key.cor}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formGridModelo" className="col-md-4 mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Select id="cmbModelos" defaultValue='Selecione' onClick={CarregarModelos}>
                            <option>Selecione</option>
                            {props.Modelos?.map(key => {
                                return (<option value={key.codModelo}>{key.descricao}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridFilial" className="col-md-4 mb-3">
                        <Form.Label>Filial</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            {props.veiculo.listaFiliais?.map(key => {
                                return (<option value={key.codFilial}>{key.razaoSocial}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='secundary' Text='Limpar'></Button>
                    <Button Class='primary' Text='Filtrar'></Button>
                </div>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>10</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </Table>

        </section>
    );
}

export default ConsultaView;

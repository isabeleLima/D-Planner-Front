import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import OrangeButton from "../../buttons/OrangeButton";
import style from "../../styles/AtividadeTipos.module.scss";
import OrangeTextInput from "../../inputs/OrangeTextInput";

export default function AtividadeModalAtt(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [atividade, setAtividade] = useState("");
    const [cadeira, setCadeira] = useState("");
    const [descricao, setDescricao] = useState("");
    const [entrega, setEntrega] = useState("");

  return (
    <>
        <OrangeButton
            onClick={ handleShow }
            Title='EDITAR'>
        </OrangeButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
                <Row>
                    <Col>
                        <div className={style.logoAtividade}></div>
                    </Col>
                    <Col sm="auto" className="mt-3 auto">
                        <h4 className={style.atividade}>ATUALIZAR ATIVIDADE</h4>
                    </Col>
                </Row>
            </Container>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Container fluid="sm">
                    <Row className="my-4" sm="auto">
                        <Col sm={12}>
                            <OrangeTextInput
                                    id="atividade"
                                    type="text"
                                    placeholder="TÍTULO DA ATIVIDADE"
                                    value={atividade}
                                    onChange={e => setAtividade(e.target.value)}
                                >
                                    {" "}
                            </OrangeTextInput>
                        </Col>        
                    </Row>
  
                    <Row className="my-4" sm="auto">
                        <Col sm={12}>
                            <OrangeTextInput
                                    id="cadeira"
                                    type="text"
                                    placeholder="NOME DA CADEIRA"
                                    value={cadeira}
                                    onChange={e => setCadeira(e.target.value)}
                                >
                                    {" "}
                            </OrangeTextInput>
                        </Col>        
                    </Row>
  
                    <Row className="my-4" sm="auto">
                        <Col sm={12}>
                            <OrangeTextInput
                                    id="descricao"
                                    type="text"
                                    placeholder="DESCRIÇÃO"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                >
                                    {" "}
                            </OrangeTextInput>
                        </Col>        
                    </Row>

                    <Row className="mb-4 justify-content-sm-start" sm="auto">
                            <Col sm="auto">
                                <label className={style.atividade}>PRAZO DE ENTREGA</label>
                            </Col>
                            <Col sm={7}>
                                <OrangeTextInput
                                    id="entrega"
                                    type="date"
                                    placeholder=""
                                    value={entrega}
                                    onChange={e => setEntrega(e.target.value)}
                                >
                                    {" "}
                                    
                                </OrangeTextInput>
                            </Col>
                    </Row>
                    
                </Container>
            </Form> 
        </Modal.Body>
        <Modal.Footer>
            <OrangeButton
                onClick={ handleClose }
                Title='ATUALIZAR'>
            </OrangeButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
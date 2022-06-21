import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import GreenButton from "../../buttons/GreenButton";
import style from "../../../styles/AtividadeTipos.module.scss";
import GreenTextInput from "../../inputs/GreenTextInput";
import ActivityService from "../../../services/activity";
import SubjectService from "../../../services/subject";

interface Props {
    refetch: () => void
}

export default function ApresentacaoModalAtt(props: Props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [apresentacao, setApresentacao] = useState("");
    const [cadeira, setCadeira] = useState("");
    const [descricao, setDescricao] = useState("");
    const [entrega, setEntrega] = useState("");

  return (
    <>
        <GreenButton
            onClick={ handleShow }
            Title='EDITAR'>
        </GreenButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
                <Row>
                    <Col>
                        <div className={style.logoApresentacao}></div>
                    </Col>
                    <Col sm="auto" className="mt-3 auto">
                        <h4 className={style.apresentacao}>ATUALIZAR APRESENTAÇÃO</h4>
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
                            <GreenTextInput
                                    id="apresentacao"
                                    type="text"
                                    placeholder="TÍTULO DA APRESENTAÇÃO"
                                    value={apresentacao}
                                    onChange={e => setApresentacao(e.target.value)}
                                >
                                    {" "}
                            </GreenTextInput>
                        </Col>        
                    </Row>
  
                    <Row className="my-4" sm="auto">
                        <Col sm={12}>
                            <GreenTextInput
                                    id="cadeira"
                                    type="text"
                                    placeholder="NOME DA CADEIRA"
                                    value={cadeira}
                                    onChange={e => setCadeira(e.target.value)}
                                >
                                    {" "}
                            </GreenTextInput>
                        </Col>        
                    </Row>
  
                    <Row className="my-4" sm="auto">
                        <Col sm={12}>
                            <GreenTextInput
                                    id="descricao"
                                    type="text"
                                    placeholder="DESCRIÇÃO"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                >
                                    {" "}
                            </GreenTextInput>
                        </Col>        
                    </Row>

                    <Row className="mb-4 justify-content-sm-start" sm="auto">
                            <Col sm="auto">
                                <label className={style.apresentacao}>PRAZO DE ENTREGA</label>
                            </Col>
                            <Col sm={7}>
                                <GreenTextInput
                                    id="entrega"
                                    type="date"
                                    placeholder=""
                                    value={entrega}
                                    onChange={e => setEntrega(e.target.value)}
                                >
                                    {" "}
                                    
                                </GreenTextInput>
                            </Col>
                    </Row>
                    
                </Container>
            </Form> 
        </Modal.Body>
        <Modal.Footer>
            <GreenButton
                onClick={ handleClose }
                Title='ATUALIZAR'>
            </GreenButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
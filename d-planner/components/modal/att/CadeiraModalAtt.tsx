import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import PurpleButton from "../../buttons/PurpleButton";
import style from "../../../styles/Cadeira.module.scss";
import PurpleTextInput from "../../inputs/PurpleTextInput";

export default function CadeiraModalAtt(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nomeCadeira, setNomeCadeira] = useState("");
    const [professor, setProfessor] = useState("");
    const [semestre, setSemestre] = useState("");
    const [status, setStatus] = useState("");

  return (
    <>
        <PurpleButton
            onClick={ handleShow }
            Title='EDITAR'>
        </PurpleButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
                <Row>
                    <Col>
                        <div className={style.logoCadeira}></div>
                    </Col>
                    <Col sm="auto" className="mt-3 auto">
                        <h4 className={style.cadeiraColor}>ATUALIZAR CADEIRA</h4>
                    </Col>
                </Row>
            </Container>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                    <div className="my-4">
                        <PurpleTextInput
                            id="nomeCadeira"
                            type="text"
                            placeholder="NOME DA CADEIRA"
                            value={nomeCadeira}
                            onChange={e => setNomeCadeira(e.target.value)}
                        >
                            {" "}
                        </PurpleTextInput>
                    </div>
                    <div className="mb-4">
                        <PurpleTextInput
                            id="professor"
                            type="text"
                            placeholder="PROFESSOR"
                            value={professor}
                            onChange={e => setProfessor(e.target.value)}
                        >
                            {" "}
                        </PurpleTextInput>
                    </div>
                    <div className="mb-4">
                        <PurpleTextInput
                            id="semestre"
                            type="text"
                            placeholder="SEMESTRE"
                            value={semestre}
                            onChange={e => setSemestre(e.target.value)}
                        >
                            {" "}
                        </PurpleTextInput>
                    </div>
                    <div className="mb-4">
                        <PurpleTextInput
                            id="status"
                            type="text"
                            placeholder="STATUS"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            {" "}
                        </PurpleTextInput>
                    </div>
            </Form> 
        </Modal.Body>
        <Modal.Footer>
            <PurpleButton
                onClick={ handleClose }
                Title='ATUALIZAR'>
            </PurpleButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
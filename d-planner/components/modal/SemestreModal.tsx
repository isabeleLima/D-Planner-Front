import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import BlueButton from "../buttons/BlueButton";
import style from "../../styles/Semester.module.scss";
import BlueTextInput from "../inputs/BlueTextInput";

export default function SemestreModal(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [semestre, setSemestre] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

  return (
    <>
        <BlueButton
            onClick={ handleShow }
            Title='ADICIONAR SEMESTRE'
            >
        </BlueButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
                <Row>
                    <Col>
                        <div className={style.logoCalendar}></div>
                    </Col>
                    <Col sm="auto" className="mt-3 auto">
                        <h4 className={style.semesterColor}>NOVO SEMESTRE</h4>
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
                        <BlueTextInput
                                id="semestre"
                                type="text"
                                placeholder="SEMESTRE"
                                value={semestre}
                                onChange={e => setSemestre(e.target.value)}
                            >
                                {" "}
                        </BlueTextInput>
                    </Col>        
                </Row>
                    <Row className="mb-4 justify-content-sm-start" sm="auto">
                            <Col sm={4}>
                                <label className={style.semesterColor}>DATA INICIAL</label>
                            </Col>
                            <Col sm={4}>
                                <BlueTextInput
                                    id="dataInicio"
                                    type="date"
                                    placeholder=""
                                    value={dataInicio}
                                    onChange={e => setDataInicio(e.target.value)}
                                >
                                    {" "}
                                    
                                </BlueTextInput>
                            </Col>
                    </Row>
                    <Row className="mb-4" sm="auto">
                            <Col sm={4}>
                                <label className={style.semesterColor}>DATA FIM</label>
                            </Col>
                            <Col sm={4}>
                                <BlueTextInput
                                id="dataFim"
                                type="date"
                                placeholder=""
                                value={dataFim}
                                onChange={e => setDataFim(e.target.value)}
                            >
                                {" "}
                                </BlueTextInput>
                            </Col>
                    </Row>
                </Container>
            </Form> 
        </Modal.Body>
        <Modal.Footer>
            <BlueButton
                onClick={ handleClose }
                Title='CADASTRAR'>
            </BlueButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
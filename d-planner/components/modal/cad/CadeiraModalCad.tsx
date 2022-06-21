import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import PurpleButton from "../../buttons/PurpleButton";
import style from "../../../styles/Cadeira.module.scss";
import PurpleTextInput from "../../inputs/PurpleTextInput";
import SubjectService, { CreateSubject } from "../../../services/subject";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import SemesterService from "../../../services/semester";
import { Semester as Sem, Subjects } from "../../../util/types";
import Semester from "../../Semester";

export default function CadeiraModalCad(props: { refetch: () => void }){
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [professor, setProfessor] = useState("");
    const [semestreNome, setSemestreNome] = useState("");
    const [status, setStatus] = useState("");
    
    let semester_id: number
    
    const fetch = () => {
        SemesterService.findByName(semestreNome).then(semestre => {
            console.log(semestre);
            semester_id = semestre.id
        });
    };
    
    useEffect(() => {
        fetch();
    }, []);

    const handleClose = async () => {
        await SubjectService.create({
            semester_id,
            name,
            professor,
            status,
        })
        props.refetch()
        setShow(false);
    }

    const handleShow = () => setShow(true);

  return (
    <>
        <PurpleButton
            onClick={ handleShow }
            Title='ADICIONAR CADEIRA'>
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
                        <h4 className={style.cadeiraColor}>NOVA CADEIRA</h4>
                    </Col>
                </Row>
            </Container>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                    <div className="my-4">
                        <PurpleTextInput
                            id="name"
                            type="text"
                            placeholder="NOME DA CADEIRA"
                            value={name}
                            onChange={e => setName(e.target.value)}
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
                            value={semestreNome}
                            onChange={e => setSemestreNome(e.target.value)}
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
                Title='CADASTRAR'>
            </PurpleButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
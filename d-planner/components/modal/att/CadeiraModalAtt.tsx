import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import PurpleButton from "../../buttons/PurpleButton";
import style from "../../../styles/Cadeira.module.scss";
import PurpleTextInput from "../../inputs/PurpleTextInput";
import { Subjects } from "../../../util/types";
import SemesterService from "../../../services/semester";
import SubjectService from "../../../services/subject";

interface Props {
    cadeira: Subjects
    refetch: () => void
}

export default function CadeiraModalAtt({ cadeira, refetch }: Props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [name, setName] = useState("");
    const [professor, setProfessor] = useState("");
    const [semestreNome, setSemestreNome] = useState("");
    const [status, setStatus] = useState("");

    let semester_id: number

    const handleShow = () => {
        setShow(true)
        setName(cadeira.nome)

        SemesterService.findById(cadeira.semester.id).then(semestre => {
            setSemestreNome(semestre.nome)
        });

        setProfessor(cadeira.professor)
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()

        SemesterService.findByName(semestreNome).then(semestre => {
            console.log(semestre);
            semester_id = semestre.id
        });
    
        try {
          await SubjectService.update(cadeira.id, {
            semester_id,
            name,
            professor,
            status
          })
    
          handleClose()
    
          refetch()
        } catch (error) {
          console.log(error)
        }
    }

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
                            id="semestreNome"
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
                onClick={ handleSubmit }
                Title='ATUALIZAR'>
            </PurpleButton> 
        </Modal.Footer>
      </Modal>
    </>
  );
}
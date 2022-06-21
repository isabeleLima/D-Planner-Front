import { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import SemesterService from "../../../services/semester"
import SubjectService from "../../../services/subject"
import style from "../../../styles/Cadeira.module.scss"
import { Semester as Sem } from "../../../util/types"
import PurpleButton from "../../buttons/PurpleButton"
import PurpleTextInput from "../../inputs/PurpleTextInput"

export default function CadeiraModalCad(props: { refetch: () => void }) {
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [professor, setProfessor] = useState("")
  const [status, setStatus] = useState("")

  const [semesters, setSemesters] = useState<Sem[]>([])
  const [semesterId, setSemesterId] = useState(0)

  const fetch = () => {
    SemesterService.findByUser().then(setSemesters)
  }

  useEffect(() => {
    fetch()
  }, [])

  const handleClose = async () => {
    await SubjectService.create({
      semesterId,
      nome: name,
      professor,
      status,
    })
    props.refetch()
    setShow(false)
  }

  const handleShow = () => setShow(true)

  return (
    <>
      <PurpleButton
        onClick={handleShow}
        Title="ADICIONAR CADEIRA"
      ></PurpleButton>

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
              <Form.Select
                id="cadeira"
                placeholder="SEMESTRE"
                value={semesterId}
                onChange={e => setSemesterId(parseInt(e.target.value))}
              >
                <option value="0">Semestre</option>
                {semesters.map(sem => (
                  <option value={sem.id} key={sem.id}>
                    {sem.nome}
                  </option>
                ))}
              </Form.Select>
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
          <PurpleButton onClick={handleClose} Title="CADASTRAR"></PurpleButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

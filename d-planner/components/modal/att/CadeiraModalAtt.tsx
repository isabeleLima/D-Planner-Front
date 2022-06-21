import { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import SemesterService from "../../../services/semester"
import SubjectService from "../../../services/subject"
import style from "../../../styles/Cadeira.module.scss"
import { Semester as Sem, Subjects } from "../../../util/types"
import PurpleButton from "../../buttons/PurpleButton"
import PurpleTextInput from "../../inputs/PurpleTextInput"

interface Props {
  cadeira: Subjects
  refetch: () => void
}

export default function CadeiraModalAtt({ cadeira, refetch }: Props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const [name, setName] = useState(cadeira.nome)
  const [professor, setProfessor] = useState(cadeira.professor)
  const [status, setStatus] = useState("")

  const [semesters, setSemesters] = useState<Sem[]>([])
  const [semesterId, setSemesterId] = useState(cadeira.semester.id)

  const fetch = () => {
    SemesterService.findByUser().then(setSemesters)
  }

  useEffect(() => {
    fetch()
  }, [])

  const handleShow = () => {
    setShow(true)
    setName(cadeira.nome)

    setProfessor(cadeira.professor)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    try {
      await SubjectService.update(cadeira.id, {
        semesterId,
        nome: name,
        professor,
        status,
      })

      handleClose()

      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <PurpleButton onClick={handleShow} Title="EDITAR"></PurpleButton>

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
          <PurpleButton onClick={handleSubmit} Title="ATUALIZAR"></PurpleButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

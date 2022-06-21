import { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import ActivityService from "../../../services/activity"
import SubjectService from "../../../services/subject"
import style from "../../../styles/AtividadeTipos.module.scss"
import { Subjects } from "../../../util/types"
import RedButton from "../../buttons/RedButton"
import RedTextInput from "../../inputs/RedTextInput"

interface Props {
  refetch: () => void
}

export default function AvaliacaoModalCad({ refetch }: Props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [subjects, setSubjects] = useState<Subjects[]>([])

  const [avaliacao, setAvaliacao] = useState("")
  const [cadeira, setCadeira] = useState(0)
  const [descricao, setDescricao] = useState("")
  const [entrega, setEntrega] = useState("")

  useEffect(() => {
    SubjectService.findBySemester_User_Id().then(setSubjects)
  }, [])

  const handleSubmit = async () => {
    await ActivityService.create({
      nome: avaliacao,
      dataDeEntrega: entrega,
      descricao,
      status: "ABERTO",
      type: "PRESENTATION",
      subject: {
        id: cadeira,
      },
    })
    handleClose()
    refetch()
  }

  return (
    <>
      <RedButton onClick={handleShow} Title="ADICIONAR AVALIAÇÃO"></RedButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
              <Row>
                <Col>
                  <div className={style.logoAvaliacao}></div>
                </Col>
                <Col sm="auto" className="mt-3 auto">
                  <h4 className={style.avaliacao}>NOVA AVALIAÇÃO</h4>
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
                  <RedTextInput
                    id="atividade"
                    type="text"
                    placeholder="TÍTULO DA AVALIAÇÃO"
                    value={avaliacao}
                    onChange={e => setAvaliacao(e.target.value)}
                  >
                    {" "}
                  </RedTextInput>
                </Col>
              </Row>

              <Row className="my-4" sm="auto">
                <Col sm={12}>
                  <Form.Select
                    id="cadeira"
                    placeholder="NOME DA CADEIRA"
                    value={cadeira}
                    onChange={e => setCadeira(parseInt(e.target.value))}
                  >
                    <option value="0">Cadeira</option>
                    {subjects.map(sub => (
                      <option value={sub.id}>{sub.nome}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              <Row className="my-4" sm="auto">
                <Col sm={12}>
                  <RedTextInput
                    id="descricao"
                    type="text"
                    placeholder="DESCRIÇÃO"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  >
                    {" "}
                  </RedTextInput>
                </Col>
              </Row>

              <Row className="mb-4 justify-content-sm-start" sm="auto">
                <Col sm="auto">
                  <label className={style.avaliacao}>PRAZO DE ENTREGA</label>
                </Col>
                <Col sm={7}>
                  <RedTextInput
                    id="entrega"
                    type="date"
                    placeholder=""
                    value={entrega}
                    onChange={e => setEntrega(e.target.value)}
                  >
                    {" "}
                  </RedTextInput>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <RedButton onClick={handleSubmit} Title="CADASTRAR"></RedButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

import moment from "moment"
import { useEffect, useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import ActivityService from "../../../services/activity"
import SubjectService from "../../../services/subject"
import style from "../../../styles/AtividadeTipos.module.scss"
import { Activity, Subjects } from "../../../util/types"
import GreenButton from "../../buttons/GreenButton"
import GreenTextInput from "../../inputs/GreenTextInput"

interface Props {
  refetch: () => void
  activity: Activity
}

export default function ApresentacaoModalAtt({ refetch, activity }: Props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [subjects, setSubjects] = useState<Subjects[]>([])

  const [apresentacao, setApresentacao] = useState(activity.nome)
  const [cadeira, setCadeira] = useState(activity.subject.id)
  const [descricao, setDescricao] = useState(activity.descricao)
  const [entrega, setEntrega] = useState(
    moment.utc(activity.dataDeEntrega).format("yyyy-MM-DD")
  )

  useEffect(() => {
    SubjectService.findBySemester_User_Id().then(setSubjects)
  }, [])

  const handleSubmit = async () => {
    await ActivityService.update(activity.id, {
      nome: apresentacao,
      dataDeEntrega: entrega,
      descricao,
      status: "ABERTO",
      type: activity.type,
      subject: {
        id: 1,
      },
    })
    handleClose()
    refetch()
  }

  return (
    <>
      <GreenButton onClick={handleShow} Title="EDITAR"></GreenButton>

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
                  <Form.Select
                    id="cadeira"
                    placeholder="NOME DA CADEIRA"
                    value={cadeira}
                    onChange={e => setCadeira(parseInt(e.target.value))}
                  >
                    <option value="0">Cadeira</option>
                    {subjects.map(sub => (
                      <option
                        value={sub.id}
                        selected={sub.id === cadeira}
                        key={sub.id}
                      >
                        {sub.nome}
                      </option>
                    ))}
                  </Form.Select>
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
          <GreenButton onClick={handleSubmit} Title="ATUALIZAR"></GreenButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

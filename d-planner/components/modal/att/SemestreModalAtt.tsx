import { useState } from "react"
import { Button, Container, Form, Row, Col } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import BlueButton from "../../buttons/BlueButton"
import style from "../../../styles/Semester.module.scss"
import BlueTextInput from "../../inputs/BlueTextInput"
import { Semester } from "../../../util/types"
import SemesterService from "../../../services/semester"
import moment from "moment"

interface Props {
  semester: Semester
  refetch: () => void
}

export default function SemestreModalAtt({ semester, refetch }: Props) {
  const [show, setShow] = useState(false)

  const [nome, setNome] = useState(semester.nome)
  const [dataDeInicio, setDataDeInicio] = useState(
    moment.utc(semester.dataDeInicio).format("yyyy-MM-DD")
  )
  const [dataDeFim, setDataDeFim] = useState(
    moment.utc(semester.dataDeFim).format("yyyy-MM-DD")
  )

  const handleClose = () => setShow(false)

  const handleShow = () => {
    setShow(true)

    setNome(semester.nome)
    setDataDeInicio(moment.utc(semester.dataDeInicio).format("yyyy-MM-DD"))
    setDataDeFim(moment.utc(semester.dataDeFim).format("yyyy-MM-DD"))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    try {
      await SemesterService.update(semester.id, {
        nome,
        dataDeInicio,
        dataDeFim,
      })

      handleClose()

      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BlueButton onClick={handleShow} Title="EDITAR"></BlueButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Container>
              <Row>
                <Col>
                  <div className={style.logoCalendar}></div>
                </Col>
                <Col sm="auto" className="mt-3 auto">
                  <h4 className={style.semesterColor}>ATUALIZAR SEMESTRE</h4>
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
                    value={nome}
                    onChange={e => setNome(e.target.value)}
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
                    value={dataDeInicio}
                    onChange={e => setDataDeInicio(e.target.value)}
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
                    value={dataDeFim}
                    onChange={e => setDataDeFim(e.target.value)}
                  >
                    {" "}
                  </BlueTextInput>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BlueButton onClick={handleSubmit} Title="ATUALIZAR"></BlueButton>
        </Modal.Footer>
      </Modal>
    </>
  )
}

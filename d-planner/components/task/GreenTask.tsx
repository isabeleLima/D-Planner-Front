import { useState, useEffect } from "react";
import style from "../../styles/tasks/GreenTask.module.scss";
import GreenButton from "../buttons/GreenButton";
import { Container, Row, Col, Stack, Modal } from "react-bootstrap";

function GreenModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={style.modaltask}
    >
      <Modal.Header closeButton>
        <Stack direction="horizontal" gap={4}>
          <div className={style.logoTask}></div>
          <Stack direction="vertical" gap={3}>
            <h4>3° AVALIAÇÃO</h4>
            <h5>PROGRAMAÇÃO WEB</h5>
          </Stack>
        </Stack>
      </Modal.Header>
      <Modal.Body>
        <Container className="container-fluid">
          <p className="mb-5  text-break">
            Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
            num tendi nada. Cevadis im ampola pa arma uma pindureta.Leite de
            capivaris, leite de mula
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <GreenButton Title="CONCLUIR"> </GreenButton>
      </Modal.Footer>
    </Modal>
  );
}

export default function GreenTask() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        className={"w-100 mx-auto rounded p-2 mb-3 " + style.Task}
        onClick={() => setModalShow(true)}
      >
        <Container fluid className="p-0">
          <Row>
            <Col className={"col-12 col-md-6 mb-3"}>
              <Stack direction="horizontal" className={"mx-auto"} gap={4}>
                <div className={style.logoTask}></div>
                <h4>1 dia</h4>
                <Stack direction="vertical" className={"text-center"} gap={3}>
                  <h5>3° AVALIAÇÃO</h5>
                  <h6>PROGRAMAÇÃO WEB</h6>
                </Stack>
              </Stack>
            </Col>
            <Col className={"col-12 col-md-6 "}>
              <p className="text-break ms-auto">
                Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et
                quo num tendi nada. Cevadis im ampola pa arma uma
                pindureta.Leite de capivaris, leite de mula
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <GreenModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

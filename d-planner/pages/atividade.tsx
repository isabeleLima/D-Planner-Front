import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import OrangeTask from "../components/task/OrangeTask";
import style from "../styles/Calendar.module.scss";
import AtividadeModal from "../components/modal/AtividadeModal";

export default function Semesters() {
  return (
    <Container fluid className={"p-0 "}>
      <Header></Header>

      <Container className={"pb-4 mt-4 " + style.calendar}>
        <Row>
          <Col className={"col-12 pt-4 rounded-top " + style.topGreen}>
            <div className="d-flex justify-content-center bg-light h-75 w-75 mx-auto rounded"></div>
          </Col>
        </Row>
        <Row>
          <AtividadeModal></AtividadeModal>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
          <OrangeTask></OrangeTask>
          <OrangeTask></OrangeTask>
          <OrangeTask></OrangeTask>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
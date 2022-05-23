import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import RedTask from "../components/task/RedTask";
import OrangeTask from "../components/task/OrangeTask";
import GreenTask from "../components/task/GreenTask";
import GrayTask from "../components/task/GrayTask";
import style from "../styles/Calendar.module.scss";
export default function Historico() {
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
          <Col className={"col-12 rounded-bottom pt-4"}>
            <RedTask></RedTask>
            <GrayTask></GrayTask>
            <OrangeTask></OrangeTask>
            <GreenTask></GreenTask>
            <GrayTask></GrayTask>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

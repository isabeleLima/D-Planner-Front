import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import GreenTask from "../components/task/GreenTask";
import style from "../styles/Calendar.module.scss";
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
          <Col className={"col-12 rounded-bottom pt-4"}>
          <GreenTask></GreenTask>
          <GreenTask></GreenTask>
          <GreenTask></GreenTask>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
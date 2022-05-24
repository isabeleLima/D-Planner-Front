import { Col, Container, Row, Stack, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Semester from "../components/Semester";
import style from "../styles/Calendar.module.scss";

import SemesterService, { CreateSemester } from "../services/semester";
import { Semester as Sem } from "../util/types";

export default function Semesters() {

  const newSemestre: Sem = {
    id: 1,
    start: new Date("2022-05-05"),
    end: new Date("2022-07-05"),
    name: '3 Período'
  }

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
          <Button onClick={() => {
            SemesterService.update(newSemestre)
          }}>Novo semestre</Button>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            <Semester></Semester>
            <Semester></Semester>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

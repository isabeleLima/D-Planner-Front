import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import RedTask from "../components/task/RedTask";
import style from "../styles/Calendar.module.scss";
import AvaliacaoModalCad from "../components/modal/cad/AvaliacaoModalCad";
import { useState, useEffect } from "react";
import ActivityService from "../services/activity";
import { Activity } from "../util/types";

export default function Semesters() {
  const [atividades, setAtividades] = useState<Activity[]>([]);

  useEffect(() => {
    ActivityService.findByType("EVALUATION").then(activities => {
      setAtividades(activities);
      console.log(activities);
    });
  }, []);
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
          <AvaliacaoModalCad></AvaliacaoModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
          {atividades?.map((atividade, index) => {
              return <RedTask key={index} activity={atividade}></RedTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import GreenTask from "../components/task/GreenTask";
import style from "../styles/Calendar.module.scss";
import ApresentacaoModalCad from "../components/modal/cad/ApresentacaoModalCad";
import { useState, useEffect } from "react";
import ActivityService from "../services/activity";
import { Activity } from "../util/types";

export default function Semesters() {
  const [atividades, setAtividades] = useState<Activity[]>([]);

  const fetch = () => ActivityService.findByType("PRESENTATION").then(activities => {
    setAtividades(activities);
    console.log(activities);
  });

  useEffect(() => {
    fetch()
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
          <ApresentacaoModalCad refetch={fetch}></ApresentacaoModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            {atividades.map((atividade, index) => {
              return <GreenTask key={index} activity={atividade}></GreenTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

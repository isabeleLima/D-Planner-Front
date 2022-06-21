import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import OrangeTask from "../components/task/OrangeTask";
import style from "../styles/Calendar.module.scss";
import AtividadeModalCad from "../components/modal/cad/AtividadeModalCad";
import { useState, useEffect } from "react";
import ActivityService from "../services/activity";
import { Activity } from "../util/types";

export default function Semesters() {
  const [atividades, setAtividades] = useState<Activity[]>([]);

  const fetch = () => ActivityService.findByType("ACTIVITY").then(activities => {
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
          <AtividadeModalCad refetch={fetch}></AtividadeModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
          {atividades.map((atividade) => {
              return <OrangeTask key={atividade.id} activity={atividade} refetch={fetch}></OrangeTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
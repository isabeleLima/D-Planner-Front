import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import AvaliacaoModalCad from "../components/modal/cad/AvaliacaoModalCad";
import RedTask from "../components/task/RedTask";
import ActivityService from "../services/activity";
import style from "../styles/Calendar.module.scss";
import { Activity } from "../util/types";

export default function Semesters() {
  const [atividades, setAtividades] = useState<Activity[]>([]);

const fetch = () => ActivityService.findByType("EVALUATION").then(activities => {
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
          <AvaliacaoModalCad refetch={fetch}></AvaliacaoModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
          {atividades.map((atividade) => {
              return <RedTask key={atividade.id} activity={atividade} refetch={fetch}></RedTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
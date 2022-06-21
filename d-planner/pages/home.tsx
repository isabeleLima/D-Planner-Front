import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import RedTask from "../components/task/RedTask";
import OrangeTask from "../components/task/OrangeTask";
import GreenTask from "../components/task/GreenTask";
import style from "../styles/Calendar.module.scss";
import { useEffect, useState } from "react";
import { Activity } from "../util/types";
import ActivityService from "../services/activity";

export default function Home() {
  const [atividades, setAtividades] = useState<Activity[]>([]);

  const fetch = () => {
    ActivityService.findByUser().then(activities => {
      setAtividades(activities);
      console.log(activities);
    });
  }

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
          <Col className={"col-12 rounded-bottom pt-4"}>
            {atividades?.map((atividade) => {
              if (atividade.type === "ACTIVITY") {
                return (
                  <OrangeTask key={atividade.id} activity={atividade} refetch={fetch}></OrangeTask>
                )
              } else if (atividade.type === "PRESENTATION") {
                return (
                  <GreenTask key={atividade.id} activity={atividade} refetch={fetch}></GreenTask>
                )
              } else {
                <RedTask key={atividade.id} activity={atividade} refetch={fetch}></RedTask>
              }
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

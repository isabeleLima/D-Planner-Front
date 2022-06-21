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

  useEffect(() => {
    ActivityService.findByUser().then(activities => {
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
          <Col className={"col-12 rounded-bottom pt-4"}>
            {atividades?.map((atividade, index) => {
              if (atividade.type === "ACTIVITY") {
                return (
                  <OrangeTask key={index} activity={atividade}></OrangeTask>
                )
              } else if (atividade.type === "PRESENTATION") {
                return (
                  <RedTask key={index} activity={atividade}></RedTask>
                )
              } else {
                <GreenTask key={index} activity={atividade}></GreenTask>
              }
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import RedTask from "../components/task/RedTask";
import style from "../styles/Calendar.module.scss";
import AvaliacaoModalCad from "../components/modal/cad/AvaliacaoModalCad";
import { api } from "./service/axios";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";


export default function Semesters() {
  const [atividades, setAtividades] = useState<[]>();
  const [user, setUser] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email-user");
    api.post("/user/findUser", { email }).then(result => {
      setUser(result);

      api
        .get(`/activity/listByUserType/${result?.data.id}/2`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then(result => {
          setAtividades(result.data);
          console.log(result.data);
        });
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
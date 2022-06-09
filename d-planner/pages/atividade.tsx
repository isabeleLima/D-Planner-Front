import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import OrangeTask from "../components/task/OrangeTask";
import style from "../styles/Calendar.module.scss";
import AtividadeModal from "../components/modal/AtividadeModal";
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
        .get(`/activity/listByUserType/${result?.data.id}/1`, {
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
          <AtividadeModal></AtividadeModal>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
          {atividades?.map((atividade, index) => {
              return <OrangeTask key={index} activity={atividade}></OrangeTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
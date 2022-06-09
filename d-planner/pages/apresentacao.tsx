import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header";
import GreenTask from "../components/task/GreenTask";
import style from "../styles/Calendar.module.scss";
import ApresentacaoModal from "../components/modal/ApresentacaoModal";
import { api } from "./service/axios";
import { useState, useEffect } from "react";

export default function Semesters() {
  const [atividades, setAtividades] = useState<[]>();
  const [user, setUser] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email-user");
    api.post("/user/findUser", { email }).then(result => {
      setUser(result);

      api
        .get(`/activity/listByUserType/${result?.data.id}/3`, {
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
          <ApresentacaoModal></ApresentacaoModal>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            {atividades?.map((atividade, index) => {
              return <GreenTask key={index} activity={atividade}></GreenTask>;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import Header from "../components/Header";
import RedTask from "../components/task/RedTask";
import OrangeTask from "../components/task/OrangeTask";
import GreenTask from "../components/task/GreenTask";
import style from "../styles/Calendar.module.scss";
import { api } from "./service/axios";
import { useEffect, useState } from "react";
export default function Home() {
  const[atividades,setAtividades] = useState<AxiosResponse | null>(null);
  const[user,setUser] = useState<AxiosResponse | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email-user");

    api.post("/user/findUser",
    {email},
    {headers:{
      'Authorization': `${token}`
    }}).then(result => setUser(result));

   
    api.get(`activity/listByUser/${user?.data.id}`,{headers:{
      'Authorization': `${token}`
    }}).then(result => setAtividades(result));

  }, [user?.data.id]);


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
            <RedTask></RedTask>
            <OrangeTask></OrangeTask>
            <GreenTask></GreenTask>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

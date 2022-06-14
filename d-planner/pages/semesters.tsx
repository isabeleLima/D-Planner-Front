import { useState, useEffect } from "react";
import { Col, Container, Row, Stack, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Semester from "../components/Semester";
import style from "../styles/Calendar.module.scss";
import SemesterService, { CreateSemester } from "../services/semester";
import SubjectService, { CreateSubject } from "../services/subject";
import { Semester as Sem } from "../util/types";
import SemestreModalCad from "../components/modal/cad/SemestreModalCad";


import { api } from "./service/axios";
export default function Semesters() {

  const [sem, setSem] = useState<any[] | null>([])
  const [cadeira, setCadeira] = useState<any[] | null>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email-user");
    api.post("/user/findUser", { email }).then(result => {
      api.get(`/semesters/${result?.data.id}`, {
        headers: {
          'Authorization': `${token}`
        }
      }).then(result => {
        setSem(result.data)
        console.log(result.data)
      });
    })
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
          <SemestreModalCad></SemestreModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            {sem?.map(semester => (
              <Semester key={semester.id}
                semester={semester}
              ></Semester>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

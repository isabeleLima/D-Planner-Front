import { useState, useEffect } from "react";
import { Col, Container, Row, Stack, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Semester from "../components/Semester";
import style from "../styles/Calendar.module.scss";
import SemesterService, { CreateSemester } from "../services/semester";
import SubjectService, { CreateSubject } from "../services/subject";
import { Semester as Sem } from "../util/types";
import SemestreModal from "../components/modal/SemestreModal";

export default function Semesters() {

  const [ sem, setSem] = useState<any[]| null>([])
  const [cadeira, setCadeira] = useState<any[] | null>([]);

  useEffect(()=> {
    SemesterService.list().then((data) =>{
      setSem(data)
    })

    SubjectService.list().then(data => {
      setCadeira(data);
    });
  }, [])
  const newSemestre: CreateSemester= {
    start: new Date("2023-05-05"),
    end: new Date("2023-07-05"),
    name: '5 Período'
  }



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
          <SemestreModal></SemestreModal>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            {sem?.map(semester =>(
              <Semester key={semester.id}
                semester ={semester}
                cadeira = {cadeira}
              ></Semester>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

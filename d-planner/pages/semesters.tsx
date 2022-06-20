import { useState, useEffect } from "react";
import { Col, Container, Row, Stack, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import Semester from "../components/Semester";
import style from "../styles/Calendar.module.scss";
import SemesterService, { CreateSemester } from "../services/semester";
import { Semester as Sem, Subjects } from "../util/types";
import SemestreModalCad from "../components/modal/cad/SemestreModalCad";

export default function Semesters() {
  const [semesters, setSemesters] = useState<Sem[]>([]);

  const fetch = () => {
    SemesterService.findByUser().then(semesters => {
      console.log(semesters);
      setSemesters(semesters);
    });
  };

  useEffect(() => {
    fetch();
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
          <SemestreModalCad refetch={fetch}></SemestreModalCad>
        </Row>
        <Row>
          <Col className={"col-12 rounded-bottom pt-4"}>
            {semesters?.map(semester => (
              <Semester
                key={semester.id}
                semester={semester}
                refetch={fetch}
              ></Semester>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

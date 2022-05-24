import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import CadeiraWithActivites from "../components/CadeiraWithActivites";
import PurpleButton from "../components/buttons/PurpleButton";
import style from "../styles/Calendar.module.scss";

import SubjectService, { CreateSubject } from "../services/subject";
export default function Cadeiras() {
  const newSubject: CreateSubject = {
    semester_id: 1,
    name: "Calculo Numerico",
    professor: "Paulo Cezar",
    status: "ativo",
  };
  const [cadeira, setCadeira] = useState<any[] | null>([]);

  useEffect(() => {
    SubjectService.list().then(data => {
      setCadeira(data);
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
          <PurpleButton
            onClick={() => {
              SubjectService.create(newSubject);
            }}
          Title='ADICIONAR CADEIRA'>
            
          </PurpleButton>

          <Col className={"col-12 rounded-bottom pt-4"}>
            {cadeira?.map(cadeira => (
              <CadeiraWithActivites
                key={cadeira.id}
                cadeira={cadeira}
              ></CadeiraWithActivites>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

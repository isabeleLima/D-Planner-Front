import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import CadeiraWithActivites from "../components/CadeiraWithActivites";
import PurpleButton from "../components/buttons/PurpleButton";
import style from "../styles/Calendar.module.scss";
import CadeiraModalCad from "../components/modal/cad/CadeiraModalCad";
import { Subjects as Subj } from "../util/types";
import { api } from "../services/axios";
import SubjectService, { CreateSubject } from "../services/subject";

export default function Cadeiras() {
  const [cadeiras, setCadeiras] = useState<Subj[]>([]);

  const fetch = () => {
    SubjectService.findBySemester_User_Id().then(cadeiras => {
      console.log(cadeiras);
      setCadeiras(cadeiras);
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
          <CadeiraModalCad refetch={fetch}></CadeiraModalCad>

          <Col className={"col-12 rounded-bottom pt-4"}>
            {cadeiras?.map(cadeira => (
              <CadeiraWithActivites
                key={cadeira.id}
                cadeira={cadeira}
                refetch={fetch}
              ></CadeiraWithActivites>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

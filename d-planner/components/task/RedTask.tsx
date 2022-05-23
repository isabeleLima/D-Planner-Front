import { useState, useEffect } from "react";
import style from "../../styles/tasks/RedTask.module.scss";
import RedButton from "../../components/buttons/RedButton";
import { Container, Row, Col, Stack, Accordion } from "react-bootstrap";

export default function RedTask() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="mb-2" >
        <Accordion.Item eventKey="1"  bsPrefix="danger" className={style.Task}>
          <Accordion.Header  >
            <Stack direction="horizontal" gap={3} className={style.Color}>
              <div className={style.logoTask}></div>
              <h4>1 dia</h4>
              <h6>3° AVALIAÇÃO</h6>
              <h6 className="d-none d-sm-block">PROGRAMAÇÃO WEB</h6>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>
          <h5 className="d-block d-sm-none">PROGRAMAÇÃO WEB</h5>
          <p className="text-break ms-auto">
              Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et
              quo num tendi nada. Cevadis im ampola pa arma uma pindureta.Leite
              de capivaris, leite de mula
            </p>
            <div className="d-flex justify-content-start  mb-2">
              <RedButton Title="CONCLUIR"></RedButton>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

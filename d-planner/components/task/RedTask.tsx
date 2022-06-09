import { useState, useEffect } from "react";
import style from "../../styles/tasks/RedTask.module.scss";
import RedButton from "../../components/buttons/RedButton";
import { Container, Row, Col, Stack, Accordion } from "react-bootstrap";
import dataFormater from "../../pages/service/data";
export default function RedTask(props) {
  const activity = props.activity;
  const days = dataFormater(activity.dataDeEntrega)
  return (
    <>
      <Accordion defaultActiveKey="0" className="mb-2" >
        <Accordion.Item eventKey="1"  bsPrefix="danger" className={style.Task}>
          <Accordion.Header  >
            <Stack direction="horizontal" gap={3} className={style.Color}>
              <div className={style.logoTask}></div>
              <h4>{days}</h4>
              <h6>{activity.nome}</h6>
              <h6 className="d-none d-sm-block">{activity.subject.nome}</h6>
            </Stack>
          </Accordion.Header>
          <Accordion.Body>
          <h5 className="d-block d-sm-none">{activity.subject.nome}</h5>
          <p className="text-break ms-auto">
            {activity.descricao}
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

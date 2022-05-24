import style from "../styles/Cadeira.module.scss";
import Image from "next/image";
import PurpleButton from "./buttons/PurpleButton";
import RedTask from "./task/RedTask";
import OrangeTask from "./task/OrangeTask";
import GreenTask from "./task/GreenTask";
import {Accordion, Stack } from "react-bootstrap";

import SubjectService, { CreateSubject } from "../services/subject";

export default function CadeiraWithActivites(props:any) {
  return (
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey={props.event}>
          <Accordion.Header>
            <Stack direction="horizontal" gap={3} className={style.cadeiraColor}>
              <div className={style.logoCadeira}></div>
              <h4>{props.cadeira?.name}</h4>
            </Stack>
          </Accordion.Header>
          <Accordion.Body className={style.cadeiraColor}>
            <div className="d-flex justify-content-start  mb-2">
              <PurpleButton Title="EDITAR"></PurpleButton>
            </div>
            <div className="d-flex justify-content-start  mb-2">
              <PurpleButton   onClick={() => {
              SubjectService.delete(props.cadeira?.id);
            }}
            Title="EXCLUIR"></PurpleButton>
            </div>
            <RedTask></RedTask>
            <OrangeTask></OrangeTask>
            <GreenTask></GreenTask>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

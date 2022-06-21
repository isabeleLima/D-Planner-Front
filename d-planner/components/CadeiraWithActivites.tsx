import style from "../styles/Cadeira.module.scss";
import Image from "next/image";
import PurpleButton from "./buttons/PurpleButton";
import RedTask from "./task/RedTask";
import OrangeTask from "./task/OrangeTask";
import GreenTask from "./task/GreenTask";
import { Accordion, Stack } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { api } from "../services/axios";
import SubjectService, { CreateSubject } from "../services/subject";
import CadeiraModalAtt from "./modal/att/CadeiraModalAtt";
import { Activity, Subjects } from "../util/types";
import ActivityService from "../services/activity";

interface Props {
  cadeira: Subjects
  refetch: () => void
}

export default function CadeiraWithActivites(props: Props) {

  const [atividades, setAtividades] = useState<Activity[]>([]);

  useEffect(() => {
    ActivityService.findBySubject(props.cadeira.id).then(activities => {
      setAtividades(activities)
      console.log(activities)
    });
  }, []);

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Stack direction="horizontal" gap={3} className={style.cadeiraColor}>
            <div className={style.logoCadeira}></div>
            <h4>{props.cadeira.nome}</h4>
          </Stack>
        </Accordion.Header>
        <Accordion.Body className={style.cadeiraColor}>
          <div className="d-flex justify-content-start  mb-2">
            <CadeiraModalAtt cadeira={props.cadeira} refetch={props.refetch}></CadeiraModalAtt>
          </div>
          <div className="d-flex justify-content-start  mb-2">
            <PurpleButton
              Title="EXCLUIR"
              onClick={() => SubjectService.delete(props.cadeira.id).then(() => props.refetch())}
            >
            </PurpleButton>
          </div>
          {atividades.map((atividade, index) => {
            if (atividade.type === "ACTIVITY") {
              return (
                <OrangeTask key={index} activity={atividade}></OrangeTask>
              )
            } else if (atividade.type === "PRESENTATION") {
              return (
                <RedTask key={index} activity={atividade}></RedTask>
              )
            } else {
              <GreenTask key={index} activity={atividade}></GreenTask>
            }
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

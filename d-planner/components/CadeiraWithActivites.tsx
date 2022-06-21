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
import { Subjects } from "../util/types";

interface Props {
  cadeira: Subjects
  refetch: () => void
}

export default function CadeiraWithActivites(props: Props) {

  const [atividades, setAtividades] = useState<[]>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.get(`/activity/listBySubject/${props.cadeira.id}`, {
      headers: {
        'Authorization': `${token}`
      }
    }).then(result => {
      setAtividades(result.data)
      console.log(result.data)
    });
  }, []);

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Stack direction="horizontal" gap={3} className={style.cadeiraColor}>
            <div className={style.logoCadeira}></div>
            <h4>{props.cadeira.name}</h4>
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
          {atividades?.map((atividade, index) => {
            if (atividade?.type == 1) {
              return (
                <OrangeTask key={index}></OrangeTask>
              )
            } else if (atividade.type == 2) {
              return (
                <RedTask key={index}></RedTask>
              )
            } else {
              <GreenTask key={index}></GreenTask>
            }
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

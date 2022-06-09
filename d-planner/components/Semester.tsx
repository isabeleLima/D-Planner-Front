import { useEffect, useState } from "react";
import style from "../styles/Semester.module.scss";
import Image from "next/image";
import BlueButton from "./buttons/BlueButton";
import { Container, Accordion, Stack } from "react-bootstrap";
import CadeiraWithActivites from "./CadeiraWithActivites";
import { api } from "../pages/service/axios";


export default function Semester(props: any) {
  const [cadeiras, setCadeiras] = useState<any[] | null>([])

  useEffect(() => {
    const token = localStorage.getItem("token");

    api.get(`/subject`, {
      headers: {
        'Authorization': `${token}`
      },
      params: {
        'semesterId': props.semester.id
      }
    }).then(result => {
      setCadeiras(result?.data)

      console.log(result.data)
    })
  }, [])

  return (
    <Accordion defaultActiveKey="0" flush className={"mb-2 "}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Stack direction="horizontal" gap={3} className={style.semesterColor}>
            <div className={style.logoCalendar}></div>
            <h4>{props.semester.nome}</h4>
            <h6 className="d-none d-sm-block">{props.semester.start} - {props.semester.end}</h6>
          </Stack>
        </Accordion.Header>
        <Accordion.Body className={style.semesterColor}>
          <h6 className="d-block d-sm-none">{props.semester.start} - {props.semester.end}</h6>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton Title="EDITAR"></BlueButton>
          </div>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton Title="EXCLUIR"></BlueButton>
          </div>
          {cadeiras?.map(cadeira => (
            <CadeiraWithActivites
              key={cadeira.id}
              cadeira={cadeira}
            ></CadeiraWithActivites>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

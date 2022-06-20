import { useEffect, useState } from "react";
import style from "../styles/Semester.module.scss";
import Image from "next/image";
import BlueButton from "./buttons/BlueButton";
import { Container, Accordion, Stack } from "react-bootstrap";
import CadeiraWithActivites from "./CadeiraWithActivites";
import { api } from "../services/axios";
import SemestreModalAtt from "./modal/att/SemestreModalAtt";
import { Semester as Sem } from "../util/types";
import SemesterService from "../services/semester";

interface Props {
  semester: Sem
  refetch: () => void
}

export default function Semester(props: Props) {
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
            <h6 className="d-none d-sm-block">{props.semester.dataDeInicio} - {props.semester.dataDeFim}</h6>
          </Stack>
        </Accordion.Header>
        <Accordion.Body className={style.semesterColor}>
          <h6 className="d-block d-sm-none">{props.semester.dataDeInicio} - {props.semester.dataDeFim}</h6>
          <div className="d-flex justify-content-start  mb-2">
            <SemestreModalAtt></SemestreModalAtt>
          </div>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton
              Title="EXCLUIR"
              onClick={() => SemesterService.delete(props.semester.id).then(() => props.refetch())}
            >
            </BlueButton>
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

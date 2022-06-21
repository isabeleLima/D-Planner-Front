import { useEffect, useState } from "react";
import style from "../styles/Semester.module.scss";
import Image from "next/image";
import BlueButton from "./buttons/BlueButton";
import { Container, Accordion, Stack } from "react-bootstrap";
import CadeiraWithActivites from "./CadeiraWithActivites";
import { api } from "../services/axios";
import SemestreModalAtt from "./modal/att/SemestreModalAtt";
import { Semester as Sem, Subjects } from "../util/types";
import SemesterService from "../services/semester";
import moment from "moment";
import SubjectService from "../services/subject";

interface Props {
  semester: Sem
  refetch: () => void
}

export default function Semester(props: Props) {
  const [cadeiras, setCadeiras] = useState<Subjects[]>([])

  const fetch = () => {
    SubjectService.findBySemesterId(props.semester.id).then(setCadeiras)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Accordion defaultActiveKey="0" flush className={"mb-2 "}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Stack direction="horizontal" gap={3} className={style.semesterColor}>
            <div className={style.logoCalendar}></div>
            <h4>{props.semester.nome}</h4>
            <h6 className="d-none d-sm-block">
              {moment.utc(props.semester.dataDeInicio).format("DD-MM-yyyy")}
              {" - "}
              {moment.utc(props.semester.dataDeFim).format("DD-MM-yyyy")}
            </h6>
          </Stack>
        </Accordion.Header>
        <Accordion.Body className={style.semesterColor}>
          <h6 className="d-block d-sm-none">
            {moment.utc(props.semester.dataDeInicio).format("DD-MM-yyyy")}
            {" - "}
            {moment.utc(props.semester.dataDeFim).format("DD-MM-yyyy")}
          </h6>
          <div className="d-flex justify-content-start  mb-2">
            <SemestreModalAtt semester={props.semester} refetch={props.refetch} />
          </div>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton
              Title="EXCLUIR"
              onClick={() => SemesterService.delete(props.semester.id).then(() => props.refetch())}
            >
            </BlueButton>
          </div>
          {cadeiras.map(cadeira => (
            <CadeiraWithActivites
              key={cadeira.id}
              cadeira={cadeira}
              refetch={fetch}
            ></CadeiraWithActivites>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

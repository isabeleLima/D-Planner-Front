import style from "../styles/Semester.module.scss";
import Image from "next/image";
import BlueButton from "./buttons/BlueButton";
import Cadeira from "./Cadeira";
import { Container, Accordion, Stack } from "react-bootstrap";

export default function Semester() {
  return (
    <Accordion defaultActiveKey="0" flush className={"mb-2 "}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Stack direction="horizontal" gap={3} className={style.semesterColor}>
            <div className={style.logoCalendar}></div>
            <h4>SEMESTRE</h4>
            <h6 className="d-none d-sm-block">14/03/2020 - 17/06/2020</h6>
          </Stack>
        </Accordion.Header>
        <Accordion.Body className={style.semesterColor}>
        <h6 className="d-block d-sm-none">14/03/2020 - 17/06/2020</h6>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton Title="EDITAR"></BlueButton>
          </div>
          <div className="d-flex justify-content-start  mb-2">
            <BlueButton Title="EXCLUIR"></BlueButton>
          </div>
        <Cadeira></Cadeira>
        <Cadeira></Cadeira>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

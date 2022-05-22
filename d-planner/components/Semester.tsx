import style from "../styles/Semester.module.scss";
import Image from "next/image";
import BlueButton from "./buttons/BlueButton";
import { Container, Accordion, Stack } from "react-bootstrap";

export default function Semester() {
  return (
    <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="1" >
        <Accordion.Header >
          <Stack direction="horizontal" gap={3} className={style.semesterColor}>
            <div className="d-flex justify-content-start logoCalendar"></div>
            <h4>SEMESTRE</h4>
            <h6>dd/mm/aaaa - dd/mm/aaaa</h6>
          </Stack>
        </Accordion.Header>
        <Accordion.Body>
        <div className="d-flex justify-content-start  mb-2">
        <BlueButton Title="EDITAR"></BlueButton>
        </div>
        <div className="d-flex justify-content-start  mb-2">
        <BlueButton Title="EXCLUIR"></BlueButton>
        </div>
          
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

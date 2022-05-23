import style from "../styles/Cadeira.module.scss";
import Image from "next/image";
import PurpleButton from "./buttons/PurpleButton";
import { Container, Accordion, Stack } from "react-bootstrap";
import Link from 'next/link'
export default function Cadeira(props:any) {
  return (
    <Link href="/home" passHref>
      <Accordion defaultActiveKey="0" flush className={"mb-2 "}>
        <Accordion.Item eventKey={props.event}>
          <Accordion.Header>
            <Stack direction="horizontal" gap={3} className={style.cadeiraColor}>
              <div className={style.logoCadeira}></div>
              <h4>Programação Web</h4>
              <h6 className="d-none d-sm-block">14/03/2020 - 17/06/2020</h6>
            </Stack>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    </Link>
  );
}

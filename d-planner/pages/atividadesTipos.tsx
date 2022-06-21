import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Header from "../components/Header";
import style from "../styles/Calendar.module.scss";
import atividades from "../styles/AtividadeTipos.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function atividadeTipo() {
  return (
    <Container fluid className={"p-0 "}>
      <Header></Header>

      <Container className={"pb-4 mt-4 " + style.calendar}>
        <Row>
          <Col className={"col-12 pt-4 rounded-top " + style.topGreen}>
            <div className="d-flex justify-content-center bg-light h-75 w-75 mx-auto rounded"></div>
          </Col>
        </Row>
        {/* apresentação */}
        <Row className={"mt-3"}>
          <Col className={"col-12 col-md-6 mt-2 " + atividades.cursor}>
            <Link href="/apresentacao" passHref>
              <Row>
                <div className="d-block col-4 col-md-3 col-sm-4 ">
                  <Image
                    src="/atvApresentacao.png"
                    alt="Login Picture"
                    width={100}
                    height={100}
                  />
                </div>
                <Col className={"col-6 col-md-7 col-sm-6 "}>
                  <Stack
                    direction="vertical"
                    gap={2}
                    className={" ms-3 " + atividades.apresentacao}
                  >
                    <h3>APRESENTAÇÃO</h3>
                    <p>
                      num tendi nada.Cevadis im ampola pa arma uma
                      pindureta.Leite de capivaris,
                    </p>
                  </Stack>{" "}
                </Col>
              </Row>
            </Link>
          </Col>
          {/* atividade */}
          <Col className={"col-12 col-md-6 mt-2 " + atividades.cursor}>
            <Link href="/atividade" passHref>
              <Row>
                <div className="d-block col-4 col-md-3 col-sm-4 ">
                  <Image
                    src="/atvAtividade.png"
                    alt="Login Picture"
                    width={100}
                    height={100}
                  />
                </div>
                <Col className={"col-6 col-md-7 col-sm-6 "}>
                  <Stack
                    direction="vertical"
                    gap={2}
                    className={" ms-3 " + atividades.atividade}
                  >
                    <h3>ATIVIDADE</h3>
                    <p>
                      num tendi nada.Cevadis im ampola pa arma uma
                      pindureta.Leite de capivaris,
                    </p>
                  </Stack>{" "}
                </Col>
              </Row>
            </Link>
          </Col>
          {/* avaliação */}
          <Col className={"col-12 col-md-6 mt-2 " + atividades.cursor}>
            <Link href="/avaliacao" passHref>
              <Row>
                <div className="d-block col-4 col-md-3 col-sm-4 ">
                  <Image
                    src="/atvAvaliacao.png"
                    alt="Login Picture"
                    width={75}
                    height={90}
                  />
                </div>
                <Col className={"col-6 col-md-7 col-sm-6 "}>
                  <Stack
                    direction="vertical"
                    gap={2}
                    className={" ms-3 " + atividades.avaliacao}
                  >
                    <h3>AVALIAÇÃO</h3>
                    <p>
                      num tendi nada.Cevadis im ampola pa arma uma
                      pindureta.Leite de capivaris,
                    </p>
                  </Stack>{" "}
                </Col>
              </Row>
            </Link>
          </Col>

          {/* historico */}
          <Col className={"col-12 col-md-6 mt-2 " + atividades.cursor}>
            <Link href="/historico" passHref>
              <Row>
                <div className="d-block col-4 col-md-3 col-sm-4 ">
                  <Image
                    src="/historico.png"
                    alt="Login Picture"
                    width={100}
                    height={100}
                  />
                </div>
                <Col className={"col-6 col-md-7 col-sm-6 "}>
                  <Stack
                    direction="vertical"
                    gap={2}
                    className={" ms-3 " + atividades.historico}
                  >
                    <h3>HISTÓRICO</h3>
                    <p>
                      num tendi nada.Cevadis im ampola pa arma uma
                      pindureta.Leite de capivaris,
                    </p>
                  </Stack>{" "}
                </Col>
              </Row>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

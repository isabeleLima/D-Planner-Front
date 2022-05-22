import { Col, Container, Row, Stack, Form } from "react-bootstrap";
import Image from "next/image";
import style from "../styles/Cadastro.module.scss";
import WhiteButton from "../components/buttons/WhiteButton";
import TextInput from "../components/inputs/TextInput";
export default function Cadastro() {
    return (
        <Container fluid className={"justify-content " + style.Container}>
          <Row className="h-100">
            <Col className="col-7 d-none d-md-block">
              <Stack
                direction="vertical"
                className={" col-7 mx-auto text-center " + style.ApresentationRegister}
                gap={2}
              >
                <Image
                  src="/../public/3573382.jpg"
                  alt="Login Picture"
                  width={411}
                  height={400}
                />
                <h1>D-PLANNER</h1>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
                  paradis? Toma um mé que o mundo vai girarzis!Quem num gosta di mim
                  que vai caçá
                </p>
              </Stack>
            </Col>
            <Col
              className={
                "col-md-5 col-sm-12 justify-content-center mx-auto h-100 " +
                style.FormBackground
              }
            >
              <div className="mt-auto mb-5 d-flex justify-content-center">
                <Image
                  src="/../public/logo.png"
                  alt="Login Picture"
                  width={150}
                  height={150}
                  className={"mt-4 " + style.logoForm}
                />
              </div>
              <Form className="mt-3 p-5 ">
              <div className="mt-auto mb-5 d-flex justify-content-center">
                  {" "}
                  <TextInput id="fullName" type="text" placeholder="NOME COMPLETO">
                    {" "}
                  </TextInput>
                </div>
                <div className="mt-auto mb-5 d-flex justify-content-center">
                  {" "}
                  <TextInput id="userName" type="text" placeholder="USERNAME">
                    {" "}
                  </TextInput>
                </div>
                <div className="mt-auto mb-5 d-flex justify-content-center">
                  {" "}
                  <TextInput id="email" type="text" placeholder="EMAIL">
                    {" "}
                  </TextInput>
                </div>
                <div className="mt-auto mb-5 d-flex justify-content-center">
                  <TextInput id="senha" type="password" placeholder="PASSWORD">
                    {" "}
                  </TextInput>
                </div>
                <WhiteButton Title="CADASTRAR"> </WhiteButton>
              </Form>
             
            </Col>
          </Row>
        </Container>
      );
}
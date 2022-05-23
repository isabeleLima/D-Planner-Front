import Image from "next/image";
import { useState } from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import WhiteButton from "../components/buttons/WhiteButton";
import TextInput from "../components/inputs/TextInput";
import logo from "../public/logo.png";
import AuthService from "../services/auth";
import style from "../styles/Cadastro.module.scss";
import { useRouter } from "next/router";

export default function Cadastro() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();

    const { error, user } = await AuthService.signUp({
      email,
      password,
      fullname,
      username,
    });

    console.log({ error, user });

    if (!error && user) {
      router.push("/home");
    }
  };

  return (
    <Container fluid className={"justify-content " + style.Container}>
      <Row className="h-100">
        <Col className="col-7 d-none d-md-block">
          <Stack
            direction="vertical"
            className={
              " col-7 mx-auto text-center " + style.ApresentationRegister
            }
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
              src={logo}
              alt="Login Picture"
              width={150}
              height={150}
              className={"mt-4 " + style.logoForm}
            />
          </div>
          <Form className="mt-3 p-5 " onSubmit={handleSubmit}>
            <div className="mt-auto mb-5 d-flex justify-content-center">
              <TextInput
                id="fullName"
                type="text"
                placeholder="NOME COMPLETO"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
              />
            </div>
            <div className="mt-auto mb-5 d-flex justify-content-center">
              <TextInput
                id="userName"
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-auto mb-5 d-flex justify-content-center">
              <TextInput
                id="email"
                type="text"
                placeholder="EMAIL"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-auto mb-5 d-flex justify-content-center">
              <TextInput
                id="senha"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <WhiteButton Title="CADASTRAR" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

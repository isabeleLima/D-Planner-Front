import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Form, Row, Stack,Alert } from "react-bootstrap";
import WhiteButton from "../components/buttons/WhiteButton";
import TextInput from "../components/inputs/TextInput";
import { useAuth } from "../contexts/AuthContext";
import logo from "../public/logo.png";
import style from "../styles/Login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const { signIn } = useAuth();

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault();

    const { user, error } = await signIn({ email, password });

    console.log({ user, error });

    if (!error && user) {
      router.push("/home");
    }else{
      setAlert(true);
      const timer = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <Container fluid className={"justify-content " + style.Container}>
      <Row className={"justify-content " + style.Container}>
        <Col className="col-7 d-none d-md-block">
          <Stack
            direction="vertical"
            className={" col-7 mx-auto text-center " + style.ApresentationLogin}
            gap={2}
          >
            <Image
              src="/../public/login.png"
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
            <Alert variant='danger' show={alert}>
            lOGIN OU SENHA INCORRETOS
          </Alert>
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
              {" "}
              <TextInput
                id="email"
                type="text"
                placeholder="EMAIL"
                value={email}
                onChange={e => setEmail(e.target.value)}
              >
                {" "}
              </TextInput>
            </div>
            <div className="mt-auto mb-5 d-flex justify-content-center">
              <TextInput
                id="senha"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={e => setPassword(e.target.value)}
              >
                {" "}
              </TextInput>
            </div>
            <WhiteButton Title="LOGIN"> </WhiteButton>
          </Form>

          <div className="mt-auto d-flex justify-content-center">
            <p>
              Não tem uma conta?{" "}
              <Link href="/cadastro">
                <a className={"mb-5 " + style.FormBackgroundLink}>
                  Cadastre-se
                </a>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

import style from "../../styles/Header.module.scss";
import Image from "next/image";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Header() {
  const { user } = useAuth()
  
  const {asPath} = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className={"p-0"}>
      <Container>
        <Navbar.Brand href="/home">
          {" "}
          <Image
            src="/logo.png"
            alt="Login Picture"
            width={45}
            height={45}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" className={asPath == "/home" ? "active" : ""}>HOME</Nav.Link>
            <Nav.Link href="/semesters" className={asPath == "/semesters" ? "active" : ""}>SEMESTRE</Nav.Link>
            <Nav.Link href="/cadeiras" className={asPath == "/cadeiras" ? "active" : ""}>CADEIRA</Nav.Link>
            <Nav.Link href="/atividadesTipos" className={asPath == "/atividadesTipos" ? "active" : ""}>ATIVIDADES</Nav.Link>
            {user && <NavDropdown title={user.nome} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair
              </NavDropdown.Item>
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import style from "../../styles/Header.module.scss";
import Image from "next/image";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../public/logo.png'
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth()

  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className={"p-0"}>
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Image
            src={logo}
            alt="Login Picture"
            width={45}
            height={45}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">SEMESTRE</Nav.Link>
            <Nav.Link href="#pricing">CADEIRA</Nav.Link>
            <Nav.Link href="#pricing">ATIVIDADES</Nav.Link>
            {user && <NavDropdown title={user.fullname} id="collasible-nav-dropdown">
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

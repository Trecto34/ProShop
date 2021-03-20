import { Navbar, Nav, Container, Row } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>ProShop</Navbar.Brand>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/cart">
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </Link>

              <Link href="/login">
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

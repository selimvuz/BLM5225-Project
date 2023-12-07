import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bs-body-color">
            <Container fluid>
                <Navbar.Brand href="#" className='text-light'>Veri Tabanı Sistemi</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-light'>Ana Sayfa</Nav.Link>
                        <Nav.Link href="#action2" className='text-light'>Yeni Veri</Nav.Link>
                        <NavDropdown style={{ color: 'white' }} title="Kullanıcı" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Giriş</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Kayıt
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Profil
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled className='text-light'>
                            Proje Hakkında
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Arama"
                            className="me-2"
                            aria-label="Arama"
                        />
                        <Button variant="outline-success">Ara</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
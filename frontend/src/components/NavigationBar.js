import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';

function NavigationBar() {
    const [showLoginBox, setShowLoginBox] = useState(false);
    const [loginBoxPosition, setLoginBoxPosition] = useState({ top: 0, left: 0 });
    const [showRegisterBox, setShowRegisterBox] = useState(false);
    const [registerBoxPosition, setRegisterBoxPosition] = useState({ top: 0, left: 0 });

    const handleLoginClick = (e) => {
        e.stopPropagation();
        const dropdownButton = e.currentTarget;
        const rect = dropdownButton.getBoundingClientRect();
        const position = {
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
        };
        setLoginBoxPosition(position);
        setShowLoginBox(!showLoginBox);
    };

    const handleLoginClickRegister = (e) => {
        e.stopPropagation();
        const dropdownButton = e.currentTarget;
        const rect = dropdownButton.getBoundingClientRect();
        const position = {
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
        };
        setRegisterBoxPosition(position);
        setShowRegisterBox(!showRegisterBox);

    }

    useEffect(() => {
        const closeLoginBox = () => {
            setShowLoginBox(false);
        };

        // Add event listener to close the login box when clicking outside
        document.body.addEventListener('click', closeLoginBox);

        // Remove the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('click', closeLoginBox);
        };
    }, []);

    useEffect(() => {
        const closeRegisterBox = () => {
            setShowRegisterBox(false);
        };

        // Add event listener to close the login box when clicking outside
        document.body.addEventListener('click', closeRegisterBox);

        // Remove the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('click', closeRegisterBox);
        };
    }, []);

    return (
        <div>
            <Navbar expand="lg" className="bs-body-color">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-dark'>Veri Tabanı Sistemi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className='text-dark'>Ana Sayfa</Nav.Link>
                            <Nav.Link href="#action2" className='text-dark'>Yeni Veri</Nav.Link>
                            <NavDropdown style={{ color: 'white' }} title="Kullanıcı" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="nav-dropdown-item" onClick={handleLoginClick}>
                                    Giriş Yap
                                </NavDropdown.Item>
                                {showLoginBox && (
                                    <div
                                        className="login-overlay"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowLoginBox(false);
                                        }}
                                        style={{ top: loginBoxPosition.top, left: loginBoxPosition.left }}
                                    >
                                        <div>
                                            <Login />
                                        </div>
                                    </div>
                                )}
                                <NavDropdown.Item className="nav-dropdown-item" onClick={handleLoginClickRegister}>
                                    Kayıt Ol
                                </NavDropdown.Item>
                                {showRegisterBox && (
                                    <div
                                        className="register-overlay"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowRegisterBox(false);
                                        }}
                                        style={{ top: registerBoxPosition.top, left: registerBoxPosition.left }}
                                    >
                                        <div>
                                            <Register />
                                        </div>
                                    </div>
                                )}
                            </NavDropdown>
                            <Nav.Link href="#" disabled className='text-dark'>
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
        </div>
    );
}

export default NavigationBar;
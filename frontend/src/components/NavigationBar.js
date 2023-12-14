import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Nav.css";
import React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import Register from './Register';

function NavigationBar() {
    const [showLoginBox, setShowLoginBox] = useState(false);
    const [loginBoxPosition, setLoginBoxPosition] = useState({ top: 0, left: 0 });
    const [showRegisterBox, setShowRegisterBox] = useState(false);
    const [registerBoxPosition, setRegisterBoxPosition] = useState({ top: 0, left: 0 });
    const authToken = localStorage.getItem('authToken');
    const [authenticated, setAuthenticated] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    const searchBoxRef = useRef(null);
    const [searchResultsStyle, setSearchResultsStyle] = useState({});
    const searchResultsRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Arama fonksiyonunu kullanabilmek için lütfen giriş yapın.
        </Tooltip>
    );

    useEffect(() => {
        if (!authenticated) {
            // Delay showing the tooltip until after the component has rendered
            const timer = setTimeout(() => {
                setShowTooltip(true);
            }, 1000); // Adjust time as needed

            return () => clearTimeout(timer);
        }
    }, [authenticated]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setSearchResults([]); // This clears the search results, effectively hiding them
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchResultsRef]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/data/search?query=${encodeURIComponent(searchTerm)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const text = await response.text();
            try {
                const data = JSON.parse(text);
                setSearchResults(data);
            } catch (jsonError) {
                console.error('Error parsing JSON:', jsonError, 'Response:', text);
            }
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        }

        if (searchBoxRef.current) {
            const rect = searchBoxRef.current.getBoundingClientRect();
            setSearchResultsStyle({
                top: `${rect.bottom + window.scrollY}px`,
                left: `${rect.left + window.scrollX}px`,
                width: `${rect.width}px`
            });
        }
    };

    function clearJwt() {
        localStorage.removeItem('authToken');
    }

    function reloadPage() {
        window.location.reload();
    }

    function logout() {
        clearJwt();
        reloadPage();
    }

    useEffect(() => {
        const validateToken = async () => {
            try {
                if (authToken) {
                    // Send the token to the server for validation
                    const response = await fetch('http://localhost:3001/auth/validateToken', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${authToken}`
                        },
                    });

                    if (response.ok) {
                        // Token is valid
                        setAuthenticated(true);
                    } else {
                        // Token is invalid or expired
                        setAuthenticated(false);
                    }
                } else {
                    // No token found, user is not authenticated
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setAuthenticated(false);
            }
        };

        validateToken();
    }, [authToken]);

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
        setShowRegisterBox(false);
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
        setShowLoginBox(false);
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
                            <LinkContainer to="/">
                                <Nav.Link className='text-dark'>Ana Sayfa</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/data">
                                <Nav.Link className='text-dark'>Veri Ekle</Nav.Link>
                            </LinkContainer>
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
                                {authenticated ? (
                                    <NavDropdown.Item className="nav-dropdown-item" onClick={logout}>
                                        Çıkış Yap
                                    </NavDropdown.Item>
                                ) : null
                                }
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
                            <LinkContainer to="/about">
                                <Nav.Link className='text-dark'>Proje Hakkında</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={renderTooltip}
                                show={!authenticated && showTooltip}
                            >
                                <Form.Control
                                    type="search"
                                    ref={searchBoxRef}
                                    placeholder="Model Ara"
                                    className="me-2"
                                    aria-label="Arama"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    disabled={!authenticated}
                                />
                            </OverlayTrigger>
                            <Button variant="outline-success" type="submit">Ara</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {searchResults.length > 0 && (
                <div className="search-results-container" style={searchResultsStyle} ref={searchResultsRef}>
                    {
                        searchResults.slice(0, 10).map((result, index) => ( // Only take the first 5 results
                            <div key={index} className="search-result-row">
                                <p className='searchText'>{result.ModelName}</p>
                            </div>
                        ))
                    }
                </div>
            )
            }
        </div >
    );
}

export default NavigationBar;
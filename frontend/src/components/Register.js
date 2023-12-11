import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import "./Register.css";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Registration successful, you may want to redirect or show a success message
                console.log('Registration successful');
            } else {
                // Registration failed, handle errors
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    return (
        <div>
            <div className="register-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="register-box">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email adresi" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                Bilginizi kimseyle paylaşmayacağız.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="checkTerms" type="checkbox" label="Kural ve koşulları kabul ediyorum." />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#D1E7DD', color: 'black' }} variant="primary" type="submit" onClick={handleRegister}>
                            Kayıt
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
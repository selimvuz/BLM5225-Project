import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();

                // Login successful
                setLoginStatus({ type: 'success', message: 'Giriş başarılı' });

                // Set the token in local storage
                localStorage.setItem('authToken', data.token);
                setTimeout(() => { window.location.reload(); }, 1000);
            } else {
                // Login failed
                setLoginStatus({ type: 'warning', message: 'Giriş başarısız' });
            }
        } catch (error) {
            console.error('Giriş sırasında hata:', error);
            setLoginStatus({ type: 'warning', message: 'Bir şeyler ters gitti.' });
        }
    };

    return (
        <div>
            <div className="login-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="login-box">
                    {loginStatus && (
                        <Alert variant={loginStatus.type} onClose={() => setLoginStatus(null)} dismissible>
                            {loginStatus.message}
                        </Alert>
                    )}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email adresi"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                Bilginizi kimseyle paylaşmayacağız.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="checkB" type="checkbox" label="Beni hatırla" />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#D1E7DD', color: 'black' }} variant="primary" type="submit">
                            Giriş
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;

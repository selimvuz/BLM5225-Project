import { Form, Button } from 'react-bootstrap';
import "./Login.css";

function Login() {
    return (
        <div>
            <div className="login-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="login-box">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email adresinizi girin" />
                            <Form.Text className="text-muted">
                                Bilginizi kimseyle paylaşmayacağız.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" placeholder="Şifrenizi girin" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="checkB" type="checkbox" label="Beni hatırla" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Giriş
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
import { Form, Button } from 'react-bootstrap';
import "./Register.css";

function Register() {
    return (
        <div>
            <div className="register-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="register-box">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email adresi" />
                            <Form.Text className="text-muted">
                                Bilginizi kimseyle paylaşmayacağız.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" placeholder="Şifre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="checkB" type="checkbox" label="Beni hatırla" />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#D1E7DD', color: 'black' }} variant="primary" type="submit">
                            Kayıt
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
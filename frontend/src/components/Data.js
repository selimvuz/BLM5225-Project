import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Data.css';

const Data = () => {
    const [selectedTable, setSelectedTable] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [formData, setFormData] = useState({});

    const authToken = localStorage.getItem('authToken');

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.location.reload();

        // Prepare the data to be sent
        const payload = {
            table: selectedTable, // This is the table name, e.g., 'Customer', 'Dealer', etc.
            data: formData         // This is the data to be inserted into the table
        };

        try {
            const response = await fetch('http://localhost:3001/newData/enter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authorization headers if needed
                },
                body: JSON.stringify(payload) // Send the payload as JSON
            });

            if (response.ok) {
                // Handle successful submission
                const responseBody = await response.json();
                console.log('Data submitted successfully', responseBody);
                // Reset form or provide user feedback
            } else {
                // Handle errors
                const errorText = await response.text();
                console.log('Submission failed:', errorText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


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

    const handleTableChange = (event) => {
        setSelectedTable(event.target.value);
    };

    const renderFormFields = () => {
        switch (selectedTable) {
            case 'Müşteri':
                return (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>CustomerName</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="CustomerName" placeholder="Müşteri Adı" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ContactInfo</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="ContactInfo" placeholder="Müşteri İletişim" />
                        </Form.Group>
                    </>
                );
            case 'Satıcı':
                return (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>DealerName</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="DealerName" placeholder="Satıcı Adı" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="Location" placeholder="Konum" />
                        </Form.Group>
                    </>
                );
            case 'Araba':
                return (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>BrandName</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="Marka" placeholder="Marka" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ModelName</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="Model" placeholder="Model" />
                        </Form.Group>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {authenticated ? (
                <Container className="mt-4 d-flex justify-content-center">
                    <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
                        <h1 className="text-center">Veri Ekle</h1>
                        <p className="text-center">Verilerin ekleneceği tabloyu seçin.</p>
                        <Form.Group className="mb-3">
                            <Form.Label>Tablo seç</Form.Label>
                            <Form.Select value={selectedTable} onChange={handleTableChange}>
                                <option value="Seçim">Seçim</option>
                                <option value="Müşteri">Müşteri</option>
                                <option value="Satıcı">Satıcı</option>
                                <option value="Araba">Araba</option>
                            </Form.Select>
                        </Form.Group>
                        {renderFormFields()}
                        <div className="text-center">
                            <Button className='dataButton' variant="outline-success" type="submit">Ekle</Button>
                        </div>
                    </Form>
                </Container>
            ) : (
                <h1 style={{ color: '#D1E7DD', marginTop: "48px" }}>Kullanıcı girişi gerekli.</h1>
            )}
        </>
    );
}

export default Data;
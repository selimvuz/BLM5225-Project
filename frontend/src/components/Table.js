import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function DBTable() {
    const authToken = localStorage.getItem('authToken');

    const [tableData, setTableData] = useState([]);
    const [tableDataTwo, setTableDataTwo] = useState([]);
    const [tableDataThree, setTableDataThree] = useState([]);
    const [tableDataFour, setTableDataFour] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);

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
    }, []);

    useEffect(() => {
        // Fetch data from your server only when authenticated
        if (authenticated) {
            fetchDataFromServer1();
            fetchDataFromServer2();
            fetchDataFromServer3();
            fetchDataFromServer4();
        }
    }, [authenticated]);

    const fetchDataFromServer1 = async () => {
        try {
            const response = await fetch('http://localhost:3001/database/api/data1', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            });
            const data = await response.json();
            setTableData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer2 = async () => {
        try {
            const response = await fetch('http://localhost:3001/database/api/data2', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            });
            const data = await response.json();
            setTableDataTwo(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer3 = async () => {
        try {
            const response = await fetch('http://localhost:3001/database/api/data3', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            });
            const data = await response.json();
            setTableDataThree(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer4 = async () => {
        try {
            const response = await fetch('http://localhost:3001/database/api/data4', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
            });
            const data = await response.json();
            setTableDataFour(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const tableContainerStyle = {
        margin: '7em 10em 50px 10em',
    };

    const tableStyle = {
        maxHeight: '300px', // Set the maximum height for each table
        overflowY: 'scroll', // Add a vertical scrollbar when content exceeds the height
        marginBottom: '7vh',
    };

    return (
        <div style={tableContainerStyle}>
            {authenticated ? (
                <div className='row'>
                    <div className='col-md-6'>
                        <div style={tableStyle}>
                            <Table className="table table-hover" responsive="xl" style={{ marginBottom: '0' }}>
                                <thead className='table-success'>
                                    <tr>
                                        <th>Model ID</th>
                                        <th>Model</th>
                                        <th>Marka ID</th>
                                        <th>Marka</th>
                                    </tr>
                                </thead>
                                <tbody className="table-light">
                                    {tableData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.ModelID}</td>
                                            <td>{row.ModelName}</td>
                                            <td>{row.BrandID}</td>
                                            <td>{row.BrandName}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div style={tableStyle}>
                            <Table className="table table-hover" responsive="xl" style={{ marginBottom: '0' }}>
                                <thead className='table-success'>
                                    <tr>
                                        <th>Müşteri ID</th>
                                        <th>Müşteri Adı</th>
                                        <th>İletişim</th>
                                    </tr>
                                </thead>
                                <tbody className="table-light">
                                    {tableDataTwo.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.CustomerID}</td>
                                            <td>{row.CustomerName}</td>
                                            <td>{row.ContactInfo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div style={tableStyle}>
                            <Table className="table table-hover" responsive="xl" style={{ marginBottom: '0' }}>
                                <thead className='table-success'>
                                    <tr>
                                        <th>Satıcı ID</th>
                                        <th>Satıcı Adı</th>
                                        <th>Konum</th>
                                    </tr>
                                </thead>
                                <tbody className="table-light">
                                    {tableDataThree.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.DealerID}</td>
                                            <td>{row.DealerName}</td>
                                            <td>{row.Location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div style={tableStyle}>
                            <Table className="table table-hover" responsive="xl" style={{ marginBottom: '0' }}>
                                <thead className='table-success'>
                                    <tr>
                                        <th>Araç Numarası</th>
                                        <th>Model ID</th>
                                        <th>Satıcı ID</th>
                                        <th>Müşteri ID</th>
                                    </tr>
                                </thead>
                                <tbody className="table-light">
                                    {tableDataFour.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.VIN}</td>
                                            <td>{row.ModelID}</td>
                                            <td>{row.DealerID}</td>
                                            <td>{row.CustomerID ? row.CustomerID : "Yok"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 style={{ color: '#D1E7DD' }}>Kullanıcı girişi gerekli.</h1>
            )}
        </div>
    );
}

export default DBTable;
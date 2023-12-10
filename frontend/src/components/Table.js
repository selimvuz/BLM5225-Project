import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function DBTable() {
    const [tableData, setTableData] = useState([]);
    const [tableDataTwo, setTableDataTwo] = useState([]);
    const [tableDataThree, setTableDataThree] = useState([]);
    const [tableDataFour, setTableDataFour] = useState([]);

    useEffect(() => {
        // Fetch data from your server
        fetchDataFromServer1();
        fetchDataFromServer2();
        fetchDataFromServer3();
        fetchDataFromServer4();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const fetchDataFromServer1 = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data1');
            const data = await response.json();
            setTableData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer2 = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data2');
            const data = await response.json();
            setTableDataTwo(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer3 = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data3');
            const data = await response.json();
            setTableDataThree(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDataFromServer4 = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data4');
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
        </div>
    );
}

export default DBTable;
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function DBTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch data from your server
        fetchDataFromServer();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const fetchDataFromServer = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data');
            const data = await response.json();
            setTableData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={{ margin: "30px 30em 30px 30em" }}>
            <Table className="table table-hover" responsive="xl" style={{ marginBottom: "50px" }}>
                <thead className='table-success'>
                    <tr>
                        <th>Marka ID</th>
                        <th>Marka</th>
                        <th>Model ID</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.BrandID}</td>
                            <td>{row.BrandName}</td>
                            <td>{row.ModelID}</td>
                            <td>{row.ModelName}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table className="table table-hover" responsive="xl" style={{ marginBottom: "50px" }}>
                <thead className='table-success'>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <Table className="table table-hover" responsive="xl" style={{ marginBottom: "50px" }}>
                <thead className='table-success'>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <Table className="table table-hover" responsive="xl" style={{ marginBottom: "50px" }}>
                <thead className='table-success'>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default DBTable;
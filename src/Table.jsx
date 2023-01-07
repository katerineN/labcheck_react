import React, { useState } from 'react';
import Form from './Form';
import jsonData from './data.json';
import './formStyle.css'

function TableData() {
    const [formData, setFormData] = useState(jsonData);

    const tableRows = formData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.nameSt}</td>
                <td>{info.task1}</td>
                <td>{info.task2}</td>
                <td>{info.task3}</td>
                <td>{info.task4}</td>
                <td>{info.points}</td>
                <td>{info.avgPoints}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalStudents = formData.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...formData];
        updatedStudentData.push(data);
        setFormData(updatedStudentData);
    };

    return (
        <div>
            <Form func={addRows} />

            <table className="table table-stripped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ФИ</th>
                    <th>Задание №1</th>
                    <th>Задание №2</th>
                    <th>Задание №3</th>
                    <th>Задание №4</th>
                    <th>Баллы</th>
                    <th>Средний балл</th>
                </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
}

export default TableData;

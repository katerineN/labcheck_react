import React, { useRef} from 'react'
import {useState} from "react";
import './formStyle.css'

function Form(props) {

    const labNameRef = useRef(null)
    const nameRef =  useRef(null)
    const countRef = useRef(null)

    //const [nameSt, setName] = useState('');
    let nameSt = '';
    const [task1, setTask1] = useState(0);
    const [task2, setTask2] = useState(0);
    const [task3, setTask3] = useState(0);
    const [task4, setTask4] = useState(0);

    const [counter, setCounter] = useState(0);

    const transferValue = (event) => {
        event.preventDefault();
        const points = Number(task1) + Number(task2) + Number(task3) + Number(task4);
        const count = Number(countRef.current.value);
        const avgPoints = (Number(task1) + Number(task2) + Number(task3) + Number(task4)) / count;
        nameSt = nameRef.current.value;
        console.log(nameSt);
        const val = {
            nameSt,
            task1,
            task2,
            task3,
            task4,
            points,
            avgPoints,
        };
        props.func(val);
    };

    const addTask = (event) => {
        setCounter(counter + 1);
        console.log(counter);
    }

    const changeTask1 = (event) => {
        setTask1(event.target.value);
    };

    const changeTask2 = (event) => {
        setTask2(event.target.value);
    };

    const changeTask3 = (event) => {
        setTask3(event.target.value);
    };

    const changeTask4 = (event) => {
        setTask4(event.target.value);
    };

    return (
        <div  className="container">
            <h1>Проверка лабораторной работы</h1>
            <label htmlFor="labName" id="nameLabel">Лабораторная номер</label>
            <input
                type="text"
                id="labName"
                name="labName"
                className="labName"
                placeholder="1"
                ref={labNameRef}
                tabIndex="1"
            />

            <label htmlFor="name" id="nameLabel2" >Фамилия и имя</label>
            <input
                type="text"
                id="name"
                className="name"
                placeholder="Иванов Иван"
                ref={nameRef}
                tabIndex="2"
            />

            <label htmlFor="count">Количество заданий в лабораторной</label>
            <input
                type="count"
                name="count"
                id="count"
                className="count"
                placeholder="4"
                ref={countRef}
                tabIndex="3"
            />
            <button type="addTasks" className="addTasks" onClick={addTask}>Добавить задания</button>
            <button type="addStudents" className="addStudents" onClick={transferValue}>Добавить студента</button>

            {Array.from(Array(counter)).map((c, index) => {
                const count = Number(countRef.current.value);
                if (index+1 <= count)
                    switch (index+1) {
                        case 1:
                            return <input key={c} type="text" placeholder={'task ' + (index + 1)}
                                          onChange={changeTask1}></input>;
                        case 2:
                            return <input key={c} type="text" placeholder={'task ' + (index + 1)}
                                          onChange={changeTask2}></input>;
                        case 3:
                            return <input key={c} type="text" placeholder={'task ' + (index + 1)}
                                          onChange={changeTask3}></input>;
                        case 4:
                            return <input key={c} type="text" placeholder={'task ' + (index + 1)}
                                          onChange={changeTask4}></input>;
                        default:
                            return;
                    }
            })}
        </div>
    )
}

export default Form
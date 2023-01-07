import React, { useRef} from 'react'
import {useState} from "react";
import './formStyle.css'

function Form() {


    const labNameRef = useRef(null)
    const nameRef =  useRef(null)
    const countRef = useRef(null)


    const [counter, setCounter] = useState(0);

    const addTask = (event) => {
        setCounter(counter + 1);
        console.log(counter);
    }

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

            <label htmlFor="name" id="nameLabel2">Фамилия и имя</label>
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

            {Array.from(Array(counter)).map((c, index) => {
                const count = Number(countRef.current.value);
                if (index+1 <= count)
                    return <input key={c} type="text" placeholder={'task ' + (index +1)}></input>;
            })}
        </div>
    )
}

export default Form
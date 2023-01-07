import React, { useRef} from 'react'
import {useState} from "react";
import './formStyle.css'

function Form() {


    const labNameRef = useRef(null)
    const nameRef =  useRef(null)
    const countRef = useRef(null)

    const Input = () => {
        return <input placeholder="Your input here" />;
    };

    const [counter, setCounter] = useState(0);

    const addTask = (event) => {
        /*event.preventDefault()
        const data = {
            labName: labNameRef.current.value,
            name: nameRef.current.value,
            count: countRef.current.value
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")*/
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <div  className="container">
            <h1>Проверка лабораторной работы</h1>
            <form onSubmit={addTask} className="form">
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
                <button type="addTasks" className="addTasks" >Добавить задания</button>

                {Array.from(Array(counter)).map((c, index) => {
                    return <input key={c} type="text"></input>;
                })}
            </form>
        </div>
    )
}

export default Form
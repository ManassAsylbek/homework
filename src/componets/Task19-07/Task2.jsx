import React, {useState} from 'react';

/* 2)Создать любой компонент.
   Создать для этого компонента новое состояние, и три кнопки,
   одна увеличивает на 1, другая на 5, третья на 10..*/

const Task2 = () => {


    const [number, setNumber] = useState(0)

    return (
        <div className="w3-card-4 w3-margin w3-white">
            <button onClick={() =>
                setNumber(number +1)}>+1
            </button>
            <button onClick={() =>
                setNumber(number +5)}>+5
            </button>
            <button onClick={() =>
                setNumber(number +10)}>10
            </button>
            <p>{number}</p>
        </div>
    );
};

export default Task2;
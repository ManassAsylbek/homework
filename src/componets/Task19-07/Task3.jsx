import React, {useState} from 'react';

/*)3)Написать компонент для создания заголовков Title,
   где мы передаем текст заголовка, размер и цвет
   (черный по дефолту, красный или синий)*/

const Task3 = () => {
    const [color, setColor] = useState("black")
    const [size, setSize] = useState(30)

    return (
        <div className="w3-card-4 w3-margin w3-white">

            <button onClick={()=>setColor("red")}>red</button>
            <button onClick={()=>setColor("blue")}>blue</button>
            <button onClick={() => setSize(size +1)}>+1</button>
            <button onClick={() => setSize(size -1)}>-1</button>
            <p style={{color:color,fontSize:size}}>Title</p>
        </div>
    );
};

export default Task3;
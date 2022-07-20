import React from "react";
import "./App.css"
import Task1 from "./componets/Task1";
import Task2 from "./componets/Task2";


const  tags = [
    { title: 'Тег №1', href: "http://link1.ru"},
    { title: 'Тег №2', href: "http://link2.ru"},
    { title: 'Тег №3', href: "http://link3.ru"},
]


function App() {
    return (
        <>
            <Task1 maxStar={7} chosenStar={5}/>
            <Task2 tags={tags}/>
        </>
    );
}

export default App;

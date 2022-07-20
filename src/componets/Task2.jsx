import React from 'react';

/* 2) Сделать компонент для тегов, теги мы отправляем в таком формате:

   tags = [
     { title: 'Тег №1', href: 'http://link1.ru'},
     { title: 'Тег №2', href: 'http://link2.ru'},
     { title: 'Тег №3', href: 'http://link3.ru'},
   ]*/

const Task2 = (props) => {

    const elementTag = props.tags.map(teg => <a className="teg" href={`${props.href}`}> {teg.title}</a>)

    return (
        <>
            <p>Task 2</p>
            <div className="block">
                {elementTag}
            </div>
        </>
    );
};

export default Task2;
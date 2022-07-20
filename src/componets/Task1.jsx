import React, {useState} from 'react';
import star from "../assets/star.png"

/*1) Написать компонент по рейтингу, он принимает два пропса,
   1 - максимальное количество звезд, 2 - сколько выбрано звезд.
   На скрине максмум 4 звезды, а выбрано 3.
*/

const Task1 = (props) => {

    const creatArray = (maxStar, chosenStar) => {
        let arrayStar = [];
        for (let i = 0; i < maxStar; i++) {
            if (i < chosenStar) {
                arrayStar.push("yellow")

            } else {
                arrayStar.push("#D9D9D9")
            }
        }
        return arrayStar
    }


    let arrayStar = creatArray(props.maxStar, props.chosenStar)


    return (
        <>
            <p>Task 1</p>
            <div className="block">

                <div>Rating:</div>
                {
                    arrayStar.map(item =>
                        <div className="star" style={{background: item}}></div>
                    )
                }
            </div>
        </>
    );
};

export default Task1;
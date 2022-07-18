
import React from "react";
import "./App.css"

function App() {
  return (
 <div>
     <form id="card" className="card" action="">

         <h1 className="title title2">Анкета для корпоративных клиентов</h1>
         <p className="input_number">Личные данные</p>
         <div id="personalData" className=" space">
             <div><input id="surname" className="input1 input3 " type="text" data-name="Фамилия" placeholder="Фамилия"
                         data-required={require}/>
                        </div>
             <div><input id="name" className="input1 input3" type="text" placeholder="Имя" data-name="Имя"
                         data-required={require}/></div>

             <div><input id="fatherName" className="input1 input3" type="text" placeholder="Отчество"
                         data-name="Отчество"
                         data-required={require}/></div>

         </div>
         <p className="input_number">Паспортные данные</p>
         <div id="passport" className="space">
             <input id="dateOfBirth" className="input1 input3" type="date" data-name="Дата рождения"
                    placeholder="Дата рождения"/>
                 <input id="placeRegistration" className=" input1 input5" type="text"
                        data-name="Место проживания по прописке" placeholder="Место проживания по прописке"/>
         </div>
         <div id="passportNumber" className=" space">
             <input id="anId" className="input1  input3" type="text" data-name="Серийный номер AN/ID"
                    placeholder="Серийный номер AN/ID"/>
                 <input id="inn" className="input1  input3" type="text" data-name="ИНН" placeholder="ИНН"/>
                     <input id="dateReceived" className="input1  input3" type="date" data-name="Дата получения"
                            placeholder="Дата получения"/>
         </div>
         <div id="contact" className="space">
             <input id="phoneNumber" className="input1  input3" type="text" data-name="Контактный номер"
                    placeholder="Контактный номер"/>
                 <input id="email" className="input1  input3" type="text" data-name="Электронный адрес"
                        placeholder="Электронный адрес"/>
                     <select id="bank" className="input1  input3" data-name="Наимненование банка">
                         <option value="">Наимненование банка</option>
                         <option value="Optima Bank">Optima Bank</option>
                         <option value="Demir bank">Demir bank</option>
                     </select>
         </div>
         <input id="placeResidence" className="input1  input5" type="text" data-name="Фактическое место проживания"
                placeholder="Фактическое место проживания"/>


             <div className="row_center">
                 <button id="btn" className="btn"><a href="#">Далее</a></button>
             </div>
     </form>
 </div>
  );
}

export default App;

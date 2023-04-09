import React, {FC, useState} from 'react';
import "./Header.scss"
import {NavLink} from "react-router-dom";
// @ts-ignore
import logo  from "../../assets/images/logo.svg"
const Header:FC  = () => {
    const [dark , setDark] = useState<boolean>(false)

    return (
        <div id={"header"}>
            <div className="container">
                <div className="header">
                    <div className="header--img">
                        <img  src={logo} alt=""/>
                    </div>
                    <div className="header--nav">
                        <NavLink to={"/"}>Главная</NavLink>
                        <NavLink to={"/"}>Курсы</NavLink>
                        <NavLink to={"/"}>Расписание</NavLink>
                        <NavLink to={"/"}>Преподаватели</NavLink>
                        <NavLink to={"/"}>Рассылка</NavLink>
                        <NavLink to={"/"}>Контакты</NavLink>
                    </div>
                    <div className="header--btn">
                        <button className={"dark"} onClick={() => setDark(!dark)} style={{
                            background: dark ? "white" : "black",
                            color: dark ? "black" : "white"
                        }}>{
                            dark ? "Light" : "Dark"
                        }</button>
                        <button className={"btn"}>Зайти в кабинет</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
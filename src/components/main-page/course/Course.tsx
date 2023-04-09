import React, {FC} from 'react';
import "./Course.scss"
const Course:FC = (dark,setDark) => {
    return (
        <>
            <div id="course" style={{
                background:dark ? "white": "black"
            }}>
                <div className="container">
                    <div className="course">
                        <button>
                            Заказать курс
                        </button>
                        <div className="course--item">
                        <div className="course--item--one">
                            <p>Учеников всего:</p>
                            <p>Успешно закончили курс:</p>
                        </div>
                        <div className="course--item--two">
                            <p>200</p>
                            <p>190</p>

                        </div>
                        </div>
                        <div className="course--line">
                            <div className="course--line--one">
                                <p>Заработано учениками:</p>
                                <h6>400 000₽</h6>
                            </div>
                            <div className="course--line--two">
                                <div className={"line-red"}>
                                    0
                                </div>
                                <div className={"line-white"}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
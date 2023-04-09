import React from 'react';
import "./Hero.scss"
const Hero = () => {
    return (
        <>
            <div id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero--title">
                            <h1>Первый курс<br/>
                                по компьютерной сборке</h1>
                        </div>
                        <div className="hero--data">
                            <div className="hero--data--item">
                                <h2>18</h2>
                                <p>Дней</p>
                            </div>
                            <div className="hero--data--item">
                                <h2>18</h2>
                                <p>Часов</p>
                            </div>
                            <div className="hero--data--item">
                                <h2>18</h2>
                                <p>Минут</p>
                            </div>
                            <div className="hero--data--item">
                                <h2>18</h2>
                                <p>Секунд</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Hero;
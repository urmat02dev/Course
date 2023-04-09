import React, {FC} from 'react';
import Hero from "./hero/Hero";
import Course from "./course/Course";
import Example from "./example/Example";
import Start from "./start/Start";

const MainPage:FC = (dark, setDark) => {
    return (
        <>
           <Hero />
            <Course />
            <Example/>
            <Start/>
        </>
    );
};

export default MainPage;
import React from 'react';
import Hero from "./hero/Hero";
import Course from "./course/Course";
import Example from "./example/Example";
import Start from "./start/Start";

const MainPage = ({dark,getDark}:any) => {
    return (
        <>
           <Hero
               dark={dark}
               getPark={getDark}/>
            <Course
            dark={dark}
            getPark={getDark}
            />
            <Example
                dark={dark}
                getPark={getDark}
            />
            <Start/>
        </>
    );
};

export default MainPage;
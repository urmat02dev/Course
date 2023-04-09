import React from 'react';
import "./Example.scss"
// @ts-ignore
import img from "../../../assets/images/img1.png"
const Example = () => {
    return (
        <div id={"example"}>
            <div className="container">
                <div className="example">
                    <div className="example--left">
                        <img src={img} alt=""/>
                    </div>
                    <div className="example--right">
                        <h1>Чем мы занимаемся?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;
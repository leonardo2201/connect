import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const Caroussel = () => {
    return (
        <div className="container">
            <Carousel autoPlay>
                <div className="carousel">
                    <img alt="" src="http://marcusmarques.com.br/wp-content/uploads/2018/01/processo-negocio-empresarial.jpeg"/>
                </div>
                <div className="carousel">
                    <img alt="" src="http://marcusmarques.com.br/wp-content/uploads/2018/01/processo-negocio-empresarial.jpeg"/>
                </div>
            </Carousel>
        </div>

    );
}
export default Caroussel;


//IMG TAMANHO 790 395
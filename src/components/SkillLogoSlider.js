import React, { Component } from "react";
import Slider from "react-slick";
import slideImages from "./ImageList"


export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 0,
            cssEase: "linear",
            pauseOnHover:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2> Skills </h2>
                <Slider {...settings}>

                    {slideImages.map(value => {
                        return (
                        <div key={value.img} className="child">
                            <img alt = {value.img} src = {value.src}/>
                        </div>
                        );
                    })}
                    
                </Slider>
            </div>
        );
    }
}
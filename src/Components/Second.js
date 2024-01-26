import React, {Component} from 'react';

class Second extends Component {
    slider_settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 6500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    };

    render() {
        const {Slider, weather, suntime} = this.props
        console.log(weather)
        return (

            <div className='container2'>
                <div className="first">
                        <div className="col">
                            <img src="/assets/images/sun_rise.png" alt=""/>
                            <h1>Sunrise</h1>
                            <h2>{(suntime?.results?.sunrise)?.substring(0, 4)} A.M</h2>
                        </div>
                        <div className="col">
                            <img src="/assets/images/sun_set.png" alt=""/>
                            <h1>Sunset</h1>
                            <h2>{(suntime?.results?.sunset)?.substring(0, 4)} P.M</h2>
                        </div>
                        <div className="col">
                            <img src="/assets/images/visibility.png" alt=""/>
                            <h1>Visibility</h1>
                            <h2>{weather?.visibility / 1000}M</h2>
                        </div>
                        <div className="col">
                            <img src="/assets/images/presure.png" alt=""/>
                            <h1>Pressure</h1>
                            <h2></h2>
                            <h2>{(weather?.main?.pressure * 0.02953).toPrecision(4)} inHg</h2>
                        </div>
                </div>
                <div className="second">
                    <h1>Hourly forecast</h1>
                    <div className="items">
                        <Slider {...this.slider_settings}>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                            <div className="item">
                                <p>4:30 PM</p>
                                <img src="/assets/images/sun.png" alt=""/>
                                <p>22&#176;</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        );
    }
}

export default Second;
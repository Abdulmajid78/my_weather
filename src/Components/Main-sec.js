import React, {Component} from 'react';


class MainSec extends Component {
    render() {
        const {weather} = this.props
        // console.log(weather)
        return (
            <div className="container">
                <div className="main-sec">
                    <div className="left-side">
                        <h1>{weather?.sys?.country ? weather?.sys?.country : 'Country'}, {weather?.name ? weather?.name : 'City'}</h1>
                        <h2>{Math.round(weather?.main?.temp ? weather?.main?.temp : '0')}&#176; C</h2>
                        <p>{weather?.weather[0]?.description}</p>
                    </div>

                    <div className="right-side">
                        <img src={
                            weather?.weather[0].icon == '01d' ? '/assets/images/sun.png' : weather?.weather[0].icon == '01n' ? '/assets/images/clear_night.png' :
                                weather?.weather[0].icon == '02d' ? '/assets/images/mostly_cloudy.png' : weather?.weather[0].icon == '02n' ? '/assets/images/cloudy_night.png' :
                                    weather?.weather[0].icon == '03d' || weather?.weather[0].icon == '04d' ? '/assets/images/cloud.png' : weather?.weather[0].icon == '03n' || weather?.weather[0].icon == '04n' ? '/assets/images/cloudy_night.png' :
                                        weather?.weather[0].icon == '09d' || weather?.weather[0].icon == '10d' ? '/assets/images/rainy.png' :
                                            weather?.weather[0].icon == '09n' || weather?.weather[0].icon == '10n' ? 'assets/images/drizzle_night.png' :
                                                weather?.weather[0].icon == '11d' || weather?.weather[0].icon == '11n' ? '/assets/images/thunderstorm.png' :
                                                    weather?.weather[0].icon == '13d' || weather.weather[0].icon == '13n' ? '/assets/images/snow.png' :
                                                        '/assets/images/mist.png'

                        } alt=""/>
                        <div className="right-bottom">
                            <h1>max: {Math.round(weather?.main?.temp_max ? weather?.main?.temp_max : '0')}&#176; C</h1>
                            <h1>feels
                                like: {Math.round(weather?.main?.feels_like ? weather?.main?.feels_like : '0')}&#176; C</h1>
                            <h1>min: {Math.round(weather?.main?.temp_min ? weather?.main?.temp_min : '0')}&#176; C</h1>
                        </div>
                    </div>
                </div>
                <div className="humidity">
                    <img src="/assets/images/humid.png" alt=""/>
                    <h1>Humidity</h1>
                    <h2>{weather?.main?.humidity ? weather?.main?.humidity : 0}%</h2>
                </div>
                <div className="wind">
                    <img src="/assets/images/wind.png" alt=""/>
                    <h1>Wind</h1>
                    <h2>{weather?.wind?.speed ? Math.round(weather?.wind?.speed) : 0}km/h</h2>
                </div>
            </div>
        );
    }
}

export default MainSec;
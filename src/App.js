import React, {Component, createRef} from 'react';
import Searchbar from "./Components/Searchbar";
import MainSec from "./Components/Main-sec";
import Second from "./Components/Second";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import Loader from "./Components/Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {


    searchInput = createRef();
    api_key = '4e9cf37578a97dafe99b98c9ed2ca6cf\n'

    state = {
        weather: {},
        suntime: {},
        localTime: '',
        loader: true
    };

    searchCity = () => {
        let city = this.searchInput.current.value
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`

        axios.get(url)
            .then((response) => {
                const {coord} = response.data; // Extracting coordinates from weather data
                const currentUTC = Date.now();
                const localTime = new Date(currentUTC + response.data.timezone);
                // Updating sun_url with lat and lon
                const sun_url = `https://api.sunrisesunset.io/json?lat=${coord.lat}&lng=${coord.lon}`;

                this.setState({
                    loader: false,
                    localTime: localTime,
                    weather: response.data,
                });

                // Fetching sunrise and sunset data with updated sun_url
                axios.get(sun_url)
                    .then((sunResponse) => {
                        this.setState({
                            suntime: sunResponse.data,
                        });
                    })
                    .catch(sunError => console.error('Error fetching sunrise/sunset data:', sunError));

                toast.success('Success', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });
            })
            .catch((error) => {
                toast.error('City not found', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "colored",
                });

                this.setState({
                    loader: false,
                });
            });
    }

    // sun_url = `https://api.sunrisesunset.io/json?lat=${40.71427}&lng=${-74.00597}`

    // componentDidMount() {
    //     let city = 'tashkent'
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`
    //
    //     axios.get(url)
    //         .then((response) => {
    //             this.setState({
    //                 weather: response.data,
    //                 loader: false
    //             });
    //         }).catch((error) => {
    //         console.log('error');
    //         this.setState({
    //             loader: false
    //         })
    //     })
    //
    //     axios.get(this.sun_url)
    //         .then((response) => {
    //             this.setState({
    //                 suntime: response.data,
    //             });
    //         })
    //         .catch(error => console.error('Error:', error))
    // }

    componentDidMount() {
        let city = 'tashkent'
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`

        axios.get(url)
            .then((response) => {
                const {coord} = response.data; // Extracting coordinates from weather data

                const currentUTC = Date.now();
                const localTime = new Date(currentUTC + response.data.timezone);

                // Updating sun_url with lat and lon
                const sun_url = `https://api.sunrisesunset.io/json?lat=${coord.lat}&lng=${coord.lon}`;

                this.setState({
                    weather: response.data,
                    localTime: localTime,
                    loader: false,
                });
                // Fetching sunrise and sunset data with updated sun_url
                axios.get(sun_url)
                    .then((sunResponse) => {
                        this.setState({
                            suntime: sunResponse.data,
                        });
                    })
                    .catch(sunError => console.error('Error fetching sunrise/sunset data:', sunError));
            })
            .catch((error) => {
                console.log('Error fetching weather data:', error);
                this.setState({
                    loader: false,
                });
            });
    }

    render() {
        console.log(this.state.localTime)
        const {weather, loader, map_url, suntime, localTime} = this.state
        return (
            <div>
                {loader ? <Loader/> :
                    <>
                        <Searchbar searchInput={this.searchInput} searchCity={this.searchCity}/>
                        <MainSec weather={weather} map_url={map_url} localTime={localTime}/>
                        <Second weather={weather} Slider={Slider} suntime={suntime}/>
                    </>}


                <ToastContainer/>
            </div>
        )
            ;
    }
}

export default App;
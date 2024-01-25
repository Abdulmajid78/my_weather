// Accessing and modifying CSS custom properties in JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Accessing the value of a CSS custom property
    var background = getComputedStyle(document.documentElement).getPropertyValue('--background');
    console.log('Main Color:', background);

    // Modifying the value of a CSS custom property


    weather?.weather[0].icon == '01d' ? '/assets/images/sun.png' : weather?.weather[0].icon == '01n' ? '/assets/images/clear_night.png' :
        weather?.weather[0].icon == '02d' ? '/assets/images/mostly_cloudy.png' : weather?.weather[0].icon == '02n' ? '/assets/images/cloudy_night.png' :
            weather?.weather[0].icon == '03d' || weather?.weather[0].icon == '04d' ? '/assets/images/cloud.png' : weather?.weather[0].icon == '03n' || weather?.weather[0].icon == '04n' ? '/assets/images/cloudy_night.png' :
                weather?.weather[0].icon == '09d' || weather?.weather[0].icon == '10d' ? '/assets/images/rainy.png' :
                    weather?.weather[0].icon == '09n' || weather?.weather[0].icon == '10n' ? 'assets/images/drizzle_night.png' :
                        weather?.weather[0].icon == '11d' || weather?.weather[0].icon == '11n' ? '/assets/images/thunderstorm.png' :
                            weather?.weather[0].icon == '13d' || weather.weather[0].icon == '13n' ? '/assets/images/snow.png' :
                                '/assets/images/mist.png'


    document.documentElement.style.setProperty('--background', '#e74c3c');
    console.log(background)
});

export default MyService;
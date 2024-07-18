const success = async (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const left_Content = document.getElementById("weather_Left_Item")
    const right_Content = document.getElementById("weather_Right_Item")
    const loader = document.getElementById("loader")

    try {
        await Promise.all[get_WeatherInfo(lat, lon), get_CityInfo(lat, lon)]
        loader.style.display = 'none'
        left_Content.style.display = 'flex'
        right_Content.style.display = 'flex'
    } catch (error) {
        throw console.error(error)
    }
}

const fail = () => {
    loader.style.display = 'none'
    console.log("위치정보 액세스 불가!")
}

const get_Date = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const dateString = year + '년 ' + month + '월 ' + day + '일';

    document.getElementById("date").innerHTML = dateString
}

const get_WeatherInfo = async (lat, lon) => {
    try {
        const API_KEY = `2bac9dc8e520f9a4d739b8fdfb3526af`;

        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();

        const temp = data.current.temp
        const humidity = data.current.humidity
        const iconURL = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`

        const imgElement = document.getElementById("weather_Icon")
        imgElement.src = iconURL

        document.getElementById("temp").innerHTML = temp + '°C'
    } catch (error) {
        throw console.error(`Fetch error: ${error}`);
    }
}

const get_CityInfo = async (lat, lon) => {
    try {
        const API_KEY = `e107faacb45d44439da01cdb9db39e53`

        const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}`

        const response = await fetch(url)
        const data = await response.json()

        if (!data.results[0]) {
            throw new Error(`Geocoding error: ${response.status}`)
        }

        const city = data.results[0].components.city

        document.getElementById("city").innerHTML = city
    } catch (error) {
        throw console.error(`Geocoding error: ${error}`);
    }
}

// navigator.geolocation.getCurrentPosition(success, fail)

document.getElementById('logo').addEventListener('click', () => {
    location.reload();
})
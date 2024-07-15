const API_KEY = "a11482d1d7b57d2ef5b6bdcc169ccd0b"

navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
    getWeather(res.coords.latitude, res.coords.longitude);
})

async function getWeather(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`
        )
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        const data = await response.json();
    } catch (error) {
        throw console.error(`Fetch error: ${error}`);
    }
}

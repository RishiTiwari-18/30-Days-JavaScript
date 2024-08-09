function getWeatherInfo(){
    const apiKey = "50304c27e8016ae4fb95daf5f73d54e6"
    let inputCity = document.querySelector("input").value
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`

let weatherInfo = document.querySelector(".weatherResult")

fetch(link)
.then(response => response.json())
.then(data => {
    let temperature = data.main.temp
    let weather = data.weather[0].description
    weatherInfo.innerHTML = `
                <h1>${temperature}</h1>
            <h3>${weather}</h3>
            <h3>${inputCity}</h3>
            `    
})
.catch(error => 
    console.error('Error:', error)
    
)
}

document.querySelector(".getWeather")
.addEventListener("click", getWeatherInfo)





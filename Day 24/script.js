const apiKey = "50304c27e8016ae4fb95daf5f73d54e6"
const city = "indore"
const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

fetch(link)
.then(response => response.json)
.then(data => {
    
})
.catch(error => 
    console.error("error", error)
    
)




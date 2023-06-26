//Adam David

//Express Server using openweather.org API

const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 3000
const API_KEY = '883b246134453e9c4ce142a766529e2d';
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname+ '/html/index.html')
})

let options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=' + city +
    '&appid=' + API_KEY
}

http.request(options, function(apiResponse) {
    let weatherData = ''
    apiResponse.on('data', function(chunk) {
      weatherData += chunk
    })
    apiResponse.on('end', function() {
      response.contentType('application/json').json(JSON.parse(weatherData))
    })
  }).end() 
           
})
app.listen(PORT, err => {
  if(err) console.log(err)
  else {
    console.log(`Server listening on port: ${PORT}`)
    console.log(`To Test:`)
    console.log(`http://localhost:3000/weather?city=Ottawa`)
    console.log(`http://localhost:3000`)
  }

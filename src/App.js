import React, {  useState } from "react"
import WeatherInfo from "./WeatherInfo"
import Header from "./Header"




function App() {
  const [data,setData] =useState({})
  const [location,setLocation] =useState("")

  const API_KEY= "0d05a9bb20bff8845a78cafde4ae705d"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`


  
 const searchLocation = (e)=>{
    if(e.key === 'Enter'){
      fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      // console.log(data)
      .catch(error => console.error(error))
      setLocation("")
    }
    
  }
  return (
    <>
    <Header/>
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input type="text" className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 placeholder:text-gray-400
         focus:outline-none bg-white-600/100 shadow-md"
        placeholder="şehir adi girin"
        value={location}
        onChange={(e) =>setLocation(e.target.value)}
        onKeyDown={searchLocation}
        />

      </div>
      <WeatherInfo weatherData={data} />
    </div>
    </>
  )
}
export default App
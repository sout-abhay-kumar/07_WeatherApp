import "./Styles/App.css"
import SearchBar from "./Components/SearchBar"
import WeatherCard from "./Components/WeatherCard"


function App() {
  return (
    <>
      <div className="text-4xl text-center text-zinc-900 font-semibold font-serif shadow-2xs py-10">
        Weather App
      </div>
      <div className="my-6">
        <SearchBar/>
      </div>
      <div>
        <WeatherCard />
      </div>
    </>
  )
}

export default App
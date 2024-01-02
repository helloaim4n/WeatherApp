import WeatherDisplay from './components/WeatherDisplay.jsx';
import SearchBar from './components/SearchBar.jsx';  
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
  )
}

export default App;
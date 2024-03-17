import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import Splash from './components/Splash'

function App() {
  const [inputValue, setInputValue] = useState('');
  let error = false;
  let api = 'https://pokeapi.co/api/v2/pokemon/';
  
  const handleInputChange = (event) => {
    const callPokeApi = async () => {
      const response = await fetch(api + event.target.value);
    }
    setInputValue(event.target.value);
  };

  return (
    <>
      <Splash />
      <div className="searchBar">
        <input type="search" id="search" placeholder="Search for a Pokemon" aria-label="search" value={inputValue} onChange={handleInputChange} />
      </div>
      <h2>Input Value: {inputValue}</h2>
    </>
  )
}

export default App

import './App.css';
import { useState } from "react";
import { AnimalShows } from "./AnimalShows";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map(( animal, index)=>{
    return <AnimalShows type={animal} key={index}/>
  })

  return (
    <div className='App'>
      <button onClick={handleClick}>presiona para mostrar animales</button>
      <hr/>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;

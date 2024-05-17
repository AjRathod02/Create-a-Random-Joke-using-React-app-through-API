import React from 'react'
import Button from './Button'
import './Joke.css'   

const Joker=()=>
{
  const [Joker,setJoke] =React.useState("");

  const fetchApi=()=>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => setJoke(data.joke));
  }
  return (
    <div className="joke">
        <Button callApi={fetchApi} /> 
        <p>{Joker}</p>    
    </div>
);

}

export default Joker

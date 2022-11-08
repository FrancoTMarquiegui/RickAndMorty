import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Item = ({url}) => {

  const [ figure, setFifure ] = useState({});

  useEffect (() => {
    axios.get(url)
     .then(res => setFifure(res.data));
  }, [])
console.log(figure)
  return (
    <div className='box'>
      <img src={figure.image} alt="img" />
      <div className='info'>

      <h1 className='name'>{figure.name} {""}</h1>
      <div className='line'></div> 
      <p><b>species:</b>{""} {figure.species} </p>
      <p><b>name: </b>{""}{figure.origin?.name} </p>
      <p><b>episode: </b>{""}{figure.episode?.length}</p>
      </div>
    </div>
  );
};

export default Item;
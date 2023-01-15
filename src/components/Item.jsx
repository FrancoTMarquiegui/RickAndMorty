import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Item = ({ url }) => {

  const [figure, setFifure] = useState({});

  useEffect(() => {
    axios.get(url)
      .then(res => setFifure(res.data));
  }, [])
  console.log(figure)
  return (
    <div className='box'>

      <div className='info'>
        <div className="img__box"> 
        <img src={figure.image} alt="" />
        </div>
      <div className="color__box"> 
        <h1 className='name'>{figure.name} {""}</h1>
        <div className='line'></div>
        <p><b>species:</b>{""} {figure.species} </p>
        <p><b>name: </b>{""}{figure.origin?.name} </p>
        <p><b>episode: </b>{""}{figure.episode?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
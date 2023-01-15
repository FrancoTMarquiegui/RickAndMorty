import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item';


const RickAndMorty = () => {

  const [location, setLocation] = useState({});
  const [TypeId, setTypeId] = useState(" ");

  useEffect(() => {
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then(res => setLocation(res.data));

  }, []);

  console.log(location);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${TypeId}`)
      .then(res => setLocation(res.data));
  }

  return (
    <div className='container'>
      <div className='img'>
       
      </div>
      <div className='search'>
        <div className='seeker'>
          <h1>{location.name}</h1>
        </div>
        <div className='type'>
          <h2><b>Type:</b> {location.type}</h2>
          <h2><b>Dimension:</b> {location.dimension} </h2>
          <h2><b>population:</b> {location.residents?.length}</h2>

        </div>

        <div className='button'>
          <input className='input__search' type="text" value={TypeId} onChange={e => setTypeId(e.target.value)} />
          <button className='button__search' onClick={searchType}>Search</button>
        </div>



        <ul className='list'>
          {location.residents?.map(character => (
            <Item
              url={character}
              key={character}
            />
          ))}
        </ul>
      </div>


    </div>
  );
};

export default RickAndMorty;
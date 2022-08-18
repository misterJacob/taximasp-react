import React from 'react'
import {Content} from '../components/imp/textinfo'
import Card from '../components/Card'

const Home = () => {

  return (
    <div className='home'>
      {Content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}



export default Home

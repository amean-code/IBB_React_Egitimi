import React from 'react'
import Duyuru from './Duyuru'

function Home() {
  return (
    <div className='container'>

      <Duyuru baslik="Baslik 1"/>
      <Duyuru baslik="Baslik 2"/>
      <Duyuru baslik="Baslik 3" imgSrc='https://ibb.istanbul/BBImages/Image/news1.jpg'/>
      <Duyuru baslik="Baslik 4" tarih={"22 Ağustos 2022"}/>
      <Duyuru />

    </div>
  )
}

export default Home
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function EffectOrnek() {

    const [count,setCount] = useState(10);

    useEffect(
        ()=> {
            document.title = `Sayımız ${count}`
        }
        ,[count]);

  return (
    <div>
        <p> Şu anki sayımız: {count}</p>

        <button
        onClick={() => {
            setCount(count + 2);
        }}
        > 
        Sayı Arttır
        </button>
    </div>
  )
}

export default EffectOrnek
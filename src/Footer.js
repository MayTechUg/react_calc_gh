import React from 'react'
import { useState,useEffect } from 'react';

const Footer = () => {

    const [words,setWords] =useState(['The quieter You Become, The more you hear','hear......................']);
    const[currentIndex,setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        },3000);
        return () => clearInterval(interval)
    },[words.length])

  return (
    <div className='footer'>
        {words.map((word,index) => ( <span key={index} className={`word ${index === currentIndex ? 'active': ''}`}> {word} </span>))}
    </div>
  )
}

export default Footer
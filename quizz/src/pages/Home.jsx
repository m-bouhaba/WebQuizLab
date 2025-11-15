import React from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const navigate = useNavigate();

  const startquiz = () => {
    navigate('/quiz');
  }

  return (
    <div className='homecontainer'>
      <div className='textcontainer'>
        <h1>Bienvenue sur le Quiz du Développeur !</h1>
        <p>Découvre ton niveau et progresse pas à pas vers le métier de développeur Frontend !</p>
      </div>
      <button className='startbutton' onClick={() => startquiz()} >C'est parti !</button>
    </div>
  )
}

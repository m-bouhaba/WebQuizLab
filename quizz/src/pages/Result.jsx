import React from 'react'
import { useState } from 'react';

export default function Resultpage() {
  return (
    <>

    <h1>your score is {localStorage.getItem('score')} </h1>
    </>
  )
}

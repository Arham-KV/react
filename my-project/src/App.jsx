import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Cards anothertext='Arham' btn='click'/>
    <Cards anothertext='jhon'/>
    </>
  )
}

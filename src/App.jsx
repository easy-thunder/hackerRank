import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>

    </>
  )
}

export default App





const candles = [4,1,4,3]



function birthdayCakeCandles(candles) {
  // Write your code here
  candles.sort((a,b)=> a-b).reverse()
  let max=candles[0]
  let maxNumber=1;
for(let i =1; i<candles.length; i++){
  if(candles[i]===max){
    maxNumber++
  }

 
}
console.log(maxNumber)
}

birthdayCakeCandles(candles)






















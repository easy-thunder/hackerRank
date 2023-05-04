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
return(maxNumber)
}

// console.log(birthdayCakeCandles(candles))








const time = "12:45:54PM";




function timeConversion(s) {
  const length = s.length
  const AMOrPM=(s.charAt(length-2))
  let morning = s.slice(0,-2)
  if(morning.slice(0,2)==="12"){
    const sliceOfMorning=morning.slice(2)
    const sAM= "00".concat(sliceOfMorning)
    morning = sAM
  }
  let timeFormat =""
let hours = parseInt(s.charAt(0).concat(s.charAt(1)))
if(AMOrPM==="P"){
  hours+=12
  
  if(s.slice(0,2)==="12"){
    hours-=12
  }
  const stringHours= String(hours)
  const sliceOfS= s.slice(2,-2)
  const sPM= stringHours.concat(sliceOfS)
  timeFormat=sPM

}

if(AMOrPM==="A"){
timeFormat=morning  
}



return(timeFormat)



}


console.log(timeConversion(time))































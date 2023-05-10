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





// const candles = [4,1,4,3]



// function birthdayCakeCandles(candles) {
//   // Write your code here
//   candles.sort((a,b)=> a-b).reverse()
//   let max=candles[0]
//   let maxNumber=1;
// for(let i =1; i<candles.length; i++){
//   if(candles[i]===max){
//     maxNumber++
//   }

 
// }
// return(maxNumber)
// }

// console.log(birthdayCakeCandles(candles))








// const time = "12:45:54PM";




// function timeConversion(s) {
//   const length = s.length
//   const AMOrPM=(s.charAt(length-2))
//   let morning = s.slice(0,-2)
//   if(morning.slice(0,2)==="12"){
//     const sliceOfMorning=morning.slice(2)
//     const sAM= "00".concat(sliceOfMorning)
//     morning = sAM
//   }
//   let timeFormat =""
// let hours = parseInt(s.charAt(0).concat(s.charAt(1)))
// if(AMOrPM==="P"){
//   hours+=12
  
//   if(s.slice(0,2)==="12"){
//     hours-=12
//   }
//   const stringHours= String(hours)
//   const sliceOfS= s.slice(2,-2)
//   const sPM= stringHours.concat(sliceOfS)
//   timeFormat=sPM

// }

// if(AMOrPM==="A"){
// timeFormat=morning  
// }



// return(timeFormat)



// }


// console.log(timeConversion(time))
// HackerLand University has the following grading policy:
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

// const grades=[73, 67, 38, 33]

// function gradingStudents(grades) {

//   const formattedGrades=[]
  
//   grades.map(grade=>{
//     const modulusFive=grade%5-5;
//     if(grade<=37){
//       formattedGrades.push(grade)
//     }
//     if(grade>=38 && modulusFive >= -2){
//       grade+= Math.abs(modulusFive)
//       formattedGrades.push(grade)
//     }

//     if(grade>=38 && modulusFive <= -3){
//       formattedGrades.push(grade)
//     }
//   })
//   return(formattedGrades)
// }




// console.log(gradingStudents(grades))




// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let numberOfApplesOnHouse=0;
//   let numberOfOrangesOnHouse=0;

//   // Write your code here
//   apples.map(apple=>{
//     const x=apple+a;
//     if(s<=x && x<=t){
//       numberOfApplesOnHouse+=1;
//     }
//   })
//   oranges.map(orange=>{
//     const x=orange+b;
//     if(s<=x && x<=t){
//       numberOfOrangesOnHouse+=1;
//     }
//   })
//   console.log(numberOfApplesOnHouse )
//   console.log(numberOfOrangesOnHouse )

// }
// s=house start t=house end a= apple start b=orange start

// const s= 7
// const t = 11
// const a = 5
// const b = 15 
// const apples=[-2,2,1]
// const oranges = [5,-6]


// countApplesAndOranges(s,t,a,b,apples,oranges)



//number line jumps

// function kangaroo(x1, v1, x2, v2) {
//   // Write your code here
// const array=[{initial:x1, velocity:v1},{initial:x2, velocity:v2}]
// const sortedArray=array.sort((a,b)=>a.initial-b.initial)

// //if the velocity of the smaller initial number is smaller than the velocity of the larger number the first velocity will never catch up to the larger number if they did not start at the same place. Thus we return NO.
// if(sortedArray[0].velocity<=sortedArray[1].velocity && sortedArray[0].initial!== sortedArray[1].initial){
//   return "NO"
// }

// //this is to increment the numbers. I'm messing with the initial values as it doesn't matter after I start, I just need to know if the two numbers overlap with their velocity.
// if(sortedArray[0].initial<sortedArray[1].initial){
//   recursion()
// }
// function recursion(){
//   if(sortedArray[0].initial> sortedArray[1].initial || sortedArray[0].initial===sortedArray[1].initial){return}
//     sortedArray[0].initial+=sortedArray[0].velocity
//     sortedArray[1].initial+=sortedArray[1].velocity
//     recursion()
//   }
// //next two if statements are what I return 
// if(sortedArray[0].initial>sortedArray[1].initial){
//   return "NO"
// }
// if(sortedArray[0].initial===sortedArray[1].initial){
//     return "YES"    
// }

// }

// //x=start v=each step too the right

// const x1=2;
// const v1=1;
// const x2=1;
// const v2=2;

// console.log(kangaroo(x1, v1, x2, v2))


// // same problem as above, just wanted to do it with less code

// function kangaroo(x1, v1, x2, v2) {
//   const xDif =Math.abs(x1-x2);
//   const vDif =Math.abs(v1-v2);
//   // if both velocity and initial is smaller on one then they will never catch up.
//   if((x1-x2<0 && v1-v2<0)||(x1-x2>0 && v1-v2>0)){return"NO"}
//   // if the remainder is zero and the above is passed then they will overlap.
// if(xDif%vDif===0){return"YES"}
// //all other cases don't exist where they can overlap.
// else{return"NO"}
// }
/////////////////////////////////////////////////
// numbers between
//assume that b is greater than a

// function getTotalX(a, b) {
//   // Write your code here
//   let factorCount = 0
//   for (let i = a[a.length - 1]; i <= b[0]; i++) {
//       let boo = true;
//      a.map(num=> {
//           if ((i % num) !== 0) {
//               boo = false
//               return;
//           }
//       })
//      b.map(num=> {
//           if ((num % i) !== 0) {
//               boo = false
//               return;
//           }
//       })
//       if (boo) factorCount += 1
//   }
//   return factorCount
// }

// // get all values that either multiply into the factorial or that can be used to divide a value
// //ie. 6,12 is what we are looking for in this problem
// //3,4,24,48 would be 12 and 24
// const a=[1]
// const b=[100]

// console.log(getTotalX(a,b)) 
///////////////////////


// function breakingRecords(scores) {
// let bad=scores[0];
// let good=scores[0];
// let badTally=0;
// let goodTally=0;
// for(let i=1; i<scores.length; i++){
//   if(scores[i]>good){
//     good=scores[i]
//     goodTally+=1;
//   }

//   if(scores[i]<bad){
//     bad=scores[i]
//     badTally+=1;
//   }
// }

// return[goodTally, badTally]
// }

// const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]


// console.log(breakingRecords(scores))


//////////////////////////////////////




const n=6;
const k=3;
const ar=[1, 3, 2, 6, 1, 2]

// k is target to divide by
//n = length of arr
// sum of two in the array needs to add too k

function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let sums=[];
  ar.map((number, index)=>{
    let i=index;
    for(i;i<n;i++){
      console.log(i)
      
      if((ar[i]+number)%k===0&&i!==index){sums.push([number,ar[i]])}
  }
})
    return sums.length


}


console.log(divisibleSumPairs(n,k,ar))





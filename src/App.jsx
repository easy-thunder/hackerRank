import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <></>;
}

export default App;

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

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

// k is target to divide by
//n = length of arr
// sum of two in the array needs to add too k

// function divisibleSumPairs(n, k, ar) {
//   // Write your code here

//   let sums=[];
//   ar.map((number, index)=>{
//     let i=index;
//     for(i;i<n;i++){
//       console.log(i)

//       if((ar[i]+number)%k===0&&i!==index){sums.push([number,ar[i]])}
//   }
// })
//     return sums.length

// }

// console.log(divisibleSumPairs(n,k,ar))

// const birds =[1,3,3,5,4,4,4]

// function migratoryBirds(arr) {
//   //sort first
//   const sortedBirds=arr.sort((a,b)=>a-b)

//   const uniqueBirds=Array.from(new Set(sortedBirds))
//   const sitings=[]
//   const highestType=parseInt(uniqueBirds.slice(-1))
//   for(let i=1; i<=highestType; i++){
//     sitings.push(0)
//   }

//   sortedBirds.map(bird=>{

//     sitings[bird-1]+=1
//   })
//   let max =0;
//   let maxIndex= 0;
//   // if tied we want to return the lower index of the highest value. we don't want
// sitings.map((value, index)=>{
//   console.log(value, max,index,sitings)
//   if(value>max){
//     max=parseInt(value)
//     maxIndex=parseInt(index+1)
//     console.log("hit", max)
//   }
// })

//   return(maxIndex)

// }

// console.log(migratoryBirds(birds))
// first attempt
function formingMagicSquare(s) {
  // Write your code here
  //1. if any ===15 they are immutable.
  function recursive(array) {
    const immutable = [];
    const mutableIndexes = [];
    const mutable = [];
    let valueD0 = 0;
    let valueD2 = 0;
    const diagonal0 = {};
    const diagonal2 = {};
    for (let i = 0; i <= 2; i++) {
      window["horizontal" + i] = {};
      window["vertical" + i] = {};
      let valueH = 0;
      let valueV = 0;
      valueD0 += array[i][i];
      valueD2 += array[2 - i][i];
      diagonal0.value = valueD0;
      diagonal0["index" + i] = `${i}${i}`;
      diagonal0["individualValue" + i] = array[i][i];
      diagonal0.name = "diagonal0";
      diagonal2.value = valueD2;
      diagonal2["index" + i] = `${2 - i}${i}`;
      diagonal2["individualValue" + i] = array[2 - i][i];
      diagonal2.name = "diagonal2";

      for (let j = 0; j <= 2; j++) {
        valueH += array[i][j];
        valueV += array[j][i];
        window["horizontal" + i].value = valueH;
        window["horizontal" + i][`index${j}`] = `${i}${j}`;
        window["horizontal" + i][`individualValue${j}`] = array[i][j];

        window["vertical" + i].value = valueV;
        window["vertical" + i][`index${j}`] = `${j}${i}`;
        window["vertical" + i][`individualValue${j}`] = array[j][i];
      }
    }

    for (let i = 0; i <= 2; i++) {
      if (diagonal2.value < 15) {
        mutable.push(diagonal2);
        mutableIndexes.push(diagonal2[`index` + i]);
      }
      if (diagonal0.value < 15) {
        mutable.push(diagonal0);
        mutableIndexes.push(diagonal0[`index` + i]);
      }
      if (window["horizontal" + i].value < 15) {
        mutable.push(window["horizontal" + i]);
        mutableIndexes.push(
          window["horizontal" + i].index0,
          window["horizontal" + i].index1,
          window["horizontal" + i].index2
        );
      }
      if (window["vertical" + i].value < 15) {
        mutable.push(window["vertical" + i]);
        mutableIndexes.push(
          window["vertical" + i].index0,
          window["vertical" + i].index1,
          window["vertical" + i].index2
        );
      }

      if (diagonal0.value === 15) {
        immutable.push(diagonal0["index" + i]);
      }
      if (diagonal2.value === 15) {
        immutable.push(diagonal2["index" + i]);
      }
      if (window["horizontal" + i].value === 15) {
        immutable.push(window["horizontal" + i].value);
      }
      if (window["vertical" + i].value === 15) {
        immutable.push(window["vertical" + i].value);
      }
    }

    
    

    let previous;
    const mutableIndexValues = [];

const sortedMutableIndexes = mutableIndexes.sort((a,b)=>{return parseInt(a)-parseInt(b)})

    sortedMutableIndexes.map((index) => {
      if (index === previous) {
        window[`count${index}`].count += 1;
        window[`count${index}`]
      } else {
        previous = index;
        window[`count${index}`] = { count: 1, index: index };
        // console.log(window[`count${index}`])
      }

      mutableIndexValues.push(window[`count${index}`]);
    });

    let i = 0;
    for (i; i < mutableIndexValues.length; i++) {
      if(i===-1){break}
      immutable.map((immutable) => {
        if (mutableIndexValues[i].index === immutable) {
          mutableIndexValues.splice(i, 1);
          if(i>0){

            i -= 1
          }
        }
        if(i===-1){return}

 
      });
    }

    const uniqueMutableIndexes = Array.from(new Set(mutableIndexValues));
    
    
    const mutableSet= Array.from(new Set(mutable))

    uniqueMutableIndexes.map((index) => {
      mutableSet.map((count) => {
        if (
          index.index === count.index0 ||
          index.index === count.index1 ||
          index.index === count.index2
        ) {

        


          if (index.changed) {
            if(index.changed>15-count.value)
             (index.changed = 15-count.value);
          } 

          else {
             (index.changed = 15-count.value);
          }
        }
      });
    });

    uniqueMutableIndexes.map(index=>{
      index.finalValue=index.count*index.changed
    })
    
// console.log(uniqueMutableIndexes)
    uniqueMutableIndexes.sort((a, b) => a.finalValue - b.finalValue).reverse();
    return uniqueMutableIndexes;
  }

recursive(s)
// console.log(recursive(s).length)


//////////////////////////
let finalAnswer=0

while(recursive(s)[0].index!==null){
  let magic=recursive(s)[0].index
  finalAnswer+=recursive(s)[0].changed
  s[magic[0]][magic[1]] +=recursive(s)[0].changed
  recursive(s)
  if(!recursive(s)[0]){break}
}

///////////////////////////////////////
  return(finalAnswer)
    
}
const square = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

console.log(formingMagicSquare(square));

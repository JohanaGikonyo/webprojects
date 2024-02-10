import { useState, useEffect } from "react"
import img1 from './images/clock.jpg'
const App=()=>{
  const [timeInMilliseconds, setTimeInMilliseconds]=useState(0)
const [start, setStart]=useState(false)
const setting=()=>{
  if(start){
    setStart(false)
  }
  else{
    setStart(true)
  }
}

  useEffect(()=>{
    if(start){
const time=setInterval(()=>{
  setTimeInMilliseconds(e=>e+10)
},10)
return ()=>clearInterval(time)
    }
  },[timeInMilliseconds, start])


 const setTime=(timeInMilliseconds)=>{
  let hours=Math.floor((timeInMilliseconds/3600000))
  let minutes=Math.floor((timeInMilliseconds%3600000)/60000)
  let seconds=Math.floor((timeInMilliseconds%60000)/1000)
  let milliseconds=timeInMilliseconds%1000
  return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${milliseconds.toString().padStart(3,'0')}`
 }
  return (
    <>
    <img src={img1} alt="clock"/>
    <h6>{setTime(timeInMilliseconds)}</h6>
    {/* <button className="btn btn-black m-3" onClick={()=>{setStart(true)}}>Start</button> */}
    <button className="btn btn-success m-3 " onClick={setting}>{start?'Stop':'Start'}</button>
    <button className="btn btn-danger m-3 " onClick={()=>{setTimeInMilliseconds(0)}}>Restart</button>
    </>
  )
}
export default App
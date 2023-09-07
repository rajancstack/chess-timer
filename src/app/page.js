'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState,useRef } from 'react'

export default function Home({delayResend="600"}) {

  const timer1=useRef(null)
  const timer2=useRef(null)

  const [delay1,setDealy1]=useState(+delayResend)
  const [delay2,setDealy2]=useState(+delayResend)
  const [isPlaying1, setIsPlaying1]=useState(false)
  const [isPlaying2, setIsPlaying2]=useState(false)

  const minutes1=Math.floor(delay1/60)
  const seconds1=Math.floor(delay1%60)

  const minutes2=Math.floor(delay2/60)
  const seconds2=Math.floor(delay2%60)

useEffect(()=>{
  if(isPlaying1){
    timer1.current=setTimeout(()=>{
    setDealy1(delay1-1)
    },1000)
      }
      if(delay1===0){
        clearInterval(timer1.current)
      }

  if(isPlaying2){
        timer2.current=setTimeout(()=>{
        setDealy2(delay2-1)
        },1000)
          }
          if(delay2===0){
            clearInterval(timer2.current)
          }

        return()=>{
          clearInterval(timer1.current)
          clearInterval(timer2.current)
        }
})

  return (
   <div className='container'>
    <div className='row mb-2' style={{height:"350px"}}>
      <button className='btn btn-primary' onClick={()=>{setIsPlaying2(!isPlaying2);setIsPlaying1(isPlaying2)}}>
        <h1>{minutes1}:{seconds1}</h1>
</button>
    </div>
    <div className='row mb-2'  style={{height:"350px"}}>
      <button className='btn btn-primary' onClick={()=>{setIsPlaying1(!isPlaying1);setIsPlaying2(isPlaying1)}}>
      <h1>{minutes2}:{seconds2}</h1>
      </button>
    </div>
   </div>
  )
}

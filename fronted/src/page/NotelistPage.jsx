import React, { useEffect, useState } from 'react'
import Listcomponent from '../component/Listcomponent'
import Addbutton from '../component/Addbutton'
function NotelistPage() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        getnote()

    },[])
    const getnote=async ()=>{
        let response = await fetch("http://127.0.0.1:8000/api/notes")
        let result = await response.json()
        setdata(result)
        //console.log(result)

    }
  return (
    <>
    <div className='notes' >
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{data.length}</p>
        </div>
        <div className='notes-list'>
        {data.map((note,index)=>(
            <Listcomponent key ={index} note = {note}/>
            ))}
            </div>
            <Addbutton/>
    </div>
    </>
  )
}

export default NotelistPage
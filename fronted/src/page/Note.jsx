
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import  ArrowLeft from '../component/arrow-left.svg'
import { useNavigate } from 'react-router-dom'
function Note() {

  let noteid =( useParams().id)
  let navi = useNavigate()
  const [note,setnote] = useState(null)
  useEffect(()=>{
    getnote()

  },[noteid])
  const getnote=async ()=>{
    if (noteid==="new")return
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteid}/`)
    let result = await response.json()
    
      setnote(result)
    

  }
  let updateNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/notes/${noteid}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }
  
  let createNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/note/create/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })}

  let handleChange = (value) => {
    setnote(note => ({ ...note, 'body': value }))
    
    
  }
let handlesubmit=()=>{
  if(noteid!=="new"&&!note.body){
    delet()
  }
  else if(noteid!=="new"){
    updateNote()
  }
  else if(noteid ==="new"&&note!==null){
    createNote()
  }
  navi("/")
}
let delet = async()=>{
  await fetch(`http://127.0.0.1:8000/api/notes/${noteid}/delete/`,{
    method :"DELETE",
    headers: {
      'Content-Type': 'application/json'
  }
  })
  navi("/")


}
  return (
    <div className="note" >
    <div className='note-header'>
    <h3 >
      
      <img  className='notes-title' src={ArrowLeft} onClick={handlesubmit}/>
      
      </h3>
      {noteid!=='new'?(<button type="button" onClick={delet}>DELETE NOTE</button>):(<button type="button" onClick={handlesubmit}>Done</button>)}
      

    </div>
    <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
</div>
    
  )
}

export default Note

//import {Link} from 'react-router-dom'
//<Link to ="/note">
//<img  className='notes-title' src={ArrowLeft} />
//</Link>
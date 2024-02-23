import {Link} from 'react-router-dom'

let timestap = (note)=>{
  return new Date(note.updated).toLocaleDateString()
}
let title = (note)=>{
  let title = note.body.split('\n')[0]
  if(title.Length>45){
    return title.slice(0,45)

  }
  return title
}


function Listcomponent({note}) {
 return (
    <Link to={`note/${note.id}`}>
      <div className='notes-list-item'>

    <h2 >{title(note)}</h2> 
    <p><span>{timestap(note)}</span></p>
      </div>
    </Link>
  )
}

export default Listcomponent
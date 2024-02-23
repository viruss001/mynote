import React from 'react'
import {Link} from 'react-router-dom'
import Addbtn from './add.svg'
function Addbutton() {
  return (
    <Link to ="/note/new" className='floating-button'>
    <img   src={Addbtn} />
    </Link>
      
  )
}

export default Addbutton
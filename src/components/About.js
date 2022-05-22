import React, { useEffect } from 'react'
import { useContext } from 'react'
import notesContext from '../context/notes/noteContex'

const About = () => {
  //const a = useContext(notesContext)
  // useEffect(()=>{
  //   a.update();
  //   // eslint-disable-next-line
  // },[])
  return (
    <div>
      {/* This is About {a.state.name} and he is in {a.state.class} */}
      This is About Page
    </div>
  )
}

export default About


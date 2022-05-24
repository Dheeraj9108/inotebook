import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
  return (
    <div>
        {note.title}
        {note.description}
    </div>
  )
}

export default Noteitem

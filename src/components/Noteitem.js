import React from 'react'

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, accusantium nesciunt rerum id eveniet itaque temporibus suscipit, impedit aliquid, excepturi corrupti architecto recusandae aliquam eaque beatae amet harum sed. Minus voluptate tempora dolor nam.</p>
          </div>
      </div>
    </div>
  )
}

export default Noteitem

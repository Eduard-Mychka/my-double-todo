import React, { useState } from 'react';
import EditModal from './EditModal'

const Item = ({ onClickDelete, todo, title, onDone, onImportant }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myRef = React.createRef();
  const onRemove = () => {
    myRef.current.className="active";
    setTimeout(() => {onClickDelete(todo.id)}, 300)
  } 
  
  let classNames = '';
  
  if (todo.done) {classNames += ' done '} 
  if (todo.important) {classNames += 'important '} 

  return (
    <li ref={myRef} className='list-group-item'>
      <div>
        <i className="fas fa-exclamation ms-2 text-success" onClick={ () => onImportant(todo.id)}></i>
      </div>
      <span className={classNames}>
        <div className="title" onClick={() => onDone(todo.id)}>
          { title }
        </div>
      </span>
      <div className="list-group-buttons">
        <EditModal show={show} handleClose={handleClose} handleShow={handleShow}/>
        <button 
          className="btn-delete btn btn-outline-secondary btn-sm"
          onClick={onRemove}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}

export default Item;
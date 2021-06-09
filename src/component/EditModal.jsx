import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function EditModal({ show, handleShow, handleClose  }) {
  return (
    <>
      <Button 
        bsPrefix="btn-edit btn btn-outline-secondary btn-sm me-1" 
        onClick={ handleShow }>
        <i className="fas fa-pencil-alt"></i>
      </Button>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Close
          </Button>
          <Button variant="primary" onClick={ handleClose }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
import ReactDOM from 'react-dom'

const modalContainer = document.getElementById('modal-root')

const ModalElement = ({ children }) => {
  return <div className="modal__wrapper">{children}</div>
}

const Modal = ({ children }) => {
  return modalContainer
    ? ReactDOM.createPortal(<ModalElement>{children}</ModalElement>, modalContainer)
    : null
}

export default Modal

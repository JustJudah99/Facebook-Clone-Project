import ReactDOM from 'react-dom'
import './styles.css'

const modalContainer = document.getElementById('modal-root')

const ModalElement = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__wrapper"></div>
      <div className="modal__child">{children}</div>
    </div>
  )
}

const Modal = ({ children, visible = false }) => {
  return modalContainer && visible
    ? ReactDOM.createPortal(<ModalElement>{children}</ModalElement>, modalContainer)
    : null
}

export default Modal

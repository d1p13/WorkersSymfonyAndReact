import modal from '../styles/modal.module.css'

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? `${modal.modal} ${modal.active}` : `${modal.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${modal.modal__content} ${modal.active}` : `${modal.modal__content}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;
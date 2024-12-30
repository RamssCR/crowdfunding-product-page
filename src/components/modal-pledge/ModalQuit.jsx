import close from '../../assets/images/icon-close-modal.svg'

// eslint-disable-next-line react/prop-types
function ModalQuit({ onClick }) {
    return <img src={close} alt="Close" className="hover:cursor-pointer" onClick={onClick} />
}

export default ModalQuit
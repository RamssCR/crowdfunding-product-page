// eslint-disable-next-line react/prop-types
function ButtonMobile({ src, onClick, alt = 'image' }) {
    return (
        <img src={src} alt={alt} onClick={onClick} className="relative z-10 lg:hidden" />
    )
}

export default ButtonMobile
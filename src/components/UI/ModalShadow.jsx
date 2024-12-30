// eslint-disable-next-line react/prop-types
function ModalShadow({ children, className }) {
    return (
        <section className={`fixed overflow-y-scroll top-0 left-0 z-20 w-full h-screen flex justify-center items-center bg-black/30 ${className}`}>
            {children}
        </section>
    )
}

export default ModalShadow
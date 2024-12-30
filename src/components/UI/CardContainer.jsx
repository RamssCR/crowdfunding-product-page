// eslint-disable-next-line react/prop-types
function CardContainer({ children, className }) {
    return (
        <article className={`flex flex-col items-center w-84 bg-white border border-gray-200 rounded-lg px-4 py-8 lg:px-12 lg:w-[55rem] ${className}`}>
            {children}
        </article>
    )
}

export default CardContainer
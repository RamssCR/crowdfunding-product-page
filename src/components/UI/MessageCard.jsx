// eslint-disable-next-line react/prop-types
function MessageCard({ className, children }) {
    return (
        <article className={`bg-white w-84 flex flex-col items-center gap-3 py-10 px-5 rounded-lg lg:w-[36em] lg:px-16 ${className}`}>
            {children}
        </article>
    )
}

export default MessageCard
// eslint-disable-next-line react/prop-types
function Button({ children, className, onClick, primary = 'bg-teal-500 hover:bg-teal-400 hover:cursor-pointer' }) {
    return <button className={`${primary} font-semibold text-slate-50 py-4 rounded-full ${className}`} onClick={onClick}>{children}</button>
}

export default Button
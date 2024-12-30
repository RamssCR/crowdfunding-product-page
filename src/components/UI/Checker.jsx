// eslint-disable-next-line react/prop-types
function Checker({ checked = false, onClick, id }) {
    return (
        <div className="size-8 rounded-full border-2 p-[0.4em] border-slate-200 hover:cursor-pointer" onClick={() => onClick(id)}>
            {checked && <div className="w-full- h-full bg-teal-500 rounded-full hover:bg-teal-400"></div>}
        </div>
    )
}

export default Checker
// eslint-disable-next-line react/prop-types
function ItemAmount({ className, amount }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <h1 className="text-2xl font-bold">{amount}</h1>
            <div className="text-gray-500">left</div>
        </div>
    )
}

export default ItemAmount
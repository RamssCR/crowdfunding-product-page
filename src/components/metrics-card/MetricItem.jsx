// eslint-disable-next-line react/prop-types
function MetricItem({ itemValue, isCurrency = false, concept, lastItem = false }) {
    return (
        <article className={`flex flex-col gap-3 items-center text-center ${lastItem && 'border-none'} lg:items-start lg:border-r lg:border-slate-300`}>
            <h1 className="text-3xl font-bold">{isCurrency ? `$${itemValue}` : itemValue}</h1>
            <span className="text-slate-500 font-light">{concept}</span>
            <div className={`w-24 border-b border-slate-300 mt-4 ${lastItem && 'hidden'} lg:hidden`}></div>
        </article>
    )
}

export default MetricItem
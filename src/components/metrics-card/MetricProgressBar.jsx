// eslint-disable-next-line react/prop-types
function MetricProgressBar({ percentage }) {
    return (
        <div className="w-full h-4 bg-slate-100 overflow-hidden rounded-full">
            <div style={{width: `${percentage}%`}} className={`h-full bg-teal-500 rounded-full`}></div>
        </div>
    )
}

export default MetricProgressBar
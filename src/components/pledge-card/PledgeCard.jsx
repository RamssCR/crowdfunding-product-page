import { useContext } from "react"
import { appContext } from "../../context/appContext"
import Button from "../UI/Button"

// eslint-disable-next-line react/prop-types
function PledgeCard({ id, perk, pledgableAmount, description, amountLeft }) {
    const { toggleModalView, selectPledge } = useContext(appContext)

    return (
        <article className={`flex flex-col gap-6 border items-start border-slate-300 rounded-lg p-6 ${amountLeft === 0 && 'opacity-50'}`}>
            <div className="flex flex-col gap-1 lg:w-full lg:flex-row lg:justify-between">
                <h2 className="font-bold text-xl">{perk}</h2>
                <span className="text-teal-500 font-semi-bold">Pledge ${pledgableAmount} or more</span>
            </div>
            <p className="text-[0.93em] text-gray-500">{description}</p>
            <div className="flex flex-col gap-4 lg:w-full lg:flex-row lg:justify-between lg:items-center">
                <div className="flex items-center gap-2 mb-4 lg:mb-0">
                    <h1 className="text-3xl font-bold">{amountLeft}</h1>
                    <span className="text-gray-500">left</span>
                </div>
                <Button 
                    className={`px-9 lg:px-11 lg:w-fit ${amountLeft === 0 && 'px-10 lg:px-12'}`}
                    primary={amountLeft === 0 ? 'bg-gray-300 hover:bg-gray-300' : 'bg-teal-500 hover:bg-teal-400'}
                    onClick={() => {
                        selectPledge(id)
                        toggleModalView()
                    }}
                >
                    {amountLeft === 0 ? 'Out of Stock' : 'Select Reward'}
                </Button>
            </div>
        </article>
    )
}

export default PledgeCard
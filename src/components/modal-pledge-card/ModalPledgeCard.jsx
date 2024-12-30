/* eslint-disable react/prop-types */
import { useContext } from "react"
import { appContext } from "../../context/appContext"
import Checker from "../UI/Checker"
import ItemAmount from "./ItemAmount"
import PledgeInput from './PledgeInput'

function ModalPledgeCard({ className, pledge }) {
    const { selectedPlegde, selectPledge } = useContext(appContext)
    const isAmountLeft = pledge.amountLeft !== -1

    const isSelected = pledge.id === selectedPlegde

    return (
        <article className={`border border-slate-300 rounded-lg w-full ${isSelected && 'border-2 border-teal-500'} ${className} ${pledge.amountLeft === 0 && 'opacity-50'}`}>
            <section className="flex flex-col gap-4 py-7 px-6 lg:px-8">
                <div className="flex items-center gap-5">
                    <Checker checked={isSelected} onClick={selectPledge} id={pledge.id} />
                    <div className="flex flex-col gap-1 lg:flex-row lg:gap-6">
                        <h2 className="font-bold">{pledge.perk}</h2>
                        <span className="text-teal-400 font-semibold">{pledge.pledgableAmount ? `Pledge $${pledge.pledgableAmount} or more` : ''}</span>
                    </div>
                    {isAmountLeft && <ItemAmount amount={pledge.amountLeft} className="hidden lg:flex lg:ml-auto" />}
                </div>
                <p className="text-gray-400 text-[0.96em] leading-[1.6em] lg:leading-7 lg:pl-[3.3em]">{pledge.description}</p>
                {isAmountLeft && <ItemAmount amount={pledge.amountLeft} className="lg:mb-0 lg:hidden" />}
            </section>
            {isSelected && <PledgeInput amountLeft={pledge.amountLeft} minPledge={pledge.pledgableAmount} />}
        </article>
    )
}

export default ModalPledgeCard
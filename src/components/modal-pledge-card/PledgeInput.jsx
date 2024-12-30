import { useContext } from "react"
import { appContext } from "../../context/appContext"
import Button from "../UI/Button"
import TextBox from "../UI/TextBox"

// eslint-disable-next-line react/prop-types
function PledgeInput({ amountLeft, minPledge }) {
    const { pledgeAmount, setPledgeAmount, setShowThankYouModal, increaseMetrics } = useContext(appContext)
    const isValidAmount = amountLeft !== -1
    const isInvalidInput = amountLeft === 0 || pledgeAmount < minPledge

    return (
        <section className="flex flex-col gap-4 border-t border-gray-300 px-5 py-6 lg:px-8 lg:flex-row lg:justify-between lg:items-center">
            <span className="text-center block w-full lg:w-fit text-gray-500 mt-2 lg:mt-0">{isValidAmount ? 'Enter your pledge' : 'Follow our work!'}</span>
            <div className="flex justify-between items-center gap-4">
                {isValidAmount && (
                    <TextBox 
                        type="currency" 
                        minPledge={minPledge}
                        onInput={(e) => setPledgeAmount(e.target.value)}
                        value={pledgeAmount}
                        amountLeft={amountLeft} 
                    />
                )}
                <Button 
                    className={`w-full px-6`} 
                    primary={isInvalidInput ? 'bg-gray-300 hover:bg-gray-300 hover:cursor-auto' : 'bg-teal-500 hover:bg-teal-400 hover:cursor-pointer'}
                    onClick={() => {
                        if (isInvalidInput) return
                        if (pledgeAmount >= 25) increaseMetrics(pledgeAmount)
                        setShowThankYouModal(true)
                }}>
                    Continue
                </Button>
            </div>
        </section>
    )
}

export default PledgeInput
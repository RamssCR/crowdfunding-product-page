import { useContext, useEffect } from 'react'
import { appContext } from '../../context/appContext'
import dollarIcon from '../../assets/images/dollar-sign-solid.svg'


// eslint-disable-next-line react/prop-types
function TextBox({ minPledge, className, onInput, value, amountLeft = 0, type = 'text' }) {
    const { setPledgeAmount } = useContext(appContext)
    const pledgeValue = minPledge ?? 0

    useEffect(() => {
        setPledgeAmount(pledgeValue)
    }, [pledgeValue, setPledgeAmount])

    const textboxType = type === 'currency' ? (
        <>
            <img src={dollarIcon} alt='Pledge' className='size-5' />
            <input 
                type="number"
                name='currency'
                value={value} 
                min={pledgeValue}
                max={10000} 
                className="outline-none font-bold disabled:bg-transparent"
                onInput={onInput}
                disabled={amountLeft === 0}
            />
        </>
    ) : (
        <>
            <input type="text" name='message' className="outline-none font-semibold w-16" placeholder="Send us a message..." />
        </>
    )

    return (
        <div className={`border border-gray-300 py-4 px-6 rounded-full ${className}`}>
            <div className="flex items-center gap-3">
                {textboxType}
            </div>
        </div>
    )
}

export default TextBox
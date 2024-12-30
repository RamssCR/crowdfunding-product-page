import { useContext } from 'react'
import { appContext } from '../../context/appContext'
import MessageCard from '../UI/MessageCard'
import checkIcon from '../../assets/images/icon-check.svg'
import Button from '../UI/Button'

function ThanksCard() {
    const { resetValues } = useContext(appContext)

    return (
        <MessageCard>
            <img src={checkIcon} alt="Thank you!" className='size-20 lg:size-24 mb-6' />
            <h2 className="text-[1.4em] font-bold">Thanks for your support!</h2>
            <p className="text-gray-400 text-center leading-7">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <Button className="px-12 mt-6" onClick={resetValues}>Got it!</Button>
        </MessageCard>
    )
}

export default ThanksCard
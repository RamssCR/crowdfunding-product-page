import { useContext } from "react"
import { appContext } from '../../context/appContext'
import CardContainer from "../UI/CardContainer"
import PledgeCard from "../pledge-card/PledgeCard"

function AboutCard() {
    const { pledges } = useContext(appContext)
    const filteredPledges = pledges.filter(pledge => pledge.amountLeft !== -1)
    const mappedPledges = filteredPledges.map(pledge => {
        return (
            <PledgeCard
                key={pledge.id}
                id={pledge.id}
                perk={pledge.perk}
                pledgableAmount={pledge.pledgableAmount}
                description={pledge.description}
                amountLeft={pledge.amountLeft}
            />
        )
    })

    return (
        <CardContainer className="px-7 gap-8">
            <h2 className="font-bold w-full text-lg text-left">About this project</h2>
            <p className="text-[0.93em] text-gray-500">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.
                Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you
                stay focused on the task at hand.
            </p>
            <p className="text-[0.93em] text-gray-500">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
                your computer to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <section className="flex flex-col gap-5">
                {mappedPledges}
            </section>
        </CardContainer>
    )
}

export default AboutCard
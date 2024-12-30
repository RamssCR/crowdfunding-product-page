import { useContext } from "react"
import { appContext } from '../../context/appContext'
import CardContainer from "../UI/CardContainer"
import ModalQuit from "./ModalQuit"
import ModalPledgeCard from "../modal-pledge-card/ModalPledgeCard"

function ModalPledge() {
    const { toggleModalView, pledges, selectPledge } = useContext(appContext)
    const modalPledges = pledges.map(pledge => <ModalPledgeCard key={pledge.id} pledge={pledge} />)

    return (
        <CardContainer className="px-6 gap-6 mb-40 lg:mb-0 lg:gap-3 lg:ml-3">
            <div className="w-full flex items-center justify-between">
                <h2 className="font-bold text-lg lg:text-xl">Back this project</h2>
                <ModalQuit onClick={() => {
                    selectPledge(0)
                    toggleModalView()
                }} />
            </div>
            <p className="text-[0.98em] text-gray-400 block w-full mb-6">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            {modalPledges}
        </CardContainer>
    )
}

export default ModalPledge
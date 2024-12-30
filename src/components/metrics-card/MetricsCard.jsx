import { useContext } from "react"
import { appContext } from "../../context/appContext"
import { percentageBar } from '../../utils/percentageBar'
import { currencyFormat } from '../../utils/currencyFormat'
import CardContainer from "../UI/CardContainer"
import MetricItem from "./MetricItem"
import MetricProgressBar from "./MetricProgressBar"

function MetricsCard() {
    const { metricData } = useContext(appContext)

    return (
        <CardContainer className="gap-10 px-6 pb-12">
            <section className="w-full flex flex-col gap-7 lg:grid lg:grid-cols-3">
                <MetricItem itemValue={currencyFormat(metricData.backedMoney)} isCurrency={true} concept="of $100,000 backed" />
                <MetricItem itemValue={currencyFormat(metricData.backers)} concept="total backers" />
                <MetricItem itemValue={metricData.daysLeft} concept="days left" lastItem={true} />
            </section>
            <MetricProgressBar percentage={percentageBar(metricData.backedMoney, 100000)} />
        </CardContainer>
    )
}

export default MetricsCard
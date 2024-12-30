import { useContext } from "react"
import { appContext } from "./context/appContext"
import Header from "./components/header/Header"
import ProductCard from "./components/product-card/ProductCard"
import MetricsCard from "./components/metrics-card/MetricsCard"
import AboutCard from "./components/about-card/AboutCard"
import ModalShadow from "./components/UI/ModalShadow"
import ModalPledge from "./components/modal-pledge/ModalPledge"
import ThanksCard from "./components/thanks-card/ThanksCard"

function App() {
  const { showPledgeModal, showThankYouModal } = useContext(appContext)

  return (
    <main className="flex flex-col w-full mx-auto mb-10 items-center max-w-108 lg:mx-0 lg:max-w-full">
      <Header />
      <section className="flex flex-col gap-6">
        <ProductCard />
        <MetricsCard />
        <AboutCard />
      </section>
      {showPledgeModal && (
        <ModalShadow className={!showThankYouModal && 'pt-[55em] lg:pt-[25em] lg:pb-20'}>
          {!showThankYouModal ? <ModalPledge /> : <ThanksCard />}
        </ModalShadow>
      )}
    </main>
  )
}

export default App

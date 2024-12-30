import { useState, useEffect } from 'react'
import { appContext } from '../context/appContext'

// eslint-disable-next-line react/prop-types
function PledgeProvider({ children }) {
    const [pledges, setPledges] = useState([])
    const [localError, setLocalError] = useState('')
    const [showPledgeModal, setShowPledgeModal] = useState(false)
    const [selectedPlegde, setSelectedPledge] = useState(0)
    const [pledgeAmount, setPledgeAmount] = useState(0)
    const [showThankYouModal, setShowThankYouModal] = useState(false)
    const [metricData, setMetricData] = useState({
        backedMoney: 89914,
        backers: 5007,
        daysLeft: 56
    }) 

    useEffect(() => {
        const fetchPledges = async () => {
            try {
                const response = await fetch('/data.json')
                const data = await response.json()
                setPledges(data)
            } catch (error) {
                console.error(error)
                setLocalError(error.message)
            }
        }
        fetchPledges()
    }, [])

    const toggleModalView = () => setShowPledgeModal(prev => !prev)
    const selectPledge = (id) => setSelectedPledge(id)

    const increaseMetrics = (pledge) => {
        setMetricData(prev => {
            return {
                backedMoney: prev.backedMoney + parseInt(pledge),
                backers: prev.backers + 1,
                daysLeft: prev.daysLeft
            }
        })
    }

    const resetValues = () => {
        setPledgeAmount(0)
        setShowThankYouModal(false)
        selectPledge(0)
        toggleModalView()
    }

    return (
        <appContext.Provider value={{ 
            pledges, 
            localError,
            selectedPlegde,
            pledgeAmount,
            showThankYouModal,
            showPledgeModal,
            metricData,
            toggleModalView,
            selectPledge,
            increaseMetrics,
            resetValues,
            setPledgeAmount,
            setShowThankYouModal,
            setMetricData
        }}>
            {children}
        </appContext.Provider>
    )
}

export default PledgeProvider
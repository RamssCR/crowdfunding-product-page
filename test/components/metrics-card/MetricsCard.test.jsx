import { render, screen, act } from '@testing-library/react'
import { test, expect } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import MetricsCard from '../../../src/components/metrics-card/MetricsCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'

test('renders the metric component with the rendered data from the context', async () => {
    await act(async () =>{
        render(
            <PledgeProvider>
                <MetricsCard />
            </PledgeProvider>
        )
    })

    const item = screen.getByText('$89.914')
    expect(item).to.exist

    const item2 = screen.getByText('56')
    expect(item2.getAttribute('class')).to.not.contain('hidden')
})

test('renders the metric component with a mocked context data', () => {
    const mockedMetricData = {
        metricData: {
            backedMoney: 50000,
            backers: 1048,
            daysLeft: 5
        }
    }

    render(
        <appContext.Provider value={mockedMetricData}>
            <MetricsCard />
        </appContext.Provider>
    )

    const item = screen.getByText('$50.000')
    expect(item).to.exist
    expect(item.getAttribute('class')).to.contain('font-bold')
})
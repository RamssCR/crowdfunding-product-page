import { render, screen, waitFor } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import AboutCard from '../../../src/components/about-card/AboutCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'

test('renders the about card integrated with the context', async () => {
    vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        json: () => Promise.resolve([
            {
                id: 1,
                perk: 'Bamboo Stand',
                PledgableAmount: 25,
                description: 'You get an ergonomic bamboo monitor stand.',
                amountLeft: 101
            }
        ])
    })

    render(
        <PledgeProvider>
            <AboutCard />
        </PledgeProvider>
    )

    const renderedPerk = await waitFor(() => screen.getByText('Bamboo Stand'))
    expect(renderedPerk).to.exist

    const button = await waitFor(() => screen.getByRole('button', { name: 'Select Reward' }))
    expect(button).to.exist
})

test('renders the about card with a mocked context', () => {
    const mockedData = {
        pledges: [
            {
                id: 1,
                perk: 'Black Edition Stand',
                PledgableAmount: 25,
                description: 'You get an ergonomic Black Edition Stand with 2 shirts.',
                amountLeft: 0
            }
        ]
    }

    render(
        <appContext.Provider value={mockedData}>
            <AboutCard />
        </appContext.Provider>
    )

    const renderedPerk = screen.getByText('Black Edition Stand')
    expect(renderedPerk).to.exist

    const button = screen.getByRole('button', { name: 'Out of Stock' })
    expect(button).to.exist
})
import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import ThanksCard from '../../../src/components/thanks-card/ThanksCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'

test('renders the thanks card component with integrated context', () => {
    render(
        <PledgeProvider>
            <ThanksCard />
        </PledgeProvider>
    )

    const titleText = screen.getByText('Thanks for your support!')
    expect(titleText).to.exist

    const checkImg = screen.getByRole('img', { name: 'Thank you!' })
    expect(checkImg).to.exist

    const button = screen.getByRole('button', { name: 'Got it!' })
    expect(button).to.exist

    fireEvent.click(button)
    expect(button).to.exist
})

test('renders the thanks card component with a mocked context', () => {
    const mockedEvents = {
        resetValues: vi.fn()
    }

    render(
        <appContext.Provider value={mockedEvents}>
            <ThanksCard />
        </appContext.Provider>
    )

    const titleText = screen.getByText('Thanks for your support!')
    expect(titleText).to.exist

    const checkImg = screen.getByRole('img', { name: 'Thank you!' })
    expect(checkImg).to.exist

    const button = screen.getByRole('button', { name: 'Got it!' })
    expect(button).to.exist

    fireEvent.click(button)
    expect(mockedEvents.resetValues).toBeCalledTimes(1)
})
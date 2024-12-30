import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, vi, describe } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import PledgeInput from '../../../src/components/modal-pledge-card/PledgeInput'
import PledgeProvider from '../../../src/provider/PledgeProvider'

test('renders the pledge input component with the integrated context', async () => {
    render(
        <PledgeProvider>
            <PledgeInput minPledge={0} amountLeft={10} />
        </PledgeProvider>
    )

    const button = screen.getByRole('button', { name: 'Continue' })
    expect(button).to.exist
    expect(button.getAttribute('class')).to.contain('bg-teal-500')

    const input = screen.getByRole('spinbutton')

    fireEvent.input(input, { target: { value: '25' } })
    fireEvent.click(button)

    expect(button).to.exist
})

describe('PledgeInput', () => {
    const mockedEvents = {
        pledgeAmount: 25,
        setPledgeAmount: vi.fn(),
        setShowThankYouModal: vi.fn(),
        increaseMetrics: vi.fn()
    }

    test('renders the pledge input component with a mocked context', () => {
        render(
            <appContext.Provider value={mockedEvents}>
                <PledgeInput minPledge={25} amountLeft={10} />
            </appContext.Provider>
        )
    
        const button = screen.getByRole('button', { name: 'Continue' })
        const instructionText = screen.getByText('Enter your pledge')
        expect(instructionText).to.exist
    
        fireEvent.click(button)
        expect(mockedEvents.increaseMetrics).toBeCalled()
        expect(mockedEvents.setShowThankYouModal).toBeCalled()
    })
    
    test('renders the pledge input component with a mocked context and a -1 amount', () => {
        render(
            <appContext.Provider value={mockedEvents}>
                <PledgeInput minPledge={25} amountLeft={-1} />
            </appContext.Provider>
        )
    
        const instructionText = screen.getByText('Follow our work!')
        expect(instructionText).to.exist
    })

    test('renders the pledge input component with a mocked context and a 0 amount', () => {
        render(
            <appContext.Provider value={mockedEvents}>
                <PledgeInput minPledge={25} amountLeft={0} />
            </appContext.Provider>
        )
    
        const button = screen.getByRole('button', { name: 'Continue' })
    
        fireEvent.click(button)
        expect(mockedEvents.increaseMetrics).toBeCalled()
        expect(mockedEvents.setShowThankYouModal).toBeCalled()
    })
})
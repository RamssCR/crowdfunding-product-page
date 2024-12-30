import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, vi, describe } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import PledgeCard from '../../../src/components/pledge-card/PledgeCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'


describe('PledgeCard', () => {
    const mockObject = {
        id: 1,
        perk: 'test perk',
        pledgableAmount: 25,
        description: 'test description',
        amountLeft: 5
    }

    const mockObject2 = {
        id: 2,
        perk: 'test perk 2',
        pledgableAmount: 75,
        description: 'test description',
        amountLeft: 0
    }

    const mockedEvents = {
        toggleModalView: vi.fn(),
        selectPledge: vi.fn()
    }

    test('renders the pledge card component integrated with the context', () => {
        render(
            <PledgeProvider>
                <PledgeCard 
                    id={mockObject2.id} 
                    perk={mockObject2.perk} 
                    pledgableAmount={mockObject2.pledgableAmount} 
                    description={mockObject2.description} 
                    amountLeft={mockObject2.amountLeft} 
                />
            </PledgeProvider>
        )
    
        const button = screen.getByRole('button', { name: 'Out of Stock' })
        expect(button).to.exist
        expect(button.getAttribute('class')).to.contain('bg-gray-300')
    })

    test('renders the pledge card component with a mocked context', () => {
        render(
            <appContext.Provider value={mockedEvents}>
                <PledgeCard 
                    id={mockObject.id} 
                    perk={mockObject.perk} 
                    pledgableAmount={mockObject.pledgableAmount} 
                    description={mockObject.description} 
                    amountLeft={mockObject.amountLeft} 
                />
            </appContext.Provider>
        )

        const button = screen.getByRole('button', { name: 'Select Reward' })
        expect(button).to.exist
        expect(button.getAttribute('class')).to.contain('bg-teal-500')
        

        fireEvent.click(button)
        expect(mockedEvents.toggleModalView).toHaveBeenCalled()
        expect(mockedEvents.selectPledge).toHaveBeenCalled()
    })
})
import { render, screen } from '@testing-library/react'
import { test, expect, vi, describe } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import ModalPledgeCard from '../../../src/components/modal-pledge-card/ModalPledgeCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'

describe('ModalPledgeCard', () => {
    const mockPledge = {
        id: 1,
        perk: 'test perk',
        pledgableAmount: 25,
        description: 'test description',
        amountLeft: 5
    }

    const mockPledges = [
        {
            id: 2,
            perk: 'test perk 2',
            pledgableAmount: 0,
            description: 'test description 2',
            amountLeft: -1
        }
    ]

    const mockEvents = {
        selectedPledge: 2,
        selectPledge: vi.fn()
    }

    test('renders modal pledge card component with integrated context', () => {
        render(
            <PledgeProvider>
                <ModalPledgeCard pledge={mockPledge} />
            </PledgeProvider>
        )

        const renderedPerk = screen.getByText('test perk')
        expect(renderedPerk).to.exist
        expect(renderedPerk.getAttribute('class')).to.contain('font-bold')
    })

    test('renders modal pledge card component with a mocked context and a -1 amount', () => {
        const { container } = render(
            <appContext.Provider value={mockEvents}>
                <ModalPledgeCard className="p-5" pledge={mockPledges[0]} />
            </appContext.Provider>
        )

        const isContainerSelected = container.querySelector('.border-2')
        expect(isContainerSelected).to.exist
    })
})
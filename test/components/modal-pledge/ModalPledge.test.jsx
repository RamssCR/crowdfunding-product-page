import { fireEvent, render, screen } from '@testing-library/react'
import { test, expect, describe, vi } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import ModalPledge from '../../../src/components/modal-pledge/ModalPledge'

describe('ModalPledge', () => {
    const mockedEvents = {
        toggleModalView: vi.fn(),
        selectPledge: vi.fn(),
        pledges: [
            {
                id: 2,
                perk: 'test perk 2',
                pledgableAmount: 75,
                description: 'test description',
                amountLeft: 12
            }
        ]
    }

    test('renders the modal pledge component with a mocked context', () => {
        render(
            <appContext.Provider value={mockedEvents}>
                <ModalPledge />
            </appContext.Provider>
        )

        const closeIcon = screen.getByRole('img', { name: 'Close' })
        expect(closeIcon).to.exist

        fireEvent.click(closeIcon)
        expect(mockedEvents.selectPledge).toBeCalled()
        expect(mockedEvents.toggleModalView).toBeCalled()
    })
})
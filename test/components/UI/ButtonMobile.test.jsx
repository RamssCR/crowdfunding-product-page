import { render, screen, fireEvent } from '@testing-library/react'
import { test, describe, expect, vi } from 'vitest'
import ButtonMobile from '../../../src/components/UI/ButtonMobile'
import hamburgerIcon from '../../../src/assets/images/icon-hamburger.svg'
import closeIcon from '../../../src/assets/images/icon-close-menu.svg'

describe('ButtonMobile', () => {
    const mockActivateModal = vi.fn()

    test('renders the hamburger icon', () => {
        render(
            <ButtonMobile 
                src={hamburgerIcon}
                alt='Navigate'
                onClick={mockActivateModal}
            />
        )

        const hamburgerImage = screen.getByRole('img', { name: 'Navigate' })
        expect(hamburgerImage).to.exist
    })

    test('renders the close icon', () => {
        render(
            <ButtonMobile
                src={closeIcon}
                alt='Close'
                onClick={mockActivateModal}
            />
        )

        const closeImage = screen.getByRole('img', { name: 'Close' })
        expect(closeImage).to.exist
    })

    test('calls the mocker function when image is clicked', () => {
        render(
            <ButtonMobile
                src={hamburgerIcon}
                alt='Navigate'
                onClick={mockActivateModal}
            />
        )

        const hamburgerImage = screen.getByRole('img', { name: 'Navigate' })
        fireEvent.click(hamburgerImage)

        expect(mockActivateModal).toHaveBeenCalledTimes(1)
    })
})
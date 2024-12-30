import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, describe, vi } from 'vitest'
import Button from '../../../src/components/UI/Button'

describe('Button', () => {
    const mockHandleClick = vi.fn()

    test('renders the button and the sent children prop correctly', () => {
        render(<Button onClick={mockHandleClick}>test button</Button>)

        const button = screen.getByText('test button')
        expect(button).to.exist
    })

    test('calls the click handler mocker function when cliked', () => {
        render(<Button onClick={mockHandleClick}>Try with function</Button>)

        const button = screen.getByText('Try with function')
        fireEvent.click(button)
        expect(mockHandleClick).toBeCalledTimes(1)
    })
})
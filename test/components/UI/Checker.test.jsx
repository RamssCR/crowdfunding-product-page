import { render, fireEvent } from '@testing-library/react'
import { test, expect, describe, vi } from 'vitest'
import Checker from '../../../src/components/UI/Checker'

describe('Checker', () => {
    const mockChecker = vi.fn()

    test('renders the checker unmarked', () => {
        const { container } = render(<Checker onClick={mockChecker} />)
        
        const isNotMarked = container.querySelector('.bg-teal-500')
        expect(isNotMarked).to.not.exist
    })

    test('renders the checker marked', () => {
        const { container } = render(<Checker checked={true} onClick={mockChecker} />)
        
        const isNotMarked = container.querySelector('.bg-teal-500')
        expect(isNotMarked).to.exist
    })

    test('calls the checker mocker function when clicked', () => {
        const { container } = render(<Checker onClick={mockChecker} />)
        
        const isNotMarked = container.querySelector('.size-8')
        fireEvent.click(isNotMarked)
        expect(mockChecker).toBeCalledTimes(1)
    })
})
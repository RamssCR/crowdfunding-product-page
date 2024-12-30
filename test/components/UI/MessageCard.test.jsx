import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import MessageCard from '../../../src/components/UI/MessageCard'

test('renders the card container and its children correctly', () => {
    const testContainer = (
        <MessageCard>
            <h1>Texto prueba</h1>
        </MessageCard>
    )
    render(testContainer)

    const container = screen.getByText('Texto prueba')
    expect(container).to.exist
})
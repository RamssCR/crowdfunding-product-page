import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import CardContainer from '../../../src/components/UI/CardContainer'

test('renders the card container and its children correctly', () => {
    const testContainer = (
        <CardContainer>
            <h1>Texto prueba</h1>
        </CardContainer>
    )
    render(testContainer)

    const container = screen.getByText('Texto prueba')
    expect(container).to.exist
})
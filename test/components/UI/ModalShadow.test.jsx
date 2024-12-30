import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import ModalShadow from '../../../src/components/UI/ModalShadow'

test('renders the card container and its children correctly', () => {
    const testContainer = (
        <ModalShadow>
            <h1>Texto prueba</h1>
        </ModalShadow>
    )
    render(testContainer)

    const container = screen.getByText('Texto prueba')
    expect(container).to.exist
})
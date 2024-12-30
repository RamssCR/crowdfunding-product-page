import { render } from '@testing-library/react'
import { test, expect } from 'vitest'
import Header from '../../../src/components/header/Header'

test('renders Header properly', () => {
    const { container } = render(<Header />)
    const foundClass = container.querySelector('.bg-no-repeat')
    expect(foundClass).to.exist
})
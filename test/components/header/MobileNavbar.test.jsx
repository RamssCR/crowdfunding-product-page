import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import MobileNavbar from '../../../src/components/header/MobileNavbar'

test('renders the mobile navbar component', () => {
    render(<MobileNavbar />)
    const foundAnchor = screen.getByText('About')
    expect(foundAnchor).to.exist
})
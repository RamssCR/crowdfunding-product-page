import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import ProductCard from '../../../src/components/product-card/ProductCard'
import PledgeProvider from '../../../src/provider/PledgeProvider'

test('renders the product card integrated with the context correctly', () => {
    render(
        <PledgeProvider>
            <ProductCard />
        </PledgeProvider>
    )

    const titleText = screen.getByText('Mastercraft Bamboo Monitor Riser')
    expect(titleText.getAttribute('class')).to.contain('mt-1')

    const renderedButton = screen.getByRole('button', { name: 'Back this project' })
    expect(renderedButton).to.exist
})

test('toggles bookmark state when clicked', () => {
    render(
        <PledgeProvider>
            <ProductCard />
        </PledgeProvider>
    )

    const renderedBookmark = screen.getByRole('button', { name: /bookmark/i })
    const bookmarkText = screen.getByText('Bookmark')

    fireEvent.click(renderedBookmark)
    expect(bookmarkText.textContent).to.be.equal('Bookmarked')
})

test('calls toggleModalView when the button is clicked', () => {
    const mockToggleView = vi.fn()

    render(
        <appContext.Provider value={{ toggleModalView: mockToggleView }}>
            <ProductCard />
        </appContext.Provider>
    )

    const renderedButton = screen.getByRole('button', { name: 'Back this project' })
    fireEvent.click(renderedButton)
    expect(mockToggleView).toHaveBeenCalled()
})
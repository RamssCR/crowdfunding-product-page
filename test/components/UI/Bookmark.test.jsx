import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, describe, vi } from 'vitest'
import Bookmark from '../../../src/components/UI/Bookmark'
import bookmarkIcon from '../../../src/assets/images/icon-bookmark.svg'

describe('Bookmark', () => {
    const mockBookmark = vi.fn()

    test('renders the bookmark image correctly', () => {
        render(<Bookmark onClick={mockBookmark} />)

        const image = screen.getByRole('img', { name: 'Bookmark' })
        expect(image.getAttribute('src')).to.be.equal(bookmarkIcon)
    })

    test('renders the icon bookmarked if marked prop is true', () => {
        render(<Bookmark marked={true} onClick={mockBookmark} />)
        
        const isBookmarked = screen.getByText('Bookmarked')
        expect(isBookmarked).to.exist
    })

    test('renders the icon non-bookmarked if marked prop is false or not sent', () => {
        render(<Bookmark onClick={mockBookmark} />)
        const isBookmarked = screen.getByText('Bookmark')
        expect(isBookmarked).to.exist
    })

    test('calls the bookmark mocker function when cliked', () => {
        render(<Bookmark onClick={mockBookmark} />)

        const image = screen.getByRole('img', { name: 'Bookmark' })
        fireEvent.click(image)
        expect(mockBookmark).toBeCalledTimes(1)
    })
})
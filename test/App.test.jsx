import { fireEvent, render, screen, act } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../src/App'
import PledgeProvider from '../src/provider/PledgeProvider'

test('renders the app component with integrated context', async () => {
    await act(async () => {
        render(
            <PledgeProvider>
                <App />
            </PledgeProvider>
        )
    })

    const button = screen.getByRole('button', { name: 'Back this project' })
    expect(button).to.exist

    fireEvent.click(button)

    const imgClose = screen.getByRole('img', { name: 'Close' })
    expect(imgClose).to.exist
})
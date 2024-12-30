import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { appContext } from '../../../src/context/appContext'
import PledgeProvider from '../../../src/provider/PledgeProvider'
import TextBox from '../../../src/components/UI/TextBox'

test('renders as a text input field', () => {
    render(
        <PledgeProvider>
            <TextBox />
        </PledgeProvider>
    )

    const textInput = screen.getByRole('textbox')
    expect(textInput.getAttribute('type')).to.be.equal('text')
    expect(textInput.getAttribute('placeholder')).to.be.equal('Send us a message...')
})

test('renders as a text currency field', () => {
    render(
        <PledgeProvider>
            <TextBox type='currency' />
        </PledgeProvider>
    )

    const textInput = screen.getByRole('spinbutton')
    expect(textInput.getAttribute('type')).to.be.equal('number')

    const currencyIcon = screen.getByRole('img', { name: 'Pledge' })
    expect(currencyIcon).to.exist
})

test('renders as a text currency field with a mocked context', () => {
    const mockedContextData = {
        setPledgeAmount: vi.fn()
    }

    render(
        <appContext.Provider value={mockedContextData}>
            <TextBox type='currency' value={24} />
        </appContext.Provider>
    )

    const textInput = screen.getByRole('spinbutton')
    expect(textInput.getAttribute('type')).to.be.equal('number')

    const currencyIcon = screen.getByRole('img', { name: 'Pledge' })
    expect(currencyIcon).to.exist
})

test('renders correctly with a custom minPledge', () => {
    const mockedContextData = {
        setPledgeAmount: vi.fn()
    };

    render(
        <appContext.Provider value={mockedContextData}>
            <TextBox type="currency" minPledge={50} value={0} />
        </appContext.Provider>
    );

    const textInput = screen.getByRole('spinbutton')
    expect(textInput.getAttribute('min')).to.be.equal("50")
})

test('calls setPledgeAmount on input event', () => {
    const mockedContextData = {
        pledgeAmount: '75',
        setPledgeAmount: vi.fn()
    }

    render(
        <appContext.Provider value={mockedContextData}>
            <TextBox type='currency' minPledge={'75'} />
        </appContext.Provider>
    )

    const textInput = screen.getByRole('spinbutton');
    textInput.value = '75';
    textInput.dispatchEvent(new Event('input'));

    expect(mockedContextData.setPledgeAmount).toHaveBeenCalledWith('75');
})
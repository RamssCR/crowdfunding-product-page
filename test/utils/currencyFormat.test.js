import { test, expect } from 'vitest'
import { currencyFormat } from '../../src/utils/currencyFormat'

test('returns an integer converted into a currency format', () => {
    const currency = currencyFormat(30000)
    expect(currency).to.be.equal('30.000')
})
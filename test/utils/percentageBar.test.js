import { test, expect } from 'vitest'
import { percentageBar } from '../../src/utils/percentageBar'

test('returns the percentage of a current value whose max is 500', () => {
    const percentage = percentageBar(450, 500)
    expect(percentage).to.be.equal(90)
})
import { describe, expect, it } from 'vitest'

import { renderWithRouter, screen, waitFor } from './test-utils'

describe('Index Route', () => {
  it('renders the heading', async () => {
    renderWithRouter(<div />, { initialEntries: ['/'] })

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('StrategyOS')
    })
  })
})

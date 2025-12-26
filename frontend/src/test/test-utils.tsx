import type { ReactElement } from 'react'

import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { render, type RenderOptions } from '@testing-library/react'

import { routeTree } from '../routeTree.gen'

function createTestRouter(initialEntries: string[] = ['/']) {
  const memoryHistory = createMemoryHistory({
    initialEntries,
  })

  return createRouter({
    routeTree,
    history: memoryHistory,
  })
}

interface RenderWithRouterOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[]
}

export function renderWithRouter(_ui: ReactElement, options: RenderWithRouterOptions = {}) {
  const { initialEntries = ['/'], ...renderOptions } = options
  const testRouter = createTestRouter(initialEntries)

  return render(<RouterProvider router={testRouter} />, renderOptions)
}

export { screen, waitFor } from '@testing-library/react'

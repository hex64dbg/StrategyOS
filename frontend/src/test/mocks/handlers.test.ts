import { describe, expect, it } from 'vitest'

interface HealthResponse {
  status: string
}

describe('MSW Integration', () => {
  it('intercepts API requests', async () => {
    const response = await fetch('/api/health')
    const data = (await response.json()) as HealthResponse

    expect(response.ok).toBe(true)
    expect(data).toEqual({ status: 'ok' })
  })
})

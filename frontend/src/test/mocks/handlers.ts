import { http, HttpResponse } from 'msw'

// Define your API handlers here
// Example:
// http.get('/api/users', () => {
//   return HttpResponse.json([{ id: 1, name: 'John' }])
// })

export const handlers = [
  // Health check endpoint for testing MSW is working
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' })
  }),
]

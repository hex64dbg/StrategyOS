import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Outlet />
        </Box>
      </Container>
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  )
}

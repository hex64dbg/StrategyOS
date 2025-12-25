import { Box, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography
            variant="h2"
            component="h1"
          >
            StrategyOS
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

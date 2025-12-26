import { Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <Typography
      variant="h2"
      component="h1"
    >
      StrategyOS
    </Typography>
  )
}

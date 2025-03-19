import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root' // Correct import
import Home from '../pages/Home'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home
})
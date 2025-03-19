import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Projects from '../pages/Projects'

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects
})
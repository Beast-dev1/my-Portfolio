import { rootRoute } from './routes/__root' // Ensure this is the ONLY import of rootRoute
import { indexRoute } from './routes/index'
import { aboutRoute } from './routes/about'
import { projectsRoute } from './routes/projects'
import { contactRoute } from './routes/contact'

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  contactRoute
])
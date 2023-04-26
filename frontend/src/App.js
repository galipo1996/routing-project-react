import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import EditEventPage from './pages/EditEvent'
import EventDetailPage, {
  loader as Elemntloader,
  action as singleActionEvent,
} from './pages/EventDetail'
import EventsPage, { loader as Eventsloader } from './pages/Events'
import EventsRootLayout from './pages/EventsRoot'
import HomePage from './pages/Home'
import NewEventPage, { action as EventAction } from './pages/NewEvent'
import RootLayout from './pages/Root'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: Eventsloader,
          },

          {
            path: ':id',
            loader: Elemntloader,
            id: 'dataElement',
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: singleActionEvent,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },

          { path: 'new', element: <NewEventPage />, action: EventAction },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

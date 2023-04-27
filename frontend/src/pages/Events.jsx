import { Suspense } from 'react'
import EventsList from '../components/EventsList'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
function EventsPage() {
  const { events } = useLoaderData()
  console.log(events)
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>LOADIDNG.....</p>}>
      <Await resolve={events}>
        {(resolverEvent) => <EventsList events={resolverEvent} />}
      </Await>
    </Suspense>
  )
}

export default EventsPage

const deferLoader = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    throw json(
      { message: 'could not fetch data.' },
      {
        status: 500,
      }
    )
  } else {
    const data = await response.json()
    return data.events
  }
}
export const loader = () => {
  return defer({ events: deferLoader() })
}

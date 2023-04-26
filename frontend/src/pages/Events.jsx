import EventsList from '../components/EventsList'
import { useLoaderData, json } from 'react-router-dom'
function EventsPage() {
  const data = useLoaderData().events
  console.log(data)
  return (
    <>
      <EventsList events={data} />
    </>
  )
}

export default EventsPage
export const loader = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    throw json(
      { message: 'could not fetch data.' },
      {
        status: 500,
      }
    )
  } else {
    return response
  }
}

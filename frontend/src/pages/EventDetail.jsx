import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetailPage = () => {
  const data = useRouteLoaderData('dataElement').event
  console.log(data)
  return (
    <>
      <EventItem event={data} />
    </>
  )
}

export default EventDetailPage
export const loader = async ({ request, params }) => {
  const id = params.id

  const response = await fetch('http://localhost:8080/events/' + id)
  if (!response.ok) {
    throw json(
      { message: 'Failed to fetch data of this element ' },
      { status: 500 }
    )
  }
  return response
}

export const action = async ({ request, params }) => {
  const response = await fetch('http://localhost:8080/events/' + params.id, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw json({ message: 'Failed to delete data!' }, { status: 500 })
  }
  return redirect('/events')
}

import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'
const NewEventPage = () => {
  return <EventForm method='POST' />
}

export default NewEventPage

export const action = async ({ request, params }) => {
  const method = request.method
  const data = await request.formData()
  const newEvent = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  let url = 'http://localhost:8080/events'
  if (method === 'PATCH') {
    url = 'http://localhost:8080/events/' + params.id
  }
  const fetching = await fetch(url, {
    method,
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newEvent),
  })
  if (fetching.status === 422) {
    return fetching
  }
  if (!fetching.ok) {
    throw json({ message: 'problem with sending data' }, { status: 500 })
  }
  return redirect('/events')
}

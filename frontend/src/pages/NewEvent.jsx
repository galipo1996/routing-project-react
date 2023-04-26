import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'
const NewEventPage = () => {
  return <EventForm />
}

export default NewEventPage

export const action = async ({ request, params }) => {
  const data = await request.formData()
  const newEvent = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  const fetching = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newEvent),
  })
  if (!fetching.ok) {
    throw json({ message: 'problem with sending data' }, { status: 500 })
  }
  return redirect('/events')
}

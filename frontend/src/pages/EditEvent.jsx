import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'
const EditEventPage = () => {
  const data = useRouteLoaderData('dataElement')
  const event = data.event
  return (
    <>
      <h1>EditEventPage</h1>
      <EventForm event={event} method='PATCH' />
    </>
  )
}

export default EditEventPage

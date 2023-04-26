import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  let title = 'An error Occurred'
  let message = 'Something went wrong'
  if (error.status === 500) {
    message = error.data.message
  }
  if (error.status === 404) {
    title = 'NOT FOUND'
    message = 'this page or content does not exist'
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  )
}

export default Error

import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error)

  return (
    <div class="container">
      <h1 class="title">Error</h1>
      <p class="subtitle">{error.statusText || error.message}</p>
    </div>
  )
}

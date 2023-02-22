import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error)

  return (
    <div class="section">
      <div class="container">
        <div class="p-6 columns is-centered">
          <h1 class="title is-1">{error.status} - {error.statusText || error.message}</h1>
        </div>
        <div class="columns is-centered">
          <h2 class="title is-2">{error.data.replace(/Error: /, "")}</h2>
        </div>
      </div>
    </div>
  )
}

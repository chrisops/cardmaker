import React from 'react'
import NewSetForm from './NewSetForm'

export default function CreateSet() {
  return (
    <>
      <section className="section hero is-warning">
        <div className="hero-body has-text-centered">
          <h1 className="title">New Set</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <NewSetForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

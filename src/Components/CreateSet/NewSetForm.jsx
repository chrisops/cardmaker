import React from 'react'
import { Form } from 'react-router-dom'
import { CollectionContext } from 'Pages/Root/collectionContext';

export default function NewSetForm() {
  const { dispatch } = React.useContext(CollectionContext)
  const [loading, setLoading] = React.useState(false)

  const createSet = async (e) => {
    if (loading) return
    setLoading(true)
    e.preventDefault()
    const name = document.getElementById('name').value
    await dispatch({ type: "addSet", payload: { name } })
    setLoading(false)
  }

  return (
    <Form>
      <div className="field">
        <div className="control">
          <label htmlFor="name" className="label">Name</label>
          <input className="input" type="text" id="name" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button 
            type="submit"
            className={`button is-link ${loading && 'is-loading'}`}
            onClick={createSet}
          >Create</button>
        </div>
      </div>
    </Form>
  )
}



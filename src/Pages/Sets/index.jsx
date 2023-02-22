import { CollectionContext } from 'Pages/Root/collectionContext'
import React from 'react'
import CreateSet from '../../Components/CreateSet/index';

export default function Sets() {
  const { state, dispatch } = React.useContext(CollectionContext)

  return (
    state.sets.length ? (
      <div>
        {state.sets.map(set => (
          <div key={set.id}> nice </div>
        ))}
      </div>
    ) : (
      <CreateSet />
    )
  )
}

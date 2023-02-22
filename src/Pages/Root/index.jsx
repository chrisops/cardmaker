import NavBar from 'Components/NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { CollectionContext, collectionReducer } from './collectionContext';

const initialState = {
  sets: JSON.parse(localStorage.getItem('Sets')) || [],
  decks: JSON.parse(localStorage.getItem('Decks')) || [],
  cards: JSON.parse(localStorage.getItem('Cards')) || []
}

function Root() {
  const [state, dispatch] = React.useReducer(collectionReducer, initialState);

  return (
    <>
      <NavBar />
      <CollectionContext.Provider value={{ state, dispatch }}>
        <Outlet />
      </CollectionContext.Provider>
    </>
  );
}

export default Root;

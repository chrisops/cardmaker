import React from "react";
import Storage from "storage";

export const collectionReducer = (state, action) => {
  switch (action.type) {
    case 'addSet':
      Storage.save('Sets', action.payload)
      return {
        ...state,
        sets: [...state.sets, action.payload]
      }
    case 'addDeck':
      Storage.save('Decks', action.payload)
      return {
        ...state,
        decks: [...state.decks, action.payload]
      }
    case 'addCard':
      Storage.save('Cards', action.payload)
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
    default:
      return state
  }
}

export const CollectionContext = React.createContext();
import React from "react";
import Storage from "storage";

export const collectionReducer = (state, action) => {
  let Id
  console.log("Action: ", action.type, action.payload)
  switch (action.type) {
    case 'addSet':
      Id = state.sets.length + 1
      Storage.save('Sets', { id: Id, ...action.payload })
      return {
        ...state,
        sets: [...state.sets, { id: Id, ...action.payload } ]
      }
    case 'addDeck':
      Id = state.decks.length + 1
      Storage.save('Decks', { id: Id, ...action.payload })
      return {
        ...state,
        decks: [...state.decks, { id: Id, ...action.payload }]
      }
    case 'addCard':
      Id = state.cards.length + 1
      Storage.save('Cards', { id: Id, ...action.payload })
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
    default:
      return state
    }
}

export const CollectionContext = React.createContext();
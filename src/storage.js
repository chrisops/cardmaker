import _ from 'lodash'

const Storage = {
  save: (itemType, item) => {
    const currentItems = JSON.parse(localStorage.getItem(itemType) || "[]")
    const existingItem = Storage.find(itemType, item.id)
    if (existingItem) {
      debugger
      currentItems[existingItem.index] = {..._.omit(existingItem, ['index']), ...item}
      localStorage.setItem(itemType, JSON.stringify(currentItems))
      return item
    }
    localStorage.setItem(itemType, JSON.stringify([...currentItems, item]))
    return item
  },
  find: (itemType, id) => {
    const currentItems = JSON.parse(localStorage.getItem(itemType) || "[]")
    const index = currentItems.findIndex(item => item.id === id)
    if (index === -1) return null
    return {index, ...currentItems[index]}
  },
  store: () => {
    Object.keys(localStorage).reduce((accumulator, key) => {
      accumulator[key] = localStorage.getItem(key)
      return accumulator
    }, {})
  }
}

export default Storage
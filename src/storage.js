const Storage = {
  save: (itemType, item) => {
    const currentItems = JSON.parse(localStorage.getItem(itemType) || "[]")
    localStorage.setItem(itemType, JSON.stringify([...currentItems, item]))
  },
  store: () => {
    Object.keys(localStorage).reduce((accumulator, key) => {
      accumulator[key] = localStorage.getItem(key)
      return accumulator
    }, {})
  }
}

export default Storage
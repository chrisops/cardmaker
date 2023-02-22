const Storage = {
  save: (itemType, item) => {
    const currentItems = JSON.parse(localStorage.getItem(itemType) || "[]")
    localStorage.setItem(itemType, JSON.stringify([...currentItems, item]))
  }
}

export default Storage

const defaultSettings = {
  name: ""
}

export default function initialize() {
  console.log("running initializer")
  
  localStorage.getItem('Sets') || localStorage.setItem('Sets', "[]")
  localStorage.getItem('Decks') || localStorage.setItem('Decks', "[]")
  localStorage.getItem('Cards') || localStorage.setItem('Cards', "[]")

  setDefaultSettings();
}

const setDefaultSettings = () => {
  const currentSettings = JSON.parse(localStorage.getItem('Settings') || {})

  localStorage.setItem('Settings', JSON.stringify(
    {...defaultSettings, ...currentSettings}
  ))
}
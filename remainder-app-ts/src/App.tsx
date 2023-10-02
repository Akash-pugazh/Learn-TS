import React, { useEffect } from "react"
import "./App.css"
import RemainderList from "./components/RemainderList"
import Remainder from "./models/Remainder"
import remainderService from "./services/remainder"
import NewRemainder from "./components/NewRemainder"

function App() {
  const [remainder, setRemainder] = React.useState<Remainder[]>([])

  const loadRemainders = async () => {
    const remainders = await remainderService.getRemainders()
    setRemainder(remainders)
  }

  useEffect(() => {
    loadRemainders()
  }, [])

  const removeRemainder = async (id: number) => {
    setRemainder(remainder.filter(remainder => remainder.id !== id))
    remainderService.removeRemainder(id)
  }

  const addRemainder = async (title: string) => {
    const newRemainder = await remainderService.addRemainder(title)
    setRemainder([...remainder, newRemainder])
  }

  return (
    <div>
      <NewRemainder onAddRemainder={addRemainder} />
      <RemainderList items={remainder} onRemoveRemainder={removeRemainder} />
    </div>
  )
}

export default App

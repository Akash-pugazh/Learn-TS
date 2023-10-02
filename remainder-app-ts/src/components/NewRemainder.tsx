import React from "react"

type NewRemainderProp = {
  onAddRemainder: (title: string) => void
}

function NewRemainder({ onAddRemainder }: NewRemainderProp): React.JSX.Element {
  const [title, setTitle] = React.useState("")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return
    onAddRemainder(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="title"></label>
      <input
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-4">
        Add Remainder
      </button>
    </form>
  )
}

export default NewRemainder

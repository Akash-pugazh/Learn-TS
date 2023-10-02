import React from "react"
import Remainder from "../models/Remainder"

type RemainderListProps = {
  items: Remainder[]
  onRemoveRemainder: (id: number) => void
}

function RemainderList({ items, onRemoveRemainder }: RemainderListProps) {
  return (
    <ul className="list-group">
      {items.map(item => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              onClick={() => onRemoveRemainder(item.id)}
              className="btn btn-outline-danger mx-2"
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default RemainderList

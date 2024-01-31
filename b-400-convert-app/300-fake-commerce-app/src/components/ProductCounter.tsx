import { useState } from 'react'

export default function ProductCounter() {
  const [count, setCount] = useState(0)
  const handleAddClick = () => {
    setCount(count + 1)
  }
  const handleCancelClick = () => {
    setCount(0)
  }

  return (
    <div className="flex justify-end mt-8 gap-2">
      <button className="btn btn-accent btn-active" onClick={handleAddClick}>
        {count === 0 ? '담기' : `${count}개 담았어요`}
      </button>
      <button
        className={`btn btn-neutral ${
          count === 0 ? 'btn-disabled' : 'btn-active'
        }`}
        onClick={handleCancelClick}
      >
        취소
      </button>
    </div>
  )
}

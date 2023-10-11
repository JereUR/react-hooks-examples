import { useState } from 'react'

export default function HookUseState() {
  const initialCount = 0
  const initialName = { firstName: '', lastName: '' }
  const initialItems = []

  const [count, setCount] = useState(initialCount)
  const [name, setName] = useState(initialName)
  const [items, setItems] = useState(initialItems)

  const { firstName, lastName } = name

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 100) + 1 }
    ])
  }

  return (
    <div>
      <h1 style={{ textDecoration: 'underline', color: 'var(--title-color)' }}>
        UseState Hook
      </h1>
      <div>
        <h2>With Numbers</h2>
        <h4>Count:{count}</h4>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={increment5}>+5</button>
      </div>
      <br />
      <hr />
      <div>
        <h2>With Objects</h2>
        <form>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <p>
            Your first name is - <strong>{firstName}</strong>
          </p>
          <p>
            Your last name is - <strong>{lastName}</strong>
          </p>
        </form>
      </div>
      <br />
      <hr />
      <div>
        <h2>With Array</h2>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
        <button
          onClick={() => setItems(initialItems)}
          disabled={items.length === 0}
        >
          Clear List
        </button>
      </div>
      <br />
      <hr />
    </div>
  )
}

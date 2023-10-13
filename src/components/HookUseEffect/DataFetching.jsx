import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'

export default function DataFetching() {
  const [post, setPost] = useState({})
  const [error, setError] = useState(null)
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`${url}/${idFromButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((err) => setError(err))
  }, [idFromButtonClick])

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button type="button" onClick={handleClick}>
        {`Fetch Post by id (1-100)`}
      </button>
      <div>
        <h2>{error ? 'Try id between 1-100' : post.title}</h2>
        <p>{error ? '' : post.body}</p>
      </div>
    </div>
  )
}

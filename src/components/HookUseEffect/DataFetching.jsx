import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'

export default function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`${url}/${idFromButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err))
  }, [idFromButtonClick])

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post by id
      </button>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </div>
  )
}

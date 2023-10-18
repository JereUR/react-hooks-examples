import axios from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const badURl = 'https://jsonplaceholder.typicod.com/posts/1'

export default function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios
      .get(url /* badURl */)
      .then((res) => {
        setLoading(false)
        setPost(res.data)
        setError('')
      })
      .catch((err) => {
        setLoading(false)
        setPost({})
        setError(`Something went wrong: ${err.message}`)
      })
  }, [])

  return (
    <div>
      <h2>Data Fetching without Reducer</h2>
      <div>
        <h5>
          {loading ? (
            'Loading...'
          ) : (
            <div className="flex">
              <p className="text-xl underline">Post title:</p>
              <p>{post.title}</p>
            </div>
          )}
        </h5>
        <span className="error-text">{error ? error : null}</span>
      </div>
    </div>
  )
}

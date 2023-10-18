import axios from 'axios'
import { useEffect, useReducer } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
const badURl = 'https://jsonplaceholder.typicod.com/posts/1'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        loading: false,
        error: `Something went wrong: ${action.payload}`,
        post: {}
      }
    default:
      return state
  }
}

export default function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get(url /* badURl */)
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_FAILURE',
          payload: err.message
        })
      })
  }, [])

  return (
    <div>
      <h2>Data Fetching with Reducer</h2>
      <div>
        <h5>
          {state.loading ? (
            'Loading...'
          ) : (
            <div className="flex">
              <p className="text-xl underline">Post title:</p>
              <p>{state.post.title}</p>
            </div>
          )}
        </h5>
        <span className="error-text">{state.error ? state.error : null}</span>
      </div>
    </div>
  )
}

import { useEffect } from 'react'

export default function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])
}

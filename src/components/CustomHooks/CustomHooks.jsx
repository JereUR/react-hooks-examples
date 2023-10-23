import { useState } from 'react'
import DocTitleOne from './DocTitleOne'
import DocTitleTwo from './DocTitleTwo'
import UserForm from './UserForm'

export default function CustomHooks() {
  const [showUseDoc, setShowUseDoc] = useState(false)
  const [showUseDocTwo, setShowUseDocTwo] = useState(false)
  return (
    <div>
      <h1>Custom Hooks</h1>
      {showUseDoc || (showUseDocTwo && <h2>useDocumentTitle</h2>)}
      {showUseDoc && <DocTitleOne />}
      <button onClick={() => setShowUseDoc(!showUseDoc)}>
        {showUseDoc ? 'Hide useDocumentTitle' : 'Show useDocumentTitle'}
      </button>
      <br />
      {showUseDocTwo && <DocTitleTwo />}
      <button onClick={() => setShowUseDocTwo(!showUseDocTwo)}>
        {showUseDocTwo
          ? 'Hide useDocumentTitleTwo'
          : 'Show useDocumentTitleTwo'}
      </button>
      <br />
      <br />
      <hr className="semi-hr" />
      <UserForm />
      <br />
      <hr />
    </div>
  )
}

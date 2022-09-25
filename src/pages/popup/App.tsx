import React, { useState } from 'react'

const App = (): JSX.Element => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const bookmarkPage = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      chrome.bookmarks.create({ title: tab.title, url: tab.url })
      setToggleOpen(true)
    })
  }

  const openBookmarks = () => {
    chrome.tabs.create({
      url: 'chrome://bookmarks',
    })
  }

  return (
    <div className="w-[300px] h-[300px] flex items-center justify-center">
      <button
        className="px-3 py-2 bg-green-600 text-white rounded-md"
        onClick={bookmarkPage}
      >
        Bookmark Page
      </button>
      {toggleOpen && (
        <button
          onClick={openBookmarks}
          className="ml-2 px-3 py-2 bg-[rgba(0,0,0,0.65)] text-white rounded-md"
        >
          Open Bookmarks
        </button>
      )}
    </div>
  )
}

export default App

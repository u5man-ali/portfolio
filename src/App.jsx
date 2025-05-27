import './App.css'
import React, { useState } from 'react'
import Button from './components/button'
import Sidebar from './components/sidebar'
import Content from './components/content'
import IconLeft from './icons/Placeholder-Outline.svg?react'
import IconRight from './icons/Arrow-Enter-Left-Outline.svg?react'

function App() {
  const [selectedPage, setSelectedPage] = useState('overview');
  return (
    <div className="w-full flex-1 min-h-screen bg-white-200">
      <nav className="w-full h-min bg-aqua-100 border-b border-white-800 shadow-sm flex gap-4 items-center p-4 ">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-4 justify-start">
        <img src="DezineCrafts.svg" alt="Dezine Crafts Logo" className="w-12 h-12"></img>
        <h1 className="text-text-xxl font-semibold">DC Ultimate UI Kit</h1></div>
      </nav>
      <div className="w-full flex gap-0 min-h-screen max-w-7xl mx-auto">
          <div className="sticky -left-64 bottom-0 top-0 z-1 hidden h-[calc(100vh-4px)] w-60 shrink-0 lg:left-0 lg:block">
            {/*Sidebar imported from /components/sidebar.jsx*/}
            <Sidebar onSelect={setSelectedPage} />
          </div>
          <div className="w-full p-6">
            {/*Main Content imported from /components/content.jsx*/}
            <Content selectedPage={selectedPage} />
            <h2 className="w-full h-min text-text-xxl font-semibold mb-6 capitalize">{selectedPage}</h2>
            <div className="w-full h-min justify-center bg-white-50 flex items-center gap-4 p-4 flex-wrap"> 
            {/*Buttons*/}
            <h3 className="w-full h-min text-text-lg font-semibold">Main Content</h3>
            <Button
              size="sm"
              variant="primary"
              leftIcon={IconLeft}
              rightIcon={IconRight}
            >
            With Icons
            </Button>
            <Button
              size="md"
              variant="primary"
              leftIcon={IconLeft}
              rightIcon={IconRight}
            >
            With Icons
            </Button>
            <Button
              size="lg"
              variant="primary"
              leftIcon={IconLeft}
              rightIcon={IconRight}
            >
            With Icons
            </Button>
            </div>
          </div>
      </div>
      {/* Place your components here */}
    </div>
  )
}

export default App

import './App.css'
import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Button from './components/button';

function App() {
  const [selectedPage, setSelectedPage] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  return (
    <div className="w-full flex-1 min-h-screen bg-white-200 dir=rtl p-0 m-0">
      <nav className="w-full h-min bg-aqua-100 border-b border-white-800 shadow-sm flex gap-4 items-center px-4 py-4 sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-4 justify-start">
        <Button
          size="sm"
          variant="gradient"
          style="primary"
          shape="rounded"
          iconSize="sm"
          className="lg:hidden"
          showLeftIcon={true}
          showRightIcon={false}
          iconLeftName="Navigation-Filled"
          onClick={toggleSidebar}
          >
            {/* this button has not text label, only left icon */}
        </Button>
        <img src="DezineCrafts.svg" alt="Dezine Crafts Logo" className="w-12 h-12"></img>
        <h1 className="text-disp-sm font-disp font-semibold">شبان المسلمین</h1></div>
      </nav>
      <div className="w-full flex gap-0 min-h-screen max-w-7xl mx-auto relative">
          {/* Backdrop overlay: only visible when sidebar is open on mobile */}
          {sidebarOpen && (
            <div className="fixed w-full inset-0 bg-black/30 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          {/* Sidebar block: show if open on mobile, always show on large screens */}
          <div className={`fixed lg:static z-30 top-[68px] right-0 h-screen-full w-60 shrink-0 bg-white-300 border-r border-white-500 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:block`}
          >
            {/*Sidebar imported from /components/sidebar.jsx*/}
            <Sidebar onSelect={(id) => {
              setSelectedPage(id);
              setSidebarOpen(false);
            }} 
            />
          </div>
          <div className="w-full p-6">
            {/*Main Content imported from /components/content.jsx*/}
            <Content selectedPage={selectedPage} />
          </div>
      </div>
      {/* Place your components here */}
    </div>
  )
}

export default App
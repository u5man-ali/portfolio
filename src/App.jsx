import './App.css'
import Button from './components/button'
import IconLeft from './icons/Placeholder-Outline.svg?react'
import IconRight from './icons/Arrow-Enter-Left-Outline.svg?react'

function App() {
  return (
    <div className="w-full flex-1 min-h-screen bg-white-200">
      <nav className="w-full h-min z-10 bg-aqua-100 border-b border-white-800 shadow-sm flex gap-4 items-center p-4 ">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-4 justify-start">
        <img src="DezineCrafts.svg" alt="Dezine Crafts Logo" className="w-12 h-12"></img>
        <h1 className="text-text-xxl font-semibold">DC Ultimate UI Kit</h1></div>
      </nav>
      <div className="w-full flex gap-0 min-h-screen max-w-7xl mx-auto">
          <div className="sticky -left-64 bottom-0 top-0 z-1 hidden h-[calc(100vh-4px)] w-60 shrink-0 overflow-y-auto lg:left-0 lg:block bg-white-50 border-r
          border-white-800">
            {/*Sidebar*/}
            <h3 className="w-full text-text-lg font-semibold">Sidebar</h3>
          </div>
          <div className="w-full bg-white-200">
            {/*Main Content*/}
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

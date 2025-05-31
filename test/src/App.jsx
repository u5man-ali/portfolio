import './App.css'
import Button from './components/button'
import IconLeft from './icons/Placeholder-Outline.svg?react'
import IconRight from './icons/Arrow-Enter-Left-Outline.svg?react'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="rtl:text-right rtl:flex-row-reverse text-5xl font-urdu font-bold mb-6">شبان المسلمین</h1>
     
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Button with both icons</h2>
        <div className="flex gap-4 flex-wrap">
          {/*Show both icons */}
          <p className="rtl:text-right rtl:flex-row-reverse text-lg font-urdu font-bold mb-6">شبان المسلمین ایک تحریک کا نام ہے جو نوعِ انسانی کے سامنے اسلام کے عادلانہ انقلابی تصور کو پیش کرنا چاہتی ہے اور اس انقلابی تصور کی بنیاد پر ایسا معاشرہ تشکیل دینے کا پروگرام بھی اپنے پاس رکھتی ہے جس میں آج کے دور کے تمام جدید مسائل کے قرآن و سنت کی روشنی میں حل پیش کیے گئے ہوں</p>
        </div>
      </section>
      {/* Place your components here */}
    </div>
  )
}


export default App

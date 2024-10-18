import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import Accordion from './components/Accordion';
import Header from './components/navbar/partials/Header';
import Footer from './components/navbar/partials/Footer';
import Tabs from './components/Tabs';
import Banner from './components/Banner';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner/>
      <Accordion/>
      <Tabs/>
      <Footer/>
    </>
  )
}

export default App

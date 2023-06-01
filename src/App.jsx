
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Blog, Footer, Possibility, Features, WhatGPT3, Header } from './container'
import { Navbar, Cta, Brand } from './components'

export const App = () => {
  
  return ( 
  
        <div className="App">
            <div className='gradient__bg'>
                <Navbar  />
                <Header />          
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
          </div>
    
  )
}

export default App

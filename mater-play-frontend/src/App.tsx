import { Route } from 'react-router-dom'
import Footer from './app/componentes/Footer'
import Header from './app/componentes/Header'
import { Routes } from 'react-router-dom'
import HomePage from './app/pages/home'


function App() {



  return (
  
    
    <div className="wrapper">
        <Header />
      
      <Routes>  
        
        <Route path="/:id?" element={<HomePage />} />
      </Routes>

        <Footer></Footer>
    </div>

  )
}

export default App

import Footer from './app/componentes/Footer'
import Header from './app/componentes/Header'
import Section from './app/componentes/Section'
import HighlightSection from './app/componentes/HighlightSection'
import { useEffect, useState } from 'react'
import { ICategory } from './app/@libs/axios/typez'
import { CategoryServices } from './app/services/category-service'

function App() {

   const[categories, setCategories]= useState<ICategory[]>([])

   useEffect(()=>{
    CategoryServices.getAll()
    .then(result=>{
      console.log('=>', result)
        setCategories(result.data)
    })
    .catch(error=>{
      console.log(error)
    })

   },[]);


  return (
  
    
    <div className="wrapper">
        <Header />
        <main style={{marginTop:'8rem'}}>

            <HighlightSection/>
            {
              categories.map(item=>(
                <Section key={item.id} category={item}/>
              ))
            }
            

        </main>
        <Footer></Footer>
    </div>

  )
}

export default App

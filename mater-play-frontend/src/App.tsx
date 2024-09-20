import Footer from './app/componentes/Footer'
import Header from './app/componentes/Header'
import Section from './app/componentes/Section'
import HighlightSection from './app/componentes/HighlightSection'

function App() {

  return (
    
    <div className="wrapper">
        <Header />
        <main style={{marginTop:'8rem'}}>

            <HighlightSection/>
            <Section title= "Recomendados para você"/>
            <Section  title= "Recomendados para toda sua familia">

            </Section>

        </main>
        <Footer></Footer>
    </div>

  )
}

export default App

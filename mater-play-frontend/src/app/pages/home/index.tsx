
import { useEffect, useState } from "react";
import { ICategory } from "../../@libs/axios/typez";
import { CategoryServices } from "../../services/category-service";
import HighlightSection from "../../componentes/HighlightSection";
import Section from "../../componentes/Section";


function HomePage() {

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

        < main style={{marginTop:'8rem'}}>

        <HighlightSection />
        {
          categories.map(item=>(
            <Section key={item.id} category={item}/>
          ))
        }
        

    </main>
    )
}
export default HomePage
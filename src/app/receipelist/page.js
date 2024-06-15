import ReceipeList from "@/components/receipe-list"
async function fetchListofRecipe(){
 try {
    const apiresponse= await fetch("https://dummyjson.com/recipes")
    const data= await apiresponse.json()
    return data.recipes
 } catch (error) {
    console.log(error)
 }
}
export  default async function Recipes ()  {
    const receipelist= await fetchListofRecipe()
  return <ReceipeList  receipelist={receipelist}/>
}


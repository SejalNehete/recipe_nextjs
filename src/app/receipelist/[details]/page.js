import Link from "next/link"

async function fetchrecipedetail(userid) {
  try {
    const apiresponse = await fetch(`http://dummyjson.com/recipe/${userid}`)
    const result = await apiresponse.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}
export default async function RecipeDetails({ params }) {
  console.log(params)
  const recipe = await fetchrecipedetail(params.details)
  console.log("recipe details ", recipe)

  return (
    <div className="p-6 lg:max-w-6xl max-w-2l mx-auto">
      <Link href={'/receipelist'}>Go Back to Recipe List</Link>
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="w-full lg:stciky top-0 sm:flex gap-2">
          <img src={recipe.image} className="w-4/5 rouded object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950">{recipe.name}</h2>
          <div className="flex flex-wrap gap-4 mt-5">
            <p  className="text-2xl font-extrabold text-gray-700"> {recipe.mealType[0]}</p>
          </div>
          <div className="mt-5">
            <p className="text-2xl  text-gray-700">{recipe.cuisine}</p>
          </div>
          <div  className="mt-5">
            <h3 className="text-lg font-bold  text-gray-700">Intgredient</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              } 

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const ReceipeList = ({receipelist}) => {
    console.log(receipelist)
  return (
    <div>
      <div  className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl  font-bold text-gray-600">Recepies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 gap-8">
          {
            receipelist && receipelist.map((recipe)=>
              <Link href={`/receipelist/${recipe.id}`}> 
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover object-top"/>
                    <h2 className="font-bold">{recipe.name}</h2>
                    <div className="mt-4 flex items-center flex-wrap gap-2">
                      <p className="text-lg text-gray-600"> Rating : {recipe.rating}</p>
                      <div className="ml-auto ">
                        <p className="text-lg text-gray-600 font-bold"> {recipe.cuisine} </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            )
          } </div>
      </div>
    </div>
  )
}

export default ReceipeList

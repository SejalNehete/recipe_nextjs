import Link from "next/link"

const not_found = () => {
  return (
    <div>
      <h1>page not found</h1>
      <Link href="/">go to home</Link>
    </div>
  )
}

export default not_found

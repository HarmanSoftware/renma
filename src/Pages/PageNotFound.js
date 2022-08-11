import React from 'react'
import NotFound from '../Components/notFound.png'
import {Link} from 'react-router-dom'
export default function PageNotFound() {
  return (
	<div>

    <section className="flex bg-white items-center dark:text-black py-4">
	<div className="container flex flex-col items-center justify-center mx-auto text-center sm:max-w-md">
		<img src={NotFound} alt="Page not found" />
		<div className="text-3xl py-8">Ooops, The page you looking for can't be found!</div>
		<Link to="/">
			 <button className=" flex items-center justify-center mx-auto text-center font-medium rounded-sm bg-mauve hover:bg-lightmauve p-2">
			   Back Home
		     </button>
		</Link>
	</div>
</section>
	</div>
  )
}

import React from 'react'
import NotFound from '../Assets/Images/eyes.gif'
import {Link} from 'react-router-dom'
export default function PageNotFound() {
  return (
	<div>

    <section className="flex bg-white items-center dark:text-black py-4 " id='not-found-bg'>
	<div className="container flex flex-col items-center justify-center mx-auto text-center sm:max-w-md">
		<img src={NotFound} className='w-80 h-80 bg-mauve rounded-full' alt="Page not found" />
		<div className="text-5xl font-medium py-2">Error 404</div>
		<div className="text-3xl py-3">Ooops, The page you looking for can't be found!</div>
		<Link to="/">
			 <button className=" flex items-center justify-center mx-auto text-center font-medium rounded-sm bg-mauve hover:bg-lightpurple p-2" id='back-home-btn-not-found'>
			   Back Home
		     </button>
		</Link>
	</div>
</section>
	</div>
  )
}

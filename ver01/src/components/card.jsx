import React from 'react'

function Card({username = 'Lina', post = "N/A"}) {

  return (
    <div>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-3">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
        <blockquote>
        <p className="text-lg font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, voluptatum.
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {post}
        </div>
        </figcaption>
    </div>
    </figure>
    </div>
  )
}

export default Card
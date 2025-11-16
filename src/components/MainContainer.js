import React from 'react'

const MainContainer = () => {
  return (
    <div className='text-white pt-10'>
       <div className=' top-0 left-0 w-screen h-screen'>
          <iframe width="100%" 
          height="850px" 
           src="https://www.youtube.com/embed/1FeiTZMtwLA?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=1FeiTZMtwLA"
           title="M3GAN 2.0 Trailer"
           frameborder="0"
           allow="autoplay; fullscreen; encrypted-media"
           allowfullscreen
          >
          </iframe>
       </div>
       <div className='absolute top-1/2 left-10 '>
         <h1 className='text-6xl font-bold text-red-300'>M3GAN 2.0</h1>
         <p className='text-lg w-1/4 py-5'> Two years after M3GAN's rampage, her creator, Gemma, resorts to resurrecting her infamous creation in order to take down Amelia, the military-grade weapon who was built by a defense contractor who stole M3GAN's underlying tech.</p>

         <div className='flex space-x-4 cursor-pointer'>
            <button className=' bg-white text-black  p-4 px-12 text-xl hover:bg-opacity-40 '> ▶︎ Play </button>
            <button className='bg-gray-500 p-4 px-12 text-xl bg-opacity-50'>ⓘ More Info</button>
         </div>
       </div>
    </div>
  )
}

export default MainContainer

import React from 'react'
import lang from '../utils/languageConstants.js'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai.js'

const GptSearchBar = () => {

    const langkey=useSelector(store =>store.config.lang)
    const searchText=useRef(null) ;

    async function handleGptSearchClick(){
        //logic to handle gpt search click, Make Api Call and give search results 
      // console.log(searchText.current.value)
    //     const results= await openai.chat.completions.create({
    //      model: 'gpt-4o',
    //       messages: [
    //     { role: 'developer', content: 'Talk like a pirate.' },
    //    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
    //  ],
    //   });
    //   console.log(results.choices[0].message.content);
        const res = await fetch("http://localhost:5000/api/gpt", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         },
        body: JSON.stringify({
         prompt: "Give Five Movies with IMDB rating greater than 7 and a basic short overview" + searchText.current.value,
       }),
  });

  const data = await res.json();
  console.log(data);
    }

  return (
    <div className='flex justify-center'>
     <form className='p-6 m-6 bg-black-900 w-full' onSubmit={(e)=>e.preventDefault()}>
        <input  ref={searchText} className='p-4 text-black outline-black' type='text' placeholder={lang[langkey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 bg-red-400 text-white rounded-lg' onClick={handleGptSearchClick}> {lang[langkey].search} </button>
     </form>
    </div>
  )
}

export default GptSearchBar

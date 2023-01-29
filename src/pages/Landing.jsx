import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import grid from '../assets/gridicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {

  const [searchQuery, setSearchQuery] = useState('')

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  function searchResult() {
    const searchQueryTrimmed = searchQuery.trim()
    if (searchQueryTrimmed !== '') {
      const encodedQuery = encodeURIComponent(searchQueryTrimmed);
      window.location.href=`/search/${encodedQuery}/`
    }
  }

  function checkEnterPressed(event) {
    if (event.key === 'Enter') {
      searchResult()
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center px-6 py-4'>
        <ul className='flex'>
          <li>
            <a className=' cursor-not-allowed text-black text-sm hover:underline dark:text-gray-600'>About</a>
          </li>
          <li className='ml-4'>
            <a className=' cursor-not-allowed text-black text-sm hover:underline dark:text-gray-600'>Store</a>
          </li>
        </ul>
        <ul className='flex items-center'>
          <li className='mr-4'>
            <a className=' cursor-not-allowed text-black text-sm hover:underline'>Gmail</a>
          </li>
          <li className='mr-4'>
            <a className=' cursor-not-allowed text-black text-sm hover:underline'>Images</a>
          </li>
          <li>
            <a className=' cursor-not-allowed rounded-full hover:bg-gray-200 p-3 flex'><img className='w-4' src={grid} alt="" /></a>
          </li>
          <li className='ml-3'>
            <button className='cursor-not-allowed text-sm text-white bg-blue-500 py-1.5 px-5 rounded'>Sign in</button>
          </li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center mt-48'>
        <img className=' h-28 mb-8' src={logo} alt="" />
        <div className='w-3/5 flex justify-center relative max-w-xl'>
          <input
            className='border border-gray-300 py-2 pr-4 pl-10 rounded-full w-full hover:shadow-lg'
            type="text"
            onChange={handleChange}
            onKeyDown={checkEnterPressed} />
          <FontAwesomeIcon className='text-gray-600 absolute left-4 top-3.5' icon="fa-solid fa-magnifying-glass" />
        </div>
        <div className='mt-5'>
          <button onClick={searchResult} className='text-sm py-2 px-4 bg-gray-50 rounded border border-white hover:border-gray-200 mr-2'>Google Search</button>
          <button className='cursor-not-allowed text-sm py-2 px-4 bg-gray-50 rounded border border-white hover:border-gray-200 ml-2'>I'm Feeling Lucky</button>
        </div>
      </div>

      <div className='bg-gray-100 w-screen fixed bottom-0'>
        <div className='p-2 border-b-2'>
          <span className='text-gray-500 text-sm ml-4'>United Kingdom</span>
        </div>
        <div className='p-2 flex flex-col relative'>
          <a className='text-gray-500 text-sm m-auto mb-4 hover:underline lg:absolute lg:left-[45%]' target="_blank" href="https://rajmoham.co.uk">Created by Raj Mohmmad</a>
          <div className='m-auto flex sm:flex-row sm:justify-around lg:justify-between w-screen flex-col'>
            <ul className='flex mx-8 justify-center mb-2'>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >Advertising</a>
              </li>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >Business</a>
              </li>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >How Seach Works</a>
              </li>
            </ul>
            <ul className='flex mx-8 justify-center mb-2'>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >Privacy</a>
              </li>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >Terms</a>
              </li>
              <li className='mx-3'>
                <a className='text-sm text-gray-500 hover:underline cursor-not-allowed' >Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
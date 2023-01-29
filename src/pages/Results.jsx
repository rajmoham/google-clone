import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchData from '../component/SearchData'
import loader from '../assets/loader.svg'

const Results = () => {
  const [searchResults, setSearchResults] = useState({})

  const { query } = useParams()
  const searchQuery = decodeURIComponent(query)

  const api_key = process.env.REACT_APP_API_KEY
  const cx = process.env.REACT_APP_CX

  const url = `https://customsearch.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${api_key}`

  async function getData() {
    try {
      const { data } = await axios.get(url)
      setSearchResults(data)
      console.log(data)
    } catch (error) {
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-screen flex flex-col min-w-[800px]'>
      <div className='flex pt-10 px-16 border-b border-gray-300'>
        <img className='h-10 mr-10' src={logo} alt="" />
        <div>
          <div className='flex justify-center relative w-[450px] mb-6'>
            <input
              className='border border-gray-300 py-2 pr-4 pl-10 rounded-full w-full hover:shadow-lg'
              type="text"
              value={searchQuery} />
            <FontAwesomeIcon className='text-gray-600 absolute left-4 top-3.5' icon="fa-solid fa-magnifying-glass" />
          </div>
          <ul className='flex'>
            <li className='mx-2 py-2 px-1 text-blue-500 border-b-4 border-blue-500'>
              <a href="" className='pt-3 pb-1 text-sm'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                &nbsp; All</a>
            </li>
            <li className='mx-2 py-2 px-1 text-gray-400'>
              <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                <FontAwesomeIcon icon="fa-regular fa-image" />
                &nbsp; Images</a>
            </li>
            <li className='mx-2 py-2 px-1 text-gray-400'>
              <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                <FontAwesomeIcon icon="fa-solid fa-tag" />
                &nbsp; Shopping</a>
            </li>
            <li className='mx-2 py-2 px-1 text-gray-400'>
              <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                &nbsp; Maps</a>
            </li>
            <li className='mx-2 py-2 px-1 text-gray-400'>
              <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                <FontAwesomeIcon icon="fa-regular fa-newspaper" />
                &nbsp; News</a>
            </li>
            <li className='mx-2 py-2 px-1 text-gray-400'>
              <a className='pt-3 pb-1 text-sm cursor-not-allowed'>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                &nbsp; More</a>
            </li>
          </ul>
        </div>
      </div>
      {
        searchResults.items
          ?
          <div className='ml-56 mt-2 max-w-[600px]'>
            <span className='text-gray-400 text-sm'>{`About ${searchResults.searchInformation.formattedTotalResults} results (${searchResults.searchInformation.formattedSearchTime} seconds)`}</span>
            <div>
              {
                searchResults.items.map((item) => (
                  <SearchData data={item} />
                ))
              }
            </div>
          </div>
          :
          <div className='ml-56 mt-10 max-w-[300px] flex justify-center'>
            <img src={loader} alt="" />
          </div>
      }
    </div>
  )
}

export default Results
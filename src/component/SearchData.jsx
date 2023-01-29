import React from 'react'

const SearchData = ( {data} ) => {
    return (
        <div className='my-5'>
            <a href={data.formattedUrl}>
                <span className='text-sm'>{data.formattedUrl}</span> <br></br>
                <span className='text-blue-700 text-lg font-semibold hover:underline'>
                    {data.title}
                </span>
            </a>
            <p dangerouslySetInnerHTML={ {__html: data.htmlSnippet} } className='text-sm text-gray-700'>     
            </p>
        </div>
    )
}

export default SearchData
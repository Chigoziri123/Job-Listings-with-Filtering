import React from 'react'

function Details({
    company,
    recent,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
    filter_f
}) {
    // Creating a filter function
    function handleFilter(skill){
        filter_f(skill)
    }

    const Skills =({skill})=>(<div className="tag rounded-md py-1 px-2 m-2">
        <button onClick={ ()=> handleFilter(skill)}>
            {skill}  
        </button>
    </div>)
    
    return (
       <>
            <div className="flex px-4 py-2">
                <div className="flex flex-grow">
                    <p className="mr-2 flex justify-center items-center">{company}</p>
                    { recent ? <p className="tags new-tag rounded-xl px-2 py-1 mr-1 upper">New!</p> : null }
                    { featured ? <p className="tags new-tag rounded px-2 py-1 upper">Featured</p>: null }
                </div>
                <p className="main-heading my-2">{position}</p>
                <div clasNames="flex flex-grow">
                    <small className="text-gray-900">{postedAt}</small>
                    <small className="text-gray-900">{contract}</small>
                    <small className="text-gray-900">{location}</small>
                </div>
                {/* Creating a new array from languages and tools and mapping it. */}
                <div className="tags flex flex-1 justify-center items-end">
                {[...languages, ...tools].map(skill => <Skills skill={skill}/>) }
                </div>
            </div>

       </>
    )
}

export default Details
import React from 'react'

function FilterItem({ item}) {
    return (
       <span className="p-2 bg-white rounded cursor-pointer mr-2">{item}</span>
    )
}

export default FilterItem
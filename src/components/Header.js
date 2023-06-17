import React from 'react'
import Headerimg from '../images/bg-header-desktop.svg'


function Header() {
    return (
        <div className="py-4 relative h-32 cyan">
            <img src={Headerimg} alt="" className="absolute inset-0 w-full object-cover"/>
        </div>
    )
}

export default Header
import React, { useState } from 'react'

function ArrayDt() {
    const [categories,setCategories]=useState(["All","Electronics","Footwear"]);
  return (
    <div>
      <header>
        <nav className='btn-group'>
            {
                categories.map(category=><button key={category} className='btn btn-danger'>{category}</button>)
            }
        </nav>
      </header>
      <h2>Categories</h2>
      <select>
        {
            categories.map((category,index)=><option key={index} value={category}>{category}</option>)
        }
      </select>
    </div>
  )
}

export default ArrayDt

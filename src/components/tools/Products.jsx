import React from 'react'
import ProductCard from './ProductCard'


export default function Products({ tools, isActive, setisActive,isSelected, setisSelected}) {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-11/12 gap-6'>
         {
            tools.map((tool) => (<ProductCard key={tool.id}  tool={tool} isActive={isActive} setisActive={setisActive} isSelected={isSelected} setisSelected={setisSelected}></ProductCard>))
         }
        </div>
       
    )
}

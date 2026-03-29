import React from 'react'
import Card from './card'


export default function Tool({ tools, isActive, setisActive }) {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-11/12 gap-6'>
         {
            tools.map(tool => (<Card tool={tool} isActive={isActive} setisActive={setisActive}></Card>))
         }
        </div>
       
    )
}

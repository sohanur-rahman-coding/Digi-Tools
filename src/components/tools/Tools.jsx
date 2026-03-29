import React, { use, useState } from 'react'
import Tool from './tool'

export default function Tools({ promiseTools }) {
    const tools = use(promiseTools)
    console.log(tools)
    const [isActive, setisActive] = useState('Products')
 
    return (
        <div className='mt-10 text-center space-y-4'>
            <h2 className='text-5xl my-4'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className='flex justify-center bg-gray-200 max-w-[20.5%] mx-auto px-2  py-1 rounded-2xl' >
                <button onClick={() => setisActive('Products')} className={`btn py-1 px-9 rounded-2xl text-[18px] ml-1 ${isActive === 'Products' ? 'bg-primary text-white' : ''}`}>Products</button>
                <button onClick={() => setisActive('Carts')} className={`btn py-1 px-9 rounded-2xl mr-1 text-[18px] ${isActive === 'Carts' ? 'bg-primary text-white' : ''}`}>Carts</button>


            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-11/12 gap-6'>
                {
                    tools.map(tool => <Tool key={tool.id} tool={tool}></Tool>)
                }
            </div>
        </div>
    )
}

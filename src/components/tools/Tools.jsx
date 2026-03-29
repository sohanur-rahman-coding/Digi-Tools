import React, { use, useState } from 'react'
import Tool from './tool'
import SelectedCard from './SelectedCard'

export default function Tools({ promiseTools }) {
    const tools = use(promiseTools)
    console.log(tools)
    const [isActive, setisActive] = useState('Products')
 
    return (
        <div className='mt-10 text-center space-y-4'>
            <h2 className='text-5xl my-4'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className='flex justify-center ' >
                <button onClick={() => setisActive('Products')} className={`btn py-1 px-9 rounded-2xl text-[18px] ml-1 ${isActive === 'Products' ? 'bg-primary text-white' : ''}`}>Products</button>
                <button onClick={() => setisActive('Carts')} className={`btn py-1 px-9 rounded-2xl mr-1 text-[18px] ${isActive === 'Carts' ? 'bg-primary text-white' : ''}`}>Carts</button>


            </div>
            <div >
                {
                     isActive === 'Products'  ? <Tool tools={tools} isActive={isActive} setisActive={setisActive}></Tool> :
                        <SelectedCard tools={tools} isActive={isActive} setisActive={setisActive}></SelectedCard>
                    
                }
            </div>
        </div>
    )
}

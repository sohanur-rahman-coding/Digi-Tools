import React, { use, useState } from 'react'
import Tool from './tool'
import SelectedCard from './SelectedCard'

export default function Tools({ promiseTools }) {
    const tools = use(promiseTools)

    const [isActive, setisActive] = useState('Products')
    const [isSelected, setisSelected] = useState([])

    return (
        <div className='mt-10 text-center space-y-4'>
            <h2 className='text-5xl my-4'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className='flex justify-center gap-2 ' >
                <button onClick={() => setisActive('Products')} className={`btn py-1 px-9 rounded-2xl text-[18px] ml-1 ${isActive === 'Products' ? 'bg-primary text-white' : ''}`}>Products</button>
                <button onClick={() => setisActive('Carts')} className={`btn py-1 px-9 rounded-2xl mr-1 text-[18px] ${isActive === 'Carts' ? 'bg-primary text-white' : ''}`}>Carts</button>


            </div>
            <div >
                {
                    isActive === 'Products' ? <Tool tools={tools} isActive={isActive} setisActive={setisActive} isSelected={isSelected} setisSelected={setisSelected}></Tool> :
                        <SelectedCard tools={tools} isActive={isActive} setisActive={setisActive} isSelected={isSelected} setisSelected={setisSelected}></SelectedCard>

                }
            </div>
        </div>
    )
}

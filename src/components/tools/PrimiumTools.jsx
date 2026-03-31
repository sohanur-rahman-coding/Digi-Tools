import React, { use, useState } from 'react'
import Products from './Products'
import SelectedTools from './SelectedTools'
import { toast } from 'react-toastify';

export default function PrimiumTools({ promiseTools, isSelected, setisSelected }) {
    const tools = use(promiseTools)

    const [isActive, setisActive] = useState('Products')
    const handleCart = () => {
        setisActive('Carts')
        if (isSelected.length == 0) {
            toast.error('Please select a Cart !')
        }

    }

    return (
        <div className='mt-10 text-center mx-auto space-y-4'>
            <h2 className='text-5xl my-4'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className='flex justify-center gap-2 mx-auto ' >
                <button onClick={() => setisActive('Products')} className={`btn py-1 rounded-2xl text-[18px] px-14  ml-1 ${isActive === 'Products' ? 'bg-primary text-white' : ''}`}>Products</button>
                <button onClick={handleCart} className={`btn py-1 rounded-2xl mr-1 text-[18px] px-14 ${isActive === 'Carts' ? 'bg-primary text-white' : ''}`}>Carts ({(isSelected.length)})</button>


            </div>
            <div className='mx-auto flex flex-col justify-center space-y-4' >
                {
                    isActive === 'Products' ? <Products tools={tools} isActive={isActive} setisActive={setisActive} isSelected={isSelected} setisSelected={setisSelected}></Products> :
                        <SelectedTools tools={tools} isActive={isActive} setisActive={setisActive} isSelected={isSelected} setisSelected={setisSelected}></SelectedTools>

                }
            </div>
        </div>
    )
}

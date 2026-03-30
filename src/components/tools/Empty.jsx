import React from 'react'

import { RiErrorWarningFill } from "react-icons/ri";
  import { ToastContainer, toast } from 'react-toastify';




export default function Empty() {
    return (
        <div className='p-10 space-y-10 mx-auto'>
            
            <RiErrorWarningFill className='mx-auto text-6xl' />

            <h1 className='text-6xl'>Your cart is empty</h1>
            <p className='text-4xl font-semibold'>Select any item to see it here</p>
        </div>
    )
}

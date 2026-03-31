import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


export default function SelectedIteams({selectedIteams,setisSelected,isSelected}) {
    const handleDeleteSelectedTools = (selectedIteams)=>{
                toast.info('Iteam removed from cart !')
        
        const filterSelected = isSelected.filter(removeTools => removeTools.name !== selectedIteams.name)
        
        setisSelected(filterSelected)
    }
    
    return (
        <div className="flex items-center my-6 gap-6 justify-between rounded-2xl p-3 bg-gray-200 text-black">
            <div className="flex items-center gap-6">
                <img
                    src={selectedIteams.icon}
                    alt={selectedIteams.name}
                    className="h-8 w-auto rounded-md"
                />
                <div className='text-left'>
                    <h3 className="flex items-center gap-2 font-semibold">
                     {selectedIteams.name}
                    </h3>
                    <p>${selectedIteams.price}</p>
                </div>
            </div>
            <button
                className="btn bg-transparent text-red-500"
                onClick={() => handleDeleteSelectedTools(selectedIteams)}
            >
                Delete
            </button>
        </div>
    )
}

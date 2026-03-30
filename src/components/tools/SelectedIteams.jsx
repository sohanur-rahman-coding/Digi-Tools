import React from 'react'

export default function SelectedIteams({selectedIteams,setisSelected,isSelected}) {
    const handleDeleteSelectedTools = (selectedIteams)=>{
        console.log(selectedIteams)
        const filterSelected = isSelected.filter(removeTools => removeTools.name !== selectedIteams.name)
        
        setisSelected(filterSelected)
    }
    
    return (
        <div className="flex items-center my-6 gap-6 justify-between rounded-4xl p-6 bg-gray-200 text-black">
            <div className="flex items-center gap-6">
                <img
                    src={selectedIteams.icon}
                    alt={selectedIteams.name}
                    className="h-10 w-auto rounded-md"
                />
                <div className='text-left'>
                    <h2 className="flex items-center gap-2 font-semibold text-[16px] md:text-xl">
                     {selectedIteams.name}
                    </h2>
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

import React from 'react'

export default function SelectedIteams({ selectedIteams }) {
    console.log(selectedIteams)
    return (
        <div className="flex items-center gap-6 justify-between rounded-4xl p-6 bg-[#F9FAFC]">
            <div className="flex items-center gap-6">
                <img
                    src={selectedIteams.icon}
                    alt={selectedIteams.name}
                    className="h-[40px] w-auto rounded-md"
                />
                <div className='text-left'>
                    <h2 className="flex items-center gap-2 font-semibold text-xl">
                     {selectedIteams.name}
                    </h2>
                    <p>${selectedIteams.price}</p>
                </div>
            </div>
            <button
                className="btn text-red-500"
                onClick={() => handleDeleteSelectedPlayer(player)}
            >
                Delete
            </button>
        </div>
    )
}

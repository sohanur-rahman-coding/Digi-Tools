import React from 'react'

export default function Rating() {
    return (
        <div className='w-full bg-primary text-white rounded-2xl'>
            <div className='flex gap-32 mx-auto justify-center py-14 px-48 text-center'>
                <div>
                    <p className='text-6xl
            '>50k+</p>
                    <p className='text-2xl mt-2'>Active Users</p>
                </div>   
                <hr  className='w-0.5 h-20 bg-white '/>

                     <div>
                    <p className='text-6xl
            '>200+</p>
                    <p className='text-2xl mt-2'>Premium Tools</p>
                </div>
                                <hr  className='w-0.5 h-20 bg-white '/>
  
                      <div>
                    <p className='text-6xl
            '>4.9</p>
                    <p className='text-2xl mt-2'>Rating</p>
                </div>
            </div>

        </div>
    )
}

import React, { useState } from 'react'

export default function Card({ tool, isSelected, setisSelected }) {
    const [selectedTool, setselectedTool] = useState(false)
    const handleSelected = () => {



        setselectedTool(true)
        setisSelected([...isSelected, tool])
    }

    let tagColor = "";

    if (tool.tag === "Popular") {
        tagColor = "bg-purple-100 text-purple-600";
    } else if (tool.tag === "Best Seller") {
        tagColor = "bg-yellow-100 text-yellow-600";
    } else {
        tagColor = "bg-green-100 text-green-600";
    }


    return (<div>
        <div >
            <div className="card w-96 bg-base-100 shadow-sm text-left space-y-4">
                <div className="card-body">
                    <span className={`badge badge-xs ${tagColor} ml-[75%]`}  >{tool.tag}</span>
                    <img className='max-w-8' src={tool.icon} alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold">{tool.name}</h2>
                        <p className='my-2'>{tool.description}</p>
                        <span className="text-xl">${tool.price}/{tool.period}</span>
                    </div>
                    <ul className="mt-2 flex flex-col gap-2 text-xs text-left">

                        {
                            tool.features.map((feature, index) => { 
                                return  <div key={index}> 
                                    
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                </div>
                            })
                        }

                    </ul>
                    <div className="mt-2">
                        <button
                            onClick={handleSelected

                            }
                            disabled={selectedTool}

                            className="btn btn-primary btn-block w-full rounded-4xl">{selectedTool ? 'Subscribed' : 'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

import React from 'react'
import banner from '../../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";


export default function Banner() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className=" rounded-lg shadow-2xl"
                    />
                    <div className='mt-8 lg:mt-0'>
                        <button className="btn btn-soft btn-primary rounded-4xl"><GoDotFill />

                            New: AI-Powered Tools Available</button>
                        <h1 className="text-6xl font-bold">Supercharge Your Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />

                            Explore Products
                        </p>
                        <button className="btn btn-primary rounded-4xl">Explore Products</button>
                        <button className="btn bg-none border border-primary rounded-4xl ml-2 text-primary"><CiPlay1 />
                            Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

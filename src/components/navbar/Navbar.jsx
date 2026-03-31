import logo from '../../assets/DigiTools.png'
import { HiOutlineShoppingCart } from "react-icons/hi2";


export default function Navbar({isSelected, setisSelected}) {
    return (
        <div className=' bg-base-100 shadow-sm sticky top-0 z-10'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>

                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>

                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className='relative p-4 hidden lg:flex'>
                        <HiOutlineShoppingCart className='cursor-pointer text-2xl' />
                        {
                            isSelected.length >= 1 ? <div className="badge badge-error badge-xs absolute top-1 right-2">{isSelected.length}</div> : '' 
                        }

                    </div>

                    <a className='btn hidden lg:flex outline-none bg-transparent border-none shadow-none '>Login</a>
                    <a className="btn btn-primary rounded-4xl">Get Started</a>
                </div>
            </div>
        </div>
    )
}

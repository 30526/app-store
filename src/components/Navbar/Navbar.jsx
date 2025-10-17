import React from 'react';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";




const Navbar = () => {
    return (
        <nav className='navbar  bg-base-100 shadow-xs'>
            <div className="flex container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Apps</a></li>
                            <li><a>Installation</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='h-10' src={logo} alt="Logo picture" />
                        <a className="text-xl font-bold bg-gradient-to-br 
                        from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hidden md:block">APP.STORE</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=' hover:bg-[#632EE3] hover:text-white font-semibold'> <a><span></span>Home</a></li>
                        <li className=' hover:bg-[#632EE3] hover:text-white font-semibold'><a><FaAppStore></FaAppStore>Apps</a></li>
                        <li className=' hover:bg-[#632EE3] hover:text-white font-semibold'><a><MdInstallDesktop></MdInstallDesktop> Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-bl  from-[#632EE3] to-[#9F62F2] text-white"><span><FaGithub></FaGithub></span>Contribution</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
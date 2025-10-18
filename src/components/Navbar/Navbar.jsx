import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { NavLink } from 'react-router';
import { TbHome } from "react-icons/tb";






const Navbar = () => {
    return (
        <nav className='navbar  bg-base-100'>
            <div className="flex container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}><li>Home</li></NavLink>
                            <NavLink to={'/apps'}><li>Apps</li></NavLink>
                            <NavLink to={'/installed'}> <li>Installation</li></NavLink>


                        </ul>
                    </div>
                    <NavLink to={'/'}>
                        <div className='flex items-center gap-2'>
                            <img className='h-8' src={logo} alt="Logo picture" />
                            <a className="text-lg font-bold bg-gradient-to-br 
                        from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hidden md:block">APP.STORE</a>
                        </div>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex items-center gap-4 font-medium'>
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#632EE3] underline' : ''}`}
                            to={'/'}>
                            <span
                                className={`hover:text-[#632EE3] flex gap-1 items-center`}><TbHome></TbHome> Home</span></NavLink>
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#632EE3] underline' : ''}`}
                            to={'/apps'}>
                            <span
                                className={`hover:text-[#632EE3] flex items-center gap-1`}><FaAppStore></FaAppStore> Apps</span></NavLink>
                        <NavLink
                            className={({ isActive }) => `${isActive ? 'text-[#632EE3] underline' : ''}`}
                            to={'/installed'}>
                            <span
                                className={`hover:text-[#632EE3] flex items-center gap-1`}><MdInstallDesktop></MdInstallDesktop> Installation</span></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/30526/' target='blank' className="btn bg-gradient-to-bl  from-[#632EE3] to-[#9F62F2] text-white"><span><FaGithub></FaGithub></span>Contribution</a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
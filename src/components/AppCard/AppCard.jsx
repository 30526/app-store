import React from 'react';
import img from '../../assets/demo-app (4).webp'
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const AppCard = () => {
    return (
        <div className='p-3 rounded-lg bg-white'>
            <img className='rounded-md w-full object-cover' src={img} alt="" />
            <h3 className='text-xl font-bold mt-4 mx-1'>Demo App</h3>
            <div className='flex justify-between my-2 mx-1'>
                <span className='bg-[#F1F5E8] py-1 px-3 rounded-md text-xs text-[#00D390] flex gap-1'><FaDownload></FaDownload> 9M</span>
                <span className='bg-[#FFF0E1] py-1 px-3 rounded-md text-xs text-[#FF8811] flex gap-1'><FaStar></FaStar> 5</span>
            </div>
        </div>
    );
};

export default AppCard;
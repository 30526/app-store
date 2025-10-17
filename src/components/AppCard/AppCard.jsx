import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';



const AppCard = ({ app }) => {
    const { title, downloads, ratingAvg, image, id } = app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='p-3 rounded-lg bg-white'>
                <div className='rounded-md p-8 bg-[#f3f3f3]'>
                    <img className='rounded-md w-full object-cover' src={image} alt="" />
                </div>
                <h3 className='text-xl font-bold mt-4 mx-1'>{title}</h3>
                <div className='flex justify-between my-2 mx-1'>
                    <span className='bg-[#F1F5E8] py-1 px-3 rounded-md text-xs text-[#00D390] flex gap-1'><FaDownload></FaDownload> {downloads}</span>
                    <span className='bg-[#FFF0E1] py-1 px-3 rounded-md text-xs text-[#FF8811] flex gap-1'><FaStar></FaStar> {ratingAvg}</span>
                </div>
            </div></Link>
    );
};

export default AppCard;
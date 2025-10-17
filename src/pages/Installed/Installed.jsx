import React, { useState } from 'react';
import { getItem, handleRemove } from '../../components/LocalStorage/localStorage';
import Container from '../../components/Container/Container';
import { FaDownload, FaStar } from 'react-icons/fa';

const Installed = () => {
    const getData = getItem()
    const [installedApp, setInstalledApp] = useState(getData)

    const handleUninstallBtn = (id) => {
        handleRemove(id)
        setInstalledApp(prev => prev.filter(p => p.id !== id))
    }

    return (
        <Container>
            <div className='min-h-screen mb-15'>

                <div className='text-center my-10 md:my-20 '>
                    <h2 className='my-4 text-4xl text-[#001931] font-bold'>Your Installed Apps</h2>
                    <p className='text-xs  text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-gray-800 mb-5'>{installedApp.length} Apps Found</h2>

                    {
                        installedApp.map(data => <div key={data.id} className='flex flex-col md:flex-row  md:justify-between items-center bg-white p-4 rounded-2xl mb-3'>
                            <div className='flex gap-10 items-center'>
                                <div className='bg-[#ebebeb] p-4 rounded-lg'>
                                    <img className='h-15' src={data.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold mb-6'>{data.title}</h2>
                                    <div className='flex gap-4 items-center'>
                                        <span className='text-[#00D390] flex gap-1 items-center'><FaDownload></FaDownload> {data.downloads}</span>
                                        <span className='text-[#FF8811] flex gap-1 items-center'><FaStar></FaStar> {data.ratingAvg}</span>
                                        <span>{data.size}MB</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstallBtn(data.id)}
                                className='bg-[#00D390] ml-auto md:ml-0 btn text-white mt-4 text-lg font-normal py-6'>Uninstall</button>
                        </div>)
                    }
                </div>

            </div>
        </Container>
    );
};

export default Installed;
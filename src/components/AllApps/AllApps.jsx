import React, { useState } from 'react';
import useAppData from '../../Hooks/useAppData';
import Container from '../Container/Container';
import AppCard from '../AppCard/AppCard';

const AllApps = () => {
    const [appData] = useAppData();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchData = term ? appData.filter(app => app.title.toLowerCase().includes(term)) : appData;
    return (
        <Container>
            <div>
                <div className='text-center my-10 md:my-20 '>
                    <h2 className='my-4 text-4xl text-[#001931] font-bold'>Trending Apps</h2>
                    <p className='text-xs  text-gray-600'>Explore All Trending Apps on the Market Developed by Us</p>
                </div>
                <div className='flex items-center justify-between mb-10'>
                    <h4 className='text-xl font-bold'>Total Apps <small className='text-xs font-medium'>({searchData.length}) apps found</small></h4>
                    <label>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className='border py-1 px-3 rounded-lg bg-white'
                            type="search" placeholder='Search here' />
                    </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-10'>
                    {
                        searchData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllApps;
import React from 'react';
import useAppData from '../../Hooks/useAppData';
import Container from '../Container/Container';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = () => {
    const [appData] = useAppData()
    const trendingApp = appData.slice(0, 8);
    return (
        <Container>
            <div>

                <div className='text-center my-10 md:my-20 '>
                    <h2 className='my-4 text-4xl text-[#001931] font-bold'>Trending Apps</h2>
                    <p className='text-xs  text-gray-600'>Explore All Trending Apps on the Market Developed by Us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mb-10'>
                    {
                        trendingApp.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
                <div className='text-center mb-20'>
                    <Link to={'/apps'} className='btn bg-gradient-to-br
                        from-[#632EE3] to-[#9F62F2] text-white px-6 rounded-md'>Show All</Link>
                </div>
            </div>
        </Container>
    );
};

export default TrendingApps;
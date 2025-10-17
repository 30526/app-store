import React from 'react';
import { useParams } from 'react-router';
import useAppData from '../../Hooks/useAppData';
import Container from '../../components/Container/Container';
import downloadIcon from '../../assets/icon-downloads.png'
import starIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import Recharts from '../../components/Recharts/Recharts';


const AppDetails = () => {
    const { id } = useParams()
    const [appData, loading] = useAppData()
    const app = appData.find(getApp => getApp.id === parseInt(id));
    if (loading) return <p>Loading...</p>
    const { title, image, companyName, ratingAvg, reviews, downloads, size, ratings } = app;
    return (
        <Container>
            <div className='my-15 items-center flex gap-10 flex-col md:flex-row'>

                <div className='bg-white h-78 p-6 rounded-md  '>
                    <img className='mx-auto' src={image} alt="Product Image" />
                </div>

                <div className='mr-auto px-6'>
                    <h4 className='text-4xl font-bold text-gray-800 mb-3'>{title}</h4>
                    <p className='text-gray-600'>Developed by <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>
                    <div className='border-1 border-gray-200 md:w-4xl my-6'></div>
                    <div className='flex gap-10 md:gap-20 flex-col md:flex-row'>
                        <div>
                            <img src={downloadIcon} alt="download icon" />
                            <p className='my-2'>Downloads</p>
                            <h3 className='text-3xl font-bold text-gray-900'>{downloads}</h3>
                        </div>
                        <div>
                            <img src={starIcon} alt="rating-icon" />
                            <p className='my-2'>Average Ratings</p>
                            <h3 className='text-3xl font-bold text-gray-900'>{ratingAvg}</h3>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="download icon" />
                            <p className='my-2'>Total Reviews</p>
                            <h3 className='text-3xl font-bold text-gray-900'>{reviews}</h3>
                        </div>
                    </div>
                    <button

                        className='bg-[#00D390] btn text-white mt-4 text-lg font-normal py-6'>Install Now ({size}MB)</button>
                </div>
            </div>
            <div>
                <Recharts key={id} ratings={ratings}></Recharts>
            </div>
        </Container>
    );
};

export default AppDetails;
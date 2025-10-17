import React from 'react';
import notFound from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div className='my-20'>
            <img className='mx-auto' src={notFound} alt="" />
            <div className='text-center mb-30 mt-10'>
                <Link
                    to={'/apps'}
                    className='btn px-6 bg-gradient-to-br
                        from-[#632EE3] to-[#9F62F2] text-white'>Go Back
                </Link>
            </div >
        </div>
    );
};

export default AppError;
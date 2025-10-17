import React from 'react';
import notFound from '../../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='my-20'>
            <img className='mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default AppError;
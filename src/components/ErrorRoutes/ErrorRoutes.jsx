import React from 'react';
import errorImg from "../../assets/error-404.png"
import Container from '../Container/Container';
import { Link } from 'react-router';

const ErrorRoutes = () => {
    return (
        <Container>
            <div className='mt-25 flex justify-center'>
                <img src={errorImg} alt="" />
            </div>
            <h2 className='text-4xl font-bold text-shadow-gray-900 text-center mb-10 my-10'>Oops, Page not found!</h2>
            <div className='text-center mb-30 '>
                <Link
                    to={'/apps'}
                    className='btn px-6 bg-gradient-to-br
                        from-[#632EE3] to-[#9F62F2] text-white'>Go Back
                </Link>
            </div >
        </Container>


    );
};

export default ErrorRoutes;
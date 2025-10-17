import React from 'react';
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='text-center mt-20 border'>
                <h2
                    className='font-bold text-6xl text-[#001931e8]'
                >We Build<br /> <span className='bg-gradient-to-br 
                        from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h2>
                <p className='mx-auto mt-4 text-[#627382] max-w-200'>At APP.STORE, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 justify-center mt-10'>
                    <a href="https://play.google.com/store/apps?hl=en" target='blank'>
                        <button className='btn shadow-none'><span><img className='h-4' src="https://i.ibb.co.com/8gG2Q8q3/playstore.png" alt="" /></span> Google Play</button>
                    </a>
                    <a href="https://www.apple.com/app-store/" target='blank'>
                        <button className='btn shadow-none'><span><img className='h-6' src="https://i.ibb.co.com/KzS93Ymy/appstore.png" alt="" /></span> App Store</button>
                    </a>
                </div>
                <div className='flex justify-center mt-12'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
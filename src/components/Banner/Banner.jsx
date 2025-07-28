import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 my-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row-reverse items-center p-5 lg:p-20">
                <img
                    src={bannerImg}
                    className="lg:max-w-lg rounded-lg shadow-2xl"
                />
                <div className='space-y-8'>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold lg:leading-16 font-mono">Books to freshen up your bookshelf</h1>
                    <button className="btn rounded-lg bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='md:flex justify-between md:px-20 p-3 bg-blue-200 mb-10'>
            <div className='hidden md:block text-3xl font-bold'>
                <h3>Honest Review</h3>
            </div>
            <div className='block text-xl font-semibold flex gap-4'>
                <CustomLink className='p-2 rounded-md' to="/">Home</CustomLink>
                <CustomLink className='p-2 rounded-md' to="/dashboard">Dashboard</CustomLink>
                <CustomLink className='p-2 rounded-md' to="/reviews">Reviews</CustomLink>
                <CustomLink className='p-2 rounded-md' to="/blogs">Blogs</CustomLink>
                <CustomLink className='p-2 rounded-md' to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;
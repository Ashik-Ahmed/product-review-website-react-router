import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between px-20 p-3 bg-blue-200'>
            <div className='text-3xl font-bold'>
                <h3>Honest Review</h3>
            </div>
            <div className='text-xl font-semibold flex gap-4'>
                <a href="/">Home</a>
                <a href="/reviews">Reviews</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;
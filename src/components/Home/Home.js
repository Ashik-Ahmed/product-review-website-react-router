import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-between items-center mx-28'>
            <div>
                <h1 className='text-6xl'>A BRIEF HISTORY OF TIME</h1>
                <h3 className='text-3xl text-red-400 text-right'>-STEPHEN HAWKING</h3>
            </div>
            <div>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333578746l/3869.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;
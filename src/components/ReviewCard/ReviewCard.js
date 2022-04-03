import React from 'react';

const ReviewCard = (props) => {
    const { name, img, description, rating } = props.review;
    return (
        <div className='text-left bg-white rounded-md md:w-3/4  md:mx-auto mt-4'>
            <div className='md:flex items-center gap-4 mb-2 p-3 border-b-4'>
                <img className='w-8 h-8 rounded-full' src={img} alt="" />
                <h4 className='font-semibold'>{name}</h4>
            </div>
            <div className='px-4 pb-3'>
                <p className='font-bold mr-20'>Rating: {rating}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
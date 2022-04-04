import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='mt-3'>
            <h2 className='text-2xl text-center font-semibold border-b-2 border-red-400'>All Reviews from the readers</h2>
            <div className='md:grid grid-cols-3 my-4'>
                {
                    reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;
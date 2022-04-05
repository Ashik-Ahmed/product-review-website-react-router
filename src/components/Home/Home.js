import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {

    // getting reviews data from custom hook 
    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    return (
        <div>
            <div className='md:flex justify-between items-center md:mx-20'>
                <div className='w-full md:w-3/4 md:px-14 mt-4 p-2 md:p-0'>
                    <h1 className='text-3xl md:text-6xl leading-tight tracking-tight font-extrabold'>A BRIEF HISTORY OF TIME</h1>
                    <h3 className='text-xl md:text-3xl text-orange-400 leading-tight tracking-tight font-bold text-center md:text-right mb-8'>- Stephen Hawking</h3>
                    <p className='italic text-blue-600'>A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?</p>
                    <button className='text-lg font-semibold bg-orange-400 md:bg-transparent hover:bg-orange-400 border-2 border-blue-400 py-2 px-4 rounded-3xl mt-8 shadow-xl'>Order Now</button>
                </div>
                <div className='border-8 border-orange-400 shadow-lg mt-4'>
                    <img className='w-full' src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333578746l/3869.jpg" alt="" />
                </div>
            </div>
            <div className='text-center my-16'>
                <div className='text-3xl border-b-2 border-red-400 pb-2'>
                    <h2>Reader Reviews (3)</h2>
                </div>

                {/* Showing only 3 reviews in home page */}
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }

                {/* This button will navigate user to all reviews page  */}
                <button onClick={() => navigate('/reviews')} className='text-lg font-semibold bg-transparent hover:bg-orange-400 border-2 border-blue-400 py-2 px-4 rounded-3xl mt-8 shadow-xl'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;
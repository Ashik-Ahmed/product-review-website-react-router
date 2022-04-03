import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    return (
        <div>
            <div className='md:flex justify-between items-center md:mx-28'>
                <div className='w-3/4 px-16'>
                    <h1 className='text-6xl'>A BRIEF HISTORY OF TIME</h1>
                    <h3 className='text-3xl text-red-400 text-right mb-8'>-STEPHEN HAWKING</h3>
                    <p className='italic text-blue-600'>A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?</p>
                    <button className='text-lg font-semibold bg-transparent hover:bg-orange-400 border-2 border-blue-400 py-2 px-4 rounded-3xl mt-8'>Order Now</button>
                </div>
                <div className=''>
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333578746l/3869.jpg" alt="" />
                </div>
            </div>
            <div className='text-center my-16'>
                <div className='text-3xl border-b-2 border-red-400 pb-2'>
                    <h2>Reader Reviews (3)</h2>
                </div>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }

                <button onClick={() => navigate('/reviews')} className='text-lg font-semibold rounded-md mt-10 bg-blue-400 p-3'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;
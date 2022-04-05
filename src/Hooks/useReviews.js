import { useEffect, useState } from "react"


// Custom hook to load all reviews from data 

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews];
}

export default useReviews;
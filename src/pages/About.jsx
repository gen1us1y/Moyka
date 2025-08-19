import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../contexts/ApiContext';
import ReviewForm from '../components/ReviewForm';
import ReviewCard from '../components/ReviewCard';
import '../styles/components/reviews.css'
import '../styles/pages/about.css'

export default function About() {
  const { API_URL } = useContext(ApiContext);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_URL}/reviews`);
        if (!response.ok) throw new Error('Ошибка загрузки отзывов');
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [API_URL]);

  // Обработчик добавления нового отзыва
  const handleNewReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  if (isLoading) return <div>Загрузка отзывов...</div>;
  if (error) return <div>Ошибка: {error}</div>;


  return (
    <div className="about-page">
		<div className="about-page">
		  <section className="reviews-section">
			<h2>Отзывы наших клиентов</h2>
			
			<div className="reviews-list">
			  {reviews.map(review => (
				<ReviewCard 
				  key={review.id} 
				  review={review} 
				/>
			  ))}
			</div>
			
			<ReviewForm onReviewAdded={handleNewReview} />
			
		  </section>
		</div>
    </div>
	  );
	}
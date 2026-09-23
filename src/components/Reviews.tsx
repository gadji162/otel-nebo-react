import Reveal from './Reveal';
import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Отзывы</span>
          <h2 className="section-title">Что говорят гости</h2>
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <Reveal as="blockquote" className="review-card" key={review.id}>
              <p>{review.text}</p>
              <cite>{review.author}</cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

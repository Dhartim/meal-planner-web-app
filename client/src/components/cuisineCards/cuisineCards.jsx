import React from 'react';
import MealCard from '../mealCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './cuisineCards.css';


function CuisineCards(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };

  return (
    <div className="cuisine-list">
      <h2>{props.cuisineType}</h2>
      <Slider {...settings}>
        {
          props.meals.map((meal) => (
            <MealCard
              key={meal.id}
              {...meal}
              cuisineType={props.cuisineType}
            />
          ))
        }
      </Slider>
    </div>
  );
}

export default CuisineCards;

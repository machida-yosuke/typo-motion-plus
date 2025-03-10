import type { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselCard } from './CarouselCard';
import type { CarouselCardProps } from './CarouselCard';

interface CarouselProps {
  cards: Array<CarouselCardProps>;
}

export const Carousel: FC<CarouselProps> = ({ cards }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.title} className="px-2">
            <CarouselCard {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}; 
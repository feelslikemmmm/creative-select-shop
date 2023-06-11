import { useEffect, useRef, useState } from 'react';

const TOTAL_SLIDES = 2;

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<null | HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
      // slideRef.current.style.width = '25px';
      // slideRef.current.style.height = '4px';
      console.log(slideRef);
    }
  }, [currentSlide, slideRef]);

  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full relative" ref={slideRef}>
        <div className="flex w-full	h-full">
          <img
            className="flex-none w-full h-full bg-no-repeat object-cover bg-slide1 opacity-80 z-3"
            src={process.env.PUBLIC_URL + '/images/slide1.png'}
            alt="slide1"
          />
          <img
            className="flex-none w-full h-full bg-no-repeat object-cover bg-slide1 opacity-80 z-3"
            src={process.env.PUBLIC_URL + '/images/slide2.png'}
            alt="slide2"
          />
          <img
            className="flex-none w-full h-full bg-no-repeat object-coverbg-slide1 opacity-80 z-3"
            src={process.env.PUBLIC_URL + '/images/slide3.png'}
            alt="slide3"
          />
        </div>
      </div>
      <ul className="absolute bottom-0 right-4 z-10 align-top">
        <li className="inline-block">
          <button
            onClick={prevSlide}
            className="block w-[8px] h-[8px] mr-3 ml-3  opacity-60	 indent-[-9999]"
          >
            {'<'}
          </button>
        </li>
        <li className="inline-block">
          <button
            onClick={nextSlide}
            className="block w-[8px] h-[8px] mr-3 ml-3 opacity-60	 indent-[-9999]"
          >
            {'>'}
          </button>
        </li>
      </ul>
    </section>
  );
}

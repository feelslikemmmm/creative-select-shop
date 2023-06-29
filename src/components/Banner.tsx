import { slideArray } from '@constants/SlideArray';
import useInterval from '@hooks/useInterval';
import { useRef, useState } from 'react';

export default function Banner() {
  const [slideIndex, setSlideIndex] = useState(1);
  const custominterval = 3000;
  const outRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const SLIDE_NUM = slideArray.length;
  const beforeSlide = slideArray[SLIDE_NUM - 1];
  const afterSlide = slideArray[0];

  let copiedArr = [beforeSlide, ...slideArray, afterSlide];
  const COPIED_NUM = copiedArr.length;

  useInterval(
    () => setSlideIndex((slideIndex) => slideIndex + 1),
    custominterval
  );

  if (slideIndex === 10) {
    if (slideRef.current) {
      slideRef.current.style.transition = '';
    }

    setSlideIndex(1);

    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 500ms ease-in-out';
      }
    }, 0);
  }

  if (slideIndex === 0) {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = '';
      }

      setSlideIndex(8);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 500ms ease-in-out';
        }
      }, 0);
    }, 500);
  }

  if (slideIndex === 5) {
    if (slideRef.current) {
      slideRef.current.style.transition = '';
    }

    setSlideIndex(1);

    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 500ms ease-in-out';
      }
    }, 0);
  }

  return (
    <section className="h-96 relative overflow-hidden z-[1] group" ref={outRef}>
      <div
        className="flex w-full h-full"
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}vw`,
          transition: 'all 500ms ease-in-out',
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((item, idx) => (
          <div key={idx} className="flex w-full h-full">
            <img
              className="flex-none w-full h-full bg-no-repeat object-cover bg-slide1 opacity-80"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

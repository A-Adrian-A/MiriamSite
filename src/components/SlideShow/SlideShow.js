import React, { useEffect } from 'react';
import './SlideShow.css';
import vorsorge from '../../img/vorsorge/vorsorge.jpg';
import eigenheim from '../../img/eigenheim/eigenheim.jpg';
import versicherungen from '../../img/versicherungen/versicherungen.jpg';
import vermögensaufbau from '../../img/vermoegensaufbau/vermoegensaufbau.jpg';
import { ReactComponent as GoBack } from '../../icon/arrow_back.svg'
import { ReactComponent as GoForward } from '../../icon/arrow_forward.svg'
import Button from '../button/Button';

const slides = [
  {
    button_text: 'Eigenheim',
    link: '/home-owner',
    src: eigenheim,
  },
  {
    button_text: 'Vorsorge',
    link: '/pension',
    src: vorsorge,
  },
  {
    button_text: 'Versicherungen',
    link: '/insurance',
    src: versicherungen,
  },
  {
    button_text: 'Vermögensaufbau',
    link: '/appreciation-of-assets',
    src: vermögensaufbau,
  },
];
const delay = 5000;


const SlideShow = (props) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  function goRight() {
    if (index + 1 <= slides.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  function goLeft() {
    if (index - 1 >= 0) {
      setIndex(index - 1)
    } else {
      setIndex(slides.length - 1)
    }
  }

  return (
    <div className='slide-show'>
      <div className='slide-show__slider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {slides.map((slide, index) => (
          <div className='slide-show__slide' >
            <img className='slide-show__image' key={index} src={slide.src} alt=''></img>
            <div className='slide-show__description'
              style={{ left: `${50 + index * 100}%` }}>
              <div className='slide-show__description-center'>
                <Button text={slide.button_text} link={slide.link}></Button>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div className="slide-show__dots">
        {slides.map((_, dot_index) => (
          <div key={dot_index}
            className={`slide-show__dot${index === dot_index ? " active" : ""}`}
            onClick={() => setIndex(dot_index)}
          ></div>
        ))}
      </div>

      <div className='slide-show__button right'
        onClick={goRight}>
        <div className='slide-show__button__svg'>
          <GoForward fill='white'></GoForward>
        </div>
      </div>
      <div className='slide-show__button '
        onClick={goLeft}>
        <div className='slide-show__button__svg left'>
          <GoBack fill='white'></GoBack>
        </div>
      </div>


    </div>
  );
};

export default SlideShow;
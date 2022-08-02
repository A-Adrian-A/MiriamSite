import React, { useEffect } from 'react';
import './SlideShow.css';
import vorsorge from '../../img/vorsorge/vorsorge.jpg';
import eigenheim from '../../img/eigenheim/eigenheim.jpg';
import versicherungen from '../../img/versicherungen/versicherungen.jpg';
import vermögensaufbau from '../../img/vermoegensaufbau/vermoegensaufbau.jpg';
import { ReactComponent as GoBack } from '../../icon/arrow_back.svg'
import { ReactComponent as GoForward } from '../../icon/arrow_forward.svg'
import Button from '../button/Button';
import { Trans } from 'react-i18next';

const slides = [
  {
    button_text: 'Eigenheim',
    text: 'Eigenheim bla',
    link: '/house',
    src: eigenheim,
  },
  {
    button_text: 'Vorsorge',
    text: 'Vorsorge bla',
    link: '/house',
    src: vorsorge,
  },
  {
    button_text: 'Versicherungen',
    text_color: 'black',
    text: 'Versicherung bla',
    link: '/house',
    src: versicherungen,
  },
  {
    button_text: 'Vermögensaufbau',
    text: 'Vermögensaufbau bla',
    link: '/house',
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
                <div className='slide-show__text'
                  style={slide.text_color ? { color: slide.text_color } :{}}
                >{slide.text}</div>
                <Button text={slide.button_text } link='/house'></Button>
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
        <GoForward fill='white'></GoForward>
      </div>
      <div className='slide-show__button left'
        onClick={goLeft}>
        <GoBack fill='white'></GoBack>
      </div>


    </div>
  );
};

export default SlideShow;
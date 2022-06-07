import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';
import contents from '../../utils/content';

const Carousel = () => {
  return (
    <Slider autoplay={3000} className="slider-wrapper">
      {contents.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
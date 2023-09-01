import './CarrouselSlide.css';

const CarouselSlide = ({ imgSrc, caption }) => (
  <div className='contenedor-slide'>
    <img src={imgSrc} alt="Imagen del carrusel"/>
    <div className="caption-img">
      <h3 className='caption-text'>{caption}</h3>
    </div>
  </div>
);

export default CarouselSlide;
import { Carousel } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';

const carouselData = [
  { imgSrc: 'https://e0.pxfuel.com/wallpapers/876/513/desktop-wallpaper-craft-beer-beers.jpg', 
  caption: 'Explorá nuestras variedades en Cerveza Artesanal' },
  { imgSrc: 'https://www.telediariodigital.net/wp-content/uploads/2018/01/birra.jpg',
  caption: 'Brindemos por la pasión cervecera' },
  { imgSrc: 'https://www.infobae.com/new-resizer/8SIQ8QKJgbRC7dKAjGzYxQpcAOg=/992x558/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/06123915/cerveza-1920-2.jpg',
  caption: 'Disfrutá el sabor de la autenticidad' }
];

const CarouselMain = () => (
  <Carousel fade>
    {carouselData.map((slide, index) => (
      <Carousel.Item key={index}>
        <CarouselSlide imgSrc={slide.imgSrc} caption={slide.caption} />
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselMain;
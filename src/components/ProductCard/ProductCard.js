// import { Button, Card } from 'react-bootstrap';
// import './ProductCard.css'

// const ProductCard = ({id, name, price, image}) => {

//   return ( 
//     <Card style={{ width: '18rem'}}>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           ${price}
//         </Card.Text>
//         <Button variant="primary">Ver producto</Button>
//       </Card.Body>
//     </Card>
//    );
// }
 
// export default ProductCard;

import { Card } from 'react-bootstrap';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Card style={{ width: '18rem' }} className="w-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
        <Link to={`/products/${id}`} className='btn fw-bold btn-warning' variant="primary">Ver producto</Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

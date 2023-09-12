import { Card } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";
import './CardDetail.css'
import { URL_PRODUCTS } from "../../constanst";




const CardDetails = () => {
  const params = useParams()
  const product = useGet(`${URL_PRODUCTS}/${params.id}`)
  const location = useLocation()
  console.log(location);
  return (
    <div className="container-product-detail d-flex justify-content-center align-items-center">
      <Card className="text-center col-sm-8 col-md-7 col-lg-6 col-xl-4 m-4 m-xs-5">
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="card-body">
          <Card.Title>
            <h4>{product.name}</h4>
          </Card.Title> 
          <Card.Text className="text-success">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetails;

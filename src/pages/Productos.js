import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import useGet from "../hooks/useGet";
import { URL_PRODUCTS } from "../constanst";

const Products = () => {
  const products = useGet(URL_PRODUCTS)
  return (
    <>
      <Header />  
      <Container>    
        <Row className="g-4 mt-1 mb-4">
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <ProductCard className='m-5'
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </> 
  );
}

export default Products;
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Rating from "../../components/Rating";

const ProductPage = () => {
  const router = useRouter();
  let productId = router.query.product;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/api/products/${parseInt(productId)}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Head>
        <title>ProShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {product && (
        <main className="py-3">
          <Container>
            <Link href="/">
              <a className="btn btn-light my-3">Go Back</a>
            </Link>
            <Row>
              <Col md={6}>
                <Image src={`${process.env.BACKEND_URL + product.image}`} alt={product.name} fluid />
              </Col>

              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                      color={"#f8e825"}
                    />
                  </ListGroup.Item>

                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button
                        className="btn btn-block"
                        disabled={product.countInStock == 0}
                        type="button"
                      >
                        Add to Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;

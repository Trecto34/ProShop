import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link href="/product/[product]" as={`/product/${product._id}`}>
        <a>
          <Card.Img src={product.image} />
        </a>
      </Link>

      <Card.Body>
        <Link href="/product/[product]" as={`/product/${product._id}`}>
          <a>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

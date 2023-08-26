import './Home.css';
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
function ProductList({ product,addToCart }) {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
        {product.map((productItem, productIndex) => (
          <MDBCol key={productIndex} md='4' className='mb-4'>
            <MDBCard>
              <img src={productItem.url} className='img-fluid' alt={productItem.name} />
              <MDBCardBody>
                <MDBCardTitle>{productItem.name}</MDBCardTitle>
                <MDBCardText>
                  {productItem.category} | {productItem.seller}
                </MDBCardText>
                <p>Rs. {productItem.price} /-</p>
                <MDBBtn color='primary' onClick={() => addToCart(productItem)}>
                  Add To Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </div>
    )
}

export default ProductList
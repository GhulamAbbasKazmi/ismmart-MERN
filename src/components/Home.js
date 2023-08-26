import './Home.css';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'; 


function Home() {

  const [product, setProduct] = useState([
    {
      url: 'https://freepngimg.com/thumb/categories/627.png',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://freepngimg.com/thumb/gold/37290-8-gold-rings-transparent-background.png',
      name: 'LOREM Ring Gold',
      category: 'Rings',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header className='header' count={cart.length} handleShow={handleShow}></Header>

      <MDBContainer className="product-container mt-6">
        <MDBRow>
          <MDBCol size="20" md="13">
            {showCart ? (
              <CartList cart={cart}></CartList>
            ) : (
              <ProductList product={product} addToCart={addToCart}></ProductList>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Home;
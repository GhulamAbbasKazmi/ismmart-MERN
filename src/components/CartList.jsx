import { useEffect, useState } from 'react';
import './Home.css';
import { MDBBtn } from 'mdb-react-ui-kit';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className="cart-container"> {/* Apply a class for styling */}
        {CART?.map((cartItem, cartindex) => (
            <div className="cart-item" key={cartItem.id}> {/* Apply a class for styling */}
                <img src={cartItem.url} width={90} alt={`Item ${cartindex}`} /> {/* Provide an alt attribute */}
                <span> {cartItem.name} </span>
                <MDBBtn
                    onClick={() => {
                        const _CART = CART.map((item, index) =>
                            cartindex === index
                                ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                                : item
                        );
                        setCART(_CART);
                    }}
                    color="danger" // Apply MDB color class
                    outline // Use outline style
                >
                    -
                </MDBBtn>
                <span> {cartItem.quantity} </span>
                <MDBBtn
                    onClick={() => {
                        const _CART = CART.map((item, index) =>
                            cartindex === index
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        );
                        setCART(_CART);
                    }}
                    color="success" // Apply MDB color class
                    outline // Use outline style
                >
                    +
                </MDBBtn>
                <span> Rs. {cartItem.price * cartItem.quantity} </span>
            </div>
        ))}

        <p className="total-price">
            Total <span></span>
            {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
        </p>
    </div>
    )
}

export default CartList
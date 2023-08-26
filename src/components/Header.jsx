import './Home.css';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons/fa
import { Badge } from 'react-bootstrap'; // Import Badge component from react-bootstrap
// import { MDBCardImage}from 'mdb-react-ui-kit';


function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div className='logo' onClick={() => props.handleShow(false)} ><img  src="https://s.rozee.pk/company_logos/20/cpx_20559918713857.jpg"/></div>
            <div className='cart'  onClick={() => props.handleShow(true)} style={{ cursor: 'pointer' }}>
            <FaShoppingCart size={59} />
                <sup className='sup' ><Badge variant="danger">{props.count}</Badge> </sup>
            </div>
        </div>
    );
}

export default Header;
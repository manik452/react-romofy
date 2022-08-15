import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa'

const MiddleHeader = () => {
    return (
        <div className="header_midil">
            <div className="container">
                <div className="row d_flex">
                    <div className="col-md-4">
                        <ul className="conta_icon d_none1">
                            <li><Link to="mailto:manik.cse.duet@gmail.com"><img src="/images/email.png" alt="#" /> Send Email</Link> </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Link className="logo" to="#"><img src="/images/logo.png" alt="#" /></Link>
                    </div>
                    <div className="col-md-4">
                        <ul className="right_icon d_none1">
                            <li >
                                <Link to="#" className="d-flex px-4">
                                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" aria-rowcount="12"></i>
                                    <div className="rounded-circle bg-danger shoppingCart">
                                    2
                                    </div>
                                </Link>
                             </li>
                            <li><Link to="#"><img src="/images/shopping.png" alt="#" /></Link>  </li>
                           
                            <Link to="#" className="order">Order Now</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
/*<FaShoppingCart >12</FaShoppingCart >*/
export default MiddleHeader

import { Link } from "react-router-dom"

const BottomHeader = () => {
    return (
        <div className="header_bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExample04">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="index.html">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="about.html" className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="products.html">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="fashion.html">Fashion</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="news.html">News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="contact.html">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <div className="search">
                            <form action="/action_page.php">
                                <input className="form_sea" type="text" placeholder="Search" name="search" />
                                <button type="submit" className="seach_icon"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader

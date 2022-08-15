import { Link } from "react-router-dom"

const TopHeader = (props) => {
    return (
        <div className="header_top d_none1">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="conta_icon ">
                            <li><Link to="#"><img src="/images/call.png" alt="#" />Call us: 0126 - 922 - 0162</Link> </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="social_icon">
                            <li> <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                            </li>
                            <li> <Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li> <Link to="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                            <li> <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="se_fonr1">
                            <form action="#" >
                                <div className="select-box">
                                    <label htmlFor="select-box1" className="label select-box1"><span className="label-desc">English</span> </label>
                                    <select id="select-box1" className="select">
                                        <option value="Choice 1">English</option>
                                        <option value="Choice 1">Falkla</option>
                                        <option value="Choice 2">Germa</option>
                                        <option value="Choice 3">Neverl</option>
                                    </select>
                                </div>
                            </form>
                            <span className="time_o"> Open hour: {props.openHour}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader

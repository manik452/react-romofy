import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <section className="banner_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="text-bg">
                            <h1> <span className="blodark"> Romofyi </span> <br />Trands 2019</h1>
                            <p>A huge fashion collection for ever </p>
                            <Link className="read_more" to="#">Shop now</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ban_img">
                            <figure><img src="/images/ban_img.png" alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;

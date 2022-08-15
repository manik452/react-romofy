import { Link } from "react-router-dom"

const FeatureProduct = () => {
    return (

        <div id="project" className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product_main">


                        <div class="wrapper">
                            <div class="card"><img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                                <div class="info">
                                    <h1>Mountain</h1>
                                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div class="card"><img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                                <div class="info">
                                    <h1>Road</h1>
                                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div class="card"><img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                                <div class="info">
                                    <h1>Protester</h1>
                                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                            
                        </div>

                        <div className="project_box  card">
                            <div className="dark_white_bg" ><img src="/images/shoes1.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                            <div class="info">
                                <h1>Protester</h1>
                                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                <button>Read More</button>
                            </div>

                        </div>


                        <div className="project_box ">
                            <div className="dark_white_bg" ><img src="/images/shoes2.png" alt="#" /></div>
                            <h3 >Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/shoes3.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/shoes4.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/shoes5.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>


                        <div className="project_box ">
                            <div className="dark_white_bg" ><img src="/images/tisat1.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box ">
                            <div className="dark_white_bg" ><img src="/images/tisat2.png" alt="#" /></div>
                            <h3 >Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/tisat3.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/tisat4.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/tisat5.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>


                        <div className="project_box ">
                            <div className="dark_white_bg" ><img src="/images/mix1.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box ">
                            <div className="dark_white_bg" ><img src="/images/mix2.png" alt="#" /></div>
                            <h3 >Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/mix3.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/mix4.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="project_box">
                            <div className="dark_white_bg" ><img src="/images/mix5.png" alt="#" /></div>
                            <h3>Short Openwork Cardigan $120.00</h3>
                        </div>

                        <div className="col-md-12">
                            <Link className="read_more" to="#">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct

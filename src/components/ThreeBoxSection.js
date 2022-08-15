

const ThreeBoxSection = () => {
    return (
        <div className="three_box">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="/images/icon_mony.png" alt="icon Mony" /></i>
                            <span>Money Back</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="/images/icon_gift.png" alt="icon gift" /></i>
                            <span>Special Gift</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="/images/icon_car.png" alt="icon car" /></i>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeBoxSection

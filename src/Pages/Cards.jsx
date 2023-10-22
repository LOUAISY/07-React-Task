
const Cards = () => {
    return (
        <>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">Basic Plan</div>
                            <div className="card-body">
                                <h5 className="card-title">$10/month</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                <a href="#" className="btn btn-primary">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">Pro Plan</div>
                            <div className="card-body">
                                <h5 className="card-title">$20/month</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                <a href="#" className="btn btn-primary">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">Premium Plan</div>
                            <div className="card-body">
                                <h5 className="card-title">$30/month</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                <a href="#" className="btn btn-primary">Choose Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
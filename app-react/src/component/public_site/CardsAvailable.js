import React from 'react';

export default function CardsAvailable() {
    return (
        <div className="container">
            <div className="row">
                <div className="jumbotron container-fluid">
                    <h1>Central Bank credit cards</h1>
                    <p1 className="lead"> Choose the credit card that fits your needs. </p1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <div className="card card-img">
                        <img src="http://pluspng.com/img-png/credit-card-png-hd--960.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card card-img">
                        <img src="https://www.hnb.net/images/img/ca_affinity_credit_card.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="jumbotron container-fluid">
                    <h1></h1>
                    <p1 className="lead"> We care about ur financial needs bla bla </p1>
                </div>
            </div>
        </div>
    );
}
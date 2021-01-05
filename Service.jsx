import React from 'react';
import ReactDOM from 'react-dom';
import web1 from "../src/images/prt1.svg";
import web from "../src/images/im2.svg";
const Service=()=>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web1} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                        <img src={web} class="card-img-top" alt="image"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>     
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
        </>

    );
}
export default Service;
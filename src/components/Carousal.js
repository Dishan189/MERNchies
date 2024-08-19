import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner">

                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{zIndex:"10"}}>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                            </form>
                        </div>
                    

                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightness(40%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightness(40%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1627662168223-7df99068099a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightness(40%)"}} alt="..." />
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

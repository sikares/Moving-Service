import React from 'react'

function Main() {
  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis mt-5">Move With Joy</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to our website, where we are on a mission to provide
          exceptional moving services to customers in the US. As a startup, we
          believe that moving doesn't have to be stressful or complicated, and
          we are passionate about making the process as seamless and enjoyable
          as possible.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Get a Quote
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
          <img
            src="/images/moving-van.jpg"
            className="img-fluid border rounded-3 shadow mb-5"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
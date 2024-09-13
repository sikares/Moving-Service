import React from 'react'

function Features() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Why Move With Us?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded-3">
            <img
              src="/images/briefcase.svg"
              width="30"
              height="30"
              class="bi bi-box"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis">Professional</h3>
          <p>
            Our team of professional movers are trained to prioritize
            efficiency, organization, and attention to detail. We understand
            that your possessions are more than just objects - they are a
            reflection of your life, memories, and experiences. That's why we
            take extra care to ensure that everything is packed and transported
            with the utmost care and attention.
          </p>
          <a href="#" className="icon-link">
            Get a quote
            <img
              src="/images/chevron-right.svg"
              class="bi bi-box"
            />
          </a>
        </div>
        <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded-3">
            <img
              src="/images/bus-front.svg"
              width="30"
              height="30"
              class="bi bi-box"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis">Countrywide</h3>
          <p>
            We offer a range of services to suit your individual needs, whether
            you're moving locally or across the country. Our team can handle
            everything from packing and loading to unloading and unpacking, so
            you can focus on settling into your new home. And with our
            transparent pricing and no hidden fees, you can trust that you're
            getting a fair and competitive rate for our services.
          </p>
          <a href="#" className="icon-link">
            Get a quote
            <img
              src="/images/chevron-right.svg"
              class="bi bi-box"
            />
          </a>
        </div>
        <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-3 rounded-3">
            <img
              src="/images/chat-square-heart.svg"
              width="30"
              height="30"
              class="bi bi-box"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis">Personal Touch</h3>
          <p>
            At our core, we believe that moving should be an exciting and
            positive experience, not a stressful one. By providing exceptional
            moving services in the US, we hope to revolutionize the way people
            think about moving and provide a better, more personalized
            experience for our customers. Contact us today to learn more about
            how we can help you with your next move.
          </p>
          <a href="#" className="icon-link">
            Get a quote
            <img
              src="/images/chevron-right.svg"
              class="bi bi-box"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Features

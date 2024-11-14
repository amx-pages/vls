import React from 'react';

const Pricing = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row mb-3 text-center" style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Free Plan */}
        <div className="col-md-6 col-lg-3">
          <div className="card mb-4 box-shadow d-flex flex-column" style={{ height: '400px' }}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to beginner language courses</li>
                <li>5 language lessons per month</li>
                <li>Community support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-footer mt-auto">
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-6 col-lg-3">
          <div className="card mb-4 box-shadow d-flex flex-column" style={{ height: '400px' }}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to intermediate language courses</li>
                <li>15 language lessons per month</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-footer mt-auto">
              <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-md-6 col-lg-3">
          <div className="card mb-4 box-shadow d-flex flex-column" style={{ height: '400px' }}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to advanced language courses</li>
                <li>30 language lessons per month</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
            </div>
            <div className="card-footer mt-auto">
              <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-6 col-lg-3">
          <div className="card mb-4 box-shadow d-flex flex-column" style={{ height: '400px' }}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$49 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Access to all language courses</li>
                <li>Unlimited language lessons per month</li>
                <li>One-on-one tutoring sessions</li>
                <li>Priority customer support</li>
              </ul>
            </div>
            <div className="card-footer mt-auto">
              <button type="button" className="btn btn-lg btn-block btn-primary">Get Premium</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

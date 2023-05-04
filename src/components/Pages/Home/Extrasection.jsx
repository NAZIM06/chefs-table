import React from 'react';
import { Link } from 'react-router-dom';

const Extrasection = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-4/5 justify-between">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Any Query!</h1>
          <p className="py-6">If you want to kno more about us, write done short description or ask what you want the clock submit button. </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tell us what you want?</span>
              </label>
              <textarea placeholder="description" className="border-2 rounded-md w-full px-3 py-2 h-48"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="button m-auto">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
import React,{ useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom'

import ReactLoading from 'react-loading'
import { useForm } from "react-hook-form";


const LoginPage = () => {


const { register, handleSubmit, setValue, formState:{ errors } } = useForm(); 

const navigate = useNavigate()
const [loading, setLoading] = useState(false)


const comehome = () => {
  setLoading(false)
  navigate('/')
}

const onSubmit = (data) => {
  console.log(data)
  setLoading(true)
  setTimeout(() => comehome(), 3000);
};


	return (
		<div>
			<section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width={100} />
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  {loading ? (
                    <div className='text-center d-flex justify-content-center'>
                      <ReactLoading
                      type='spin' 
                      color='blue' 
                      height={'20%'} 
                      width={'20%'}
                      />
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate autoComplete="off">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">Username</label>
                      <input {...register("text", { required: true })} id="text" type="text" className="form-control" name="text" required />
                      {errors.text && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="password">Password</label>
                      <input {...register("password", { required: true })} id="password" type="password" className="form-control" name="password" required />
                      {errors.password && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="align-items-center d-flex">
                      <button type="submit" className="btn btn-primary ms-auto">
                        Login	
                      </button>
                    </div>
                  </form>
                  )}
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                   Don't have an account? <Link to="/register" className="text-dark">Register</Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright © 2017-2021 — Your Company 
              </div>
              
            </div>
          </div>
        </div>
      </section>
		</div>
	);
};

export default LoginPage;
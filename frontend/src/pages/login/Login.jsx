import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center'>Login <span className='text-blue-400'>ChatBook</span></h1>
            <form>
                <div>
                    <label className='label pt-6'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter your username' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>

                <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>{"Don't"} have an account</a>
                
                <div>
                    <button className='btn btn-block btn-sm mt-6'>Login</button>
                </div>
            </form>
        </div>



    </div>
  )
}

export default Login
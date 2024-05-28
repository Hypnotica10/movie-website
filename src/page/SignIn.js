import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
const SignIn = () => {
    const [haveAccount, setHaveAccount] = useState(true);

    const handleClick = () => {
        setHaveAccount(!haveAccount);
    }

    return (
        <div className='w-full h-screen p-4 bg-sign-in bg-cover bg-no-repeat'>
            <div className='logo-container'>
                <img srcSet={`${Logo} 2x`} alt='logo' />
            </div>
            <div className='form-container relative w-[min(450px,_90vw)] mx-auto mt-4'>
                <div className={`form transition-all duration-500 absolute w-full h-full ${haveAccount ? '' : 'active'}`}>
                    <div className='login-form absolute w-full bg-black bg-opacity-80 sm:p-12 p-4 z-10'>
                        <h1 className='text-3xl font-medium text-white text-center mb-5'>Sign In</h1>
                        <form action=''>
                            <div className='flex flex-col gap-2'>
                                <div className='my-2'>
                                    <input type='text' className='w-full outline-none p-3 text-white text-sm bg-secondary-black rounded' name='' id='' placeholder='Email' />
                                </div>
                                <div className='my-2'>
                                    <input type='email' className='w-full outline-none p-3 text-white text-sm bg-secondary-black rounded' name='' id='' placeholder='Password' />
                                </div>
                            </div>
                            <div className='form-help flex justify-between text-dark-gray text-sm mt-4'>
                                <div className='relative pl-5'>
                                    <input type='checkbox' name='' id='remember' className='cursor-pointer hidden peer' />
                                    <label htmlFor='remember' className='cursor-pointer after:transition-all before:transition-all select-none
                                                                        before:w-4 before:h-4 before:absolute before:bg-dark-gray before:top-1/2 before:left-0 before:-translate-y-1/2
                                                                        after:w-2 after:h-3 after:border-b-2 after:border-r-2 after:border-white after:absolute after:rotate-45 after:left-1 after:top-[2px] after:opacity-0 after:invisible
                                                                        peer-checked:before:bg-primary peer-checked:after:opacity-100 peer-checked:after:visible
                                    '>Remember me</label>
                                </div>
                                <span className='cursor-pointer'>Need help?</span>
                            </div>
                            <div className='mt-6'>
                                <button type='button' className='w-full bg-red-600 p-3 text-white rounded-sm font-medium reounded'>Sign In</button>
                            </div>
                            <div className='mt-6 text-center'>
                                <span className='text-dark-gray'>Don't have an account yet? <span className='text-primary cursor-pointer font-medium' onClick={handleClick}>Sign Up</span></span>
                            </div>
                        </form>
                    </div>
                    <div className='signup-form absolute w-full bg-black bg-opacity-80 sm:p-12 p-4'>
                        <h1 className='text-3xl font-medium text-white text-center mb-5'>Sign Up</h1>
                        <form action=''>
                            <div className='flex flex-col gap-2'>
                                <div className='my-2'>
                                    <input type='text' className='w-full outline-none p-3 text-white text-sm bg-secondary-black rounded' name='' id='' placeholder='Your name' />
                                </div>
                                <div className='my-2'>
                                    <input type='email' className='w-full outline-none p-3 text-white text-sm bg-secondary-black rounded' name='' id='' placeholder='Email' />
                                </div>
                                <div className='my-2'>
                                    <input type='email' className='w-full outline-none p-3 text-white text-sm bg-secondary-black rounded' name='' id='' placeholder='Password' />
                                </div>
                            </div>
                            <div className='form-help flex justify-between text-dark-gray text-sm mt-4'>
                                <div className='relative pl-5'>
                                    <input type='checkbox' name='' id='agree' className='cursor-pointer hidden peer' />
                                    <label htmlFor='agree' className='cursor-pointer after:transition-all before:transition-all select-none
                                                                        before:w-4 before:h-4 before:absolute before:bg-dark-gray before:top-px before:left-0
                                                                        after:w-2 after:h-3 after:border-b-2 after:border-r-2 after:border-white after:absolute after:rotate-45 after:left-1 after:top-px after:opacity-0 after:invisible
                                                                        peer-checked:before:bg-primary peer-checked:after:opacity-100 peer-checked:after:visible
                                    '>I agree to the <span className='text-primary'>Terms of Service</span> and the <span className='text-primary'>Privacy policy</span>.</label>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <button type='button' className='w-full bg-red-600 p-3 text-white rounded-sm font-medium reounded'>Sign Up</button>
                            </div>
                            <div className='mt-6 text-center'>
                                <span className='text-dark-gray'>Already have an account? <span className='text-primary cursor-pointer' onClick={handleClick}>Sign In</span></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=''></div>
        </div>
    );
};

export default SignIn;
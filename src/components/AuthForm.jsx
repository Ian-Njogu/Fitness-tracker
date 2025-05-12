
import React from 'react';

const AuthForm = ({ isLogin = true }) => {
  return (
    <div className="min-h-screen bg-[url('/assets/background.jpg')] bg-cover bg-right overflow-hidden font-poppins text-black text-center text-base">
      <div className="box-border bg-white h-screen w-full max-w-[600px] min-w-[40%] p-2.5 rounded-r-2xl flex flex-col items-center justify-center md:w-full md:max-w-[600px] md:rounded-none">
        <h1 className="text-5xl font-black uppercase">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>

        <form className="w-full max-w-[400px] mt-5 mb-12 flex flex-col items-center gap-2.5">
          {/* Email Input */}
          <div className="input-group w-full flex justify-center">
            <label className="flex-shrink-0 h-12 w-12 bg-accent text-white fill-white rounded-l-lg flex justify-center items-center text-2xl font-medium">
              <svg>...</svg> {/* Replace with your icon */}
            </label>
            <input
              type="email"
              className="flex-grow min-w-0 h-12 px-4 font-inherit border-l-0 rounded-r-lg border-2 border-white bg-white hover:border-accent focus:outline-none focus:border-black placeholder:text-black"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="input-group w-full flex justify-center">
            <label className="flex-shrink-0 h-12 w-12 bg-accent text-white fill-white rounded-l-lg flex justify-center items-center text-2xl font-medium">
              <svg>...</svg> {/* Replace with your icon */}
            </label>
            <input
              type="password"
              className="flex-grow min-w-0 h-12 px-4 font-inherit border-l-0 rounded-r-lg border-2 border-white bg-white hover:border-accent focus:outline-none focus:border-black placeholder:text-black"
              placeholder="Password"
            />
          </div>

          {!isLogin && (
            /* Repeat for additional signup fields */
            <div className="input-group w-full flex justify-center">
              <label className="flex-shrink-0 h-12 w-12 bg-accent text-white fill-white rounded-l-lg flex justify-center items-center text-2xl font-medium">
                <svg>...</svg>
              </label>
              <input
                type="text"
                className="flex-grow min-w-0 h-12 px-4 font-inherit border-l-0 rounded-r-lg border-2 border-white bg-white hover:border-accent focus:outline-none focus:border-black placeholder:text-black"
                placeholder="Confirm Password"
              />
            </div>
          )}

          <button
            type="submit"
            className="mt-2.5 border-none rounded-full py-3 px-16 bg-accent text-white font-medium font-inherit uppercase cursor-pointer hover:bg-black focus:outline-none focus:bg-black"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-sm">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <a href="/signup" className="no-underline text-accent hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/login" className="no-underline text-accent hover:underline">
                Login
              </a>
            </>
          )}
        </div>

        {/* Error state example */}
        <div className="input-group incorrect w-full flex justify-center mt-4">
          <label className="flex-shrink-0 h-12 w-12 bg-error text-white fill-white rounded-l-lg flex justify-center items-center text-2xl font-medium">
            <svg>...</svg>
          </label>
          <input
            type="text"
            className="flex-grow min-w-0 h-12 px-4 font-inherit border-l-0 rounded-r-lg border-2 border-error bg-white"
          />
        </div>
        <div id="error-message" className="text-error text-sm mt-1">
          Error message example
        </div>
      </div>
    </div>
  );
};

export default AuthForm;


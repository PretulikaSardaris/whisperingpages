import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/08/07/53/78/360_F_807537893_NCFr2VUk3SBI9Pf9WbkeCm5nNAnJgxRZ.jpg)' }}>
      <div className="bg-white bg-opacity-10 backdrop-filter  p-8 rounded-lg shadow-glow max-w-md w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <button
              className=" w-full bg-purple-700 rounded-lg  hover:bg-purple-800 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-200"
              type="button"
            >
              Login
            </button>
            <a href="#!" className="font-bold text-sm text-white hover:bg-purple-800 transition duration-200">
              Forgot Password?
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">Don't have an account? <a href="#!" className="text-purple-400 hover:bg-purple-700 hover:text-white font-bold transition duration-200">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

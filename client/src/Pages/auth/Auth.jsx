import React, { useState } from 'react';
import Logo from '../../Img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpass: '',
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const restForm = () => {
    setConfirmPass(true);
    setData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpass: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 gap-8 bg-gray-100 overflow-hidden">
      {/* Left Side */}
      <div className="flex flex-col items-center gap-6 text-center md:text-left md:items-start animate-fade-in">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        <div>
          <h2 className="text-blue-700 text-2xl font-bold">Welcome!</h2>
          <h5 className="text-gray-600 text-sm">
            Explore the ideas throughout <br className="hidden md:block" /> the
            world.
          </h5>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full max-w-md animate-slide-up">
        <form
          onSubmit={handlSubmit}
          className="flex flex-col items-center gap-6 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-xl w-full"
        >
          <h2 className="text-xl font-semibold">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </h2>

          {isSignUp && (
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-4 py-3 bg-[rgba(40,52,62,0.07)] rounded-md outline-none w-full"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 px-4 py-3 bg-[rgba(40,52,62,0.07)] rounded-md outline-none w-full"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[rgba(40,52,62,0.07)] rounded-md outline-none"
            name="email"
            onChange={handleChange}
            value={data.email}
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 px-4 py-3 bg-[rgba(40,52,62,0.07)] rounded-md outline-none w-full"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 px-4 py-3 bg-[rgba(40,52,62,0.07)] rounded-md outline-none w-full"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <span
            className={`text-red-500 text-xs self-end mr-2 transition-opacity duration-300 ${
              confirmPass ? 'opacity-0' : 'opacity-100'
            }`}
          >
            * Confirm Password is not same
          </span>

          <span
            className="text-sm text-blue-500 cursor-pointer hover:underline text-center"
            onClick={() => {
              setIsSignUp((prev) => !prev);
              restForm();
            }}
          >
            {isSignUp
              ? 'Already have an account? Login here'
              : "Don't have an account? SignUp here"}
          </span>

          <button
            type="submit"
            disabled={loading}
            className={`w-28 h-10 flex items-center justify-center text-white font-semibold rounded-md transition-all duration-200 ease-out ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#6674cc] to-[#9615db] hover:bg-transparent hover:text-[#9615db] hover:border-2 hover:border-[#9615db]'
            }`}
          >
            {loading ? 'loading...' : isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

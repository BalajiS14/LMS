import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

      {/* Desktop Navigation (Only visible on md+ screens) */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {/* Show User Profile if Logged In, Otherwise Show Sign-In Button */}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation (Only visible on small screens) */}
      <div className="md:hidden flex items-center gap-3 text-gray-500">
        {/* Show User Profile on Mobile */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {/* User Profile or Guest Icon */}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User Icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

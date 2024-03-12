import React from 'react'
import logo from '/logo.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const navItems = (
    <>
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a>All</a></li>
            <li><a>Salad</a></li>
            <li><a>Pizza</a></li>
          </ul>
        </details>
      </li><li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Table Booking</a></li>
            <li><a>Order Tracking</a></li>
          </ul>
        </details>
      </li>
      <li><a>Offers</a></li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className="navbar xl:px-24 transition-all duration-300 ease-in-out">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a href='/'>
            <img src={logo} alt="Image" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Search Icon  */}
          <button className="btn btn-ghost btn-circle lg:flex hidden">
            <FaSearch size={24} />
          </button>
          {/* Cart Menu  */}
          <label tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 lg:flex hidden items-center justify-center">
            <div className="indicator">
              <MdOutlineShoppingCart size={24} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <a className="btn bg-green text-white rounded-full px-6 flex items-center gap-2"><FiPhoneCall size={20} /> Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      {/* Amazon Logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Location Info */}
      <div className="header__location">
        <span className="header__locationLineOne">Delivering --</span>
        <span className="header__locationLineTwo">Update location</span>
      </div>

      {/* Search Box */}
      <div className="header__search">
        <select className="header__searchDropdown">
          <option value="all">All</option>
        </select>
        <input type="text" className="header__searchInput" placeholder="Search Amazon.in" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Navigation Links */}
      <div className="header__nav">
        {/* Account & Lists */}
        <Link to="/Login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
        </Link>

        {/* Returns & Orders */}
        <Link to="/Product" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Product</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* Cart */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
            <span className="header__optionLineTwo">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

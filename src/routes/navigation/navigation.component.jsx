import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ArrowLogo } from "../../assets/ArrowLogo.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ArrowLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contactUs">
            Contact Us
          </Link>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

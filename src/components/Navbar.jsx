import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/navbar.scss";

const Navbar = () => {
  const { cartProductIds } = useSelector((state) => state.cart);

  return (
    <nav className="navbar mb-4 px-1 px-sm-4 px-md-5">
      <NavLink to="/" end>
        <i className="bi bi-shop-window"></i>
      </NavLink>

      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
          title="products"
          end
        >
          <i className="bi bi-grid"></i>
        </NavLink>

        <NavLink
          to="/cart"
          title="cart"
          className={({ isActive }) =>
            `${isActive && "selected"} position-relative`
          }
        >
          <i className="bi bi-cart3"></i>
          {cartProductIds.length > 0 && (<sup className="cart-number">{cartProductIds.length}</sup>)}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

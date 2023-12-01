import { useDispatch, useSelector } from "react-redux";
import productList from "../data/productList.json";
import cartSlice from "../store/cart/cartSlice";
import "../styles/home.scss";

const Home = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="container product-catalogue">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {productList.products.map((product) => {
          return (
            <div className="wrapper col mb-4" key={product.id}>
              <div className="card h-100 d-flex align-items-center">
                <div className="d-flex flex-grow-1 flex-wrap align-items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top p-3"
                  />
                </div>

                <div className="card-body text-center flex-grow-0">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text ">{product.price}</p>
                  {!cartProductIds.includes(product.id) && (
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToCart(product.id))}
                    >
                      Add to cart
                    </button>
                  )}
                  {cartProductIds.includes(product.id) && (
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

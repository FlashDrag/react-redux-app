import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../store/cart/cartSlice";
import { fetchAllProducts } from "../store/products/productSlice";

const Home = () => {
  const state = useSelector((state) => state);
  const { cart, products } = state;
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3000/products"));
  }, [dispatch]);

  return (
    <div className="container product-catalogue">
      {products.fetchStatus === "loading" ? (
        <h1>Loading...</h1>
      ) : products.fetchStatus === "error" ? (
        <h1>Error</h1>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {products.data.map((product) => {
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
                    {!cart.cartProductIds.includes(product.id) && (
                      <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(product.id))}
                      >
                        Add to cart
                      </button>
                    )}
                    {cart.cartProductIds.includes(product.id) && (
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
      )}
    </div>
  );
};

export default Home;

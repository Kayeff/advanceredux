import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cartActions";

let isInitial = true;

export default function App() {
  const notification = useSelector((state) => state.ui.notification);
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <main className="w-full min-h-screen font-geist relative">
      {notification && <Notification notification={notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </main>
  );
}

import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui";
import Notification from "./components/UI/Notification";

let isInitial = true;

export default function App() {
  const isCartVisible = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    async function fetchData() {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://redux-practice-20912-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent data successfully",
        })
      );
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    fetchData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An error occured.",
          message: error,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <main className="w-full min-h-screen font-geist relative">
      {notification && <Notification notification={notification} />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </main>
  );
}

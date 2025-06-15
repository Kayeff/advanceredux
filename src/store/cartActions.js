import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // Only show notification if cart was changed by user
    if (cart.changed) {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Saving...",
          message: "Updating your cart",
        })
      );
    }

    try {
      const response = await fetch(
        "https://redux-practice-20912-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
            changed: false, // Reset changed flag when saving
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save cart data");
      }

      // Only show success notification if this was a user action
      if (cart.changed) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Cart updated successfully",
          })
        );
      }
    } catch (error) {
      if (cart.changed) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Failed to update cart",
          })
        );
      }
      console.error("Cart save error:", error.message);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://redux-practice-20912-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }

      const data = await response.json();
      const cartData = data || {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        changed: false,
      };

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      console.error("Cart fetch error:", error.message);
    }
  };
};

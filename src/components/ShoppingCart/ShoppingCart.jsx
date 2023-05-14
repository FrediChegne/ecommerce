import React, { useState } from "react";

import useAppState from "../../hooks/useAppState";
import useAppStateDispatch from "../../hooks/useAppStateDispatch";
import ProductDetail from "../ProductDetail/ProductDetail";
import Modal from "../Modal/Modal";
import "./styles.css";


const ShoppingCart = () => {
  const [openModal, setOpenModal] = useState(false)
  const { cart } = useAppState();
  const dispatch = useAppStateDispatch();
  const summaryProducts = [];
  let total = 0;

  new Set(
    cart.map((e) =>
      JSON.stringify({ ...e, count: cart.filter((t) => t.id === e.id).length })
    )
  ).forEach((e) => {
    summaryProducts.push(JSON.parse(e));
  });

  summaryProducts.forEach((prod) => (total += prod.price * prod.count));

  const checkout = () => {
    setOpenModal(true)
    dispatch({ type: "emptyCart" });
  };

  return (
    <div className="container-cart">
      {openModal && <Modal handleClose={() => setOpenModal(false)}/>}
      {summaryProducts.length > 0 ? (
        <>
          <div>
              
            <h2>Shopping Cart</h2>
            {summaryProducts.map((e) => (
              <ProductDetail product={e} key={e.id} />
            ))}
          </div>
          <div>
            <h3>Total</h3>
            <p>$ {total.toFixed(2)}</p>
            <button onClick={checkout}>Checkout</button>
          </div>
        </>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export default ShoppingCart;

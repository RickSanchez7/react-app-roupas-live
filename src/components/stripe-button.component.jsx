import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";

import { CartContext } from "../context/cart.context";
import Diamond from "../assets/diamante.svg";

const StripeButton = ({ ...otherprops }) => {
  const { total } = useContext(CartContext);

  const priceForStripe = total * 100;
  const publishKey =
    "pk_test_51GqPwaHi6VRiMnwM2qIVRYsZRPz0v4Mq4bgZtSN3z8oIZrwS2xyH0JDztNUfpQ165NFx5RVTKipwOoDO7ZeCREqh00kLJApiDS";

  const onToken = token => {
    // console.log(token);
    alert("Pagamento bem sucedido");
  };

  return (
    <StripeCheckout
      label='Pagar'
      name='Roupas inc.'
      currency='EUR'
      billingAddress
      shippingAddress
      image={Diamond}
      description={`Total : €${total}`}
      amount={priceForStripe}
      panel='Pay now'
      token={onToken}
      stripeKey={publishKey}
      {...otherprops}
    />
  );
};

export default StripeButton;

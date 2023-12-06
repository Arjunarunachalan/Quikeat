// Import necessary packages
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  return <FontAwesomeIcon className="text-orange-500 w-6 h-6" icon={faShoppingBag} />;
};

export default CartIcon;

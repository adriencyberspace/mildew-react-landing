import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Product from "./Product";
import CustomerAuthWithMutation from "./CustomerAuth";

function Shop() {
  const {
    shopLoading,
    shopError,
    closeCustomerAuth,
    isCustomerAuthOpen,
    isNewCustomer,
    associateCustomerCheckout,
    accountVerificationMessage,
    shopData,
    addVariantToCart,
    checkout,
  } = useContext(CartContext);

  if (shopLoading) {
    return <p>Loading ...</p>;
  }

  if (shopError) {
    return <p>{shopError.message}</p>;
  }

  return (
    <div className="App">
      <CustomerAuthWithMutation
        closeCustomerAuth={closeCustomerAuth}
        isCustomerAuthOpen={isCustomerAuthOpen}
        newCustomer={isNewCustomer}
        associateCustomerCheckout={associateCustomerCheckout}
        showAccountVerificationMessage={accountVerificationMessage}
      />

      <div className="Product-wrapper">
        {shopData.shop.products.edges.map((product) => (
          <Product
            addVariantToCart={addVariantToCart}
            checkout={checkout}
            key={product.node.id.toString()}
            product={product.node}
          />
        ))}
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default Shop;

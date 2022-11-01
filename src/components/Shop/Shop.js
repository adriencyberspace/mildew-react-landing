import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import Product from "./Product";
import CustomerAuthWithMutation from "./CustomerAuth";
import { fetchCheckout } from "../../queries/checkout";
import { client } from "../../index";

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
    setCheckout,
    createCheckoutMutation,
    query,
  } = useContext(CartContext);

  // Fetch checkout from shopify
  const fetchExistingCheckout = async (id) => {
    const res = await client.query({
      query: fetchCheckout,
      variables: { id },
    });
    return res.data.node;
  };

  // Fetch existing checkout or create new one:
  useEffect(() => {
    console.log("render");
    const initializeCheckout = async () => {
      const existingCheckoutID = localStorage.getItem("shopify_checkout_id");
      const setCheckoutInState = (checkout) => {
        localStorage.setItem("shopify_checkout_id", checkout.id);
        setCheckout(checkout);
      };

      // If a checkout id already exists:
      if (existingCheckoutID) {
        try {
          // create a checkout with the existing checkout id
          const checkout = await fetchExistingCheckout(existingCheckoutID);
          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout);
            return;
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null);
        }
      }

      // If a checkout id does NOT exist, create a new empty checkout
      const variables = { input: {} };
      createCheckoutMutation({ variables }).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log("create checkout error", err);
        }
      );
    };
    initializeCheckout();
    // eslint-disable-next-line
  }, [checkout]);

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
        {shopLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {shopData.shop.products.edges.map((product) => (
              <Product
                addVariantToCart={addVariantToCart}
                checkout={checkout}
                key={product.node.id.toString()}
                product={product.node}
              />
            ))}
          </>
        )}
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default Shop;

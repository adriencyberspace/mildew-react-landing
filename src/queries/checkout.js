import gql from "graphql-tag";
import { useEffect } from "react";

const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTaxV2 {
      amount
      currencyCode
    }
    subtotalPriceV2 {
      amount
      currencyCode
    }
    totalPriceV2 {
      amount
      currencyCode
    }
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            priceV2 {
              amount
              currencyCode
            }
          }
          quantity
        }
      }
    }
  }
`;

export const createCheckout = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsAdd = gql`
  mutation checkoutLineItemsAdd(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsUpdate = gql`
  mutation checkoutLineItemsUpdate(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
  ) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsRemove = gql`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutCustomerAssociate = gql`
  mutation checkoutCustomerAssociate(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociate(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export function useCheckoutEffect(data, key, setDataCallback) {
  useEffect(() => {
    if (data && data[key] && data[key].checkout) {
      setDataCallback(data[key].checkout);
    }
  }, [data]);
}

export const fetchCheckout = gql`
  query ($id: ID!) {
    node(id: $id) {
      ...CheckoutFragment
    }
  }
  ${CheckoutFragment}
`;

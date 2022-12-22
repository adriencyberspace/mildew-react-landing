import gql from "graphql-tag";

export const query = gql`
  query query {
    collections(first: 10) {
      edges {
        node {
          id
          title
          description
          handle
          products(first: 250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                descriptionHtml
                options {
                  id
                  name
                  values
                }
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      id
                      title

                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price {
                        amount
                      }
                      compareAtPrice {
                        amount
                      }
                      availableForSale
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

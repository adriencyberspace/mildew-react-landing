import React, { useState } from "react";
import ScrollImage from "./ScrollImage";

function Product(props) {
  let defaultOptionValues = {};

  props.product.options.forEach((selector) => {
    defaultOptionValues[selector.name] = selector.values[0];
  });

  const secondaryImages = [...props.product.images.edges];
  secondaryImages.shift();

  const [variantImage, setVariantImage] = useState(
    props.product.images.edges[0].node
  );
  const [variant, setVariant] = useState(props.product.variants.edges[0].node);
  const [variantQuantity, setVariantQuantity] = useState(1);

  // const findImage = (images, variantId) => {
  //   const primary = images[0];

  //   const image = images.filter(function (image) {
  //     return image.variant_ids.includes(variantId);
  //   })[0];

  //   return (image || primary).src;
  // };

  // const handleOptionChange = (event) => {
  //   const target = event.target;
  //   selectedOptions[target.name] = target.value;

  //   const selectedVariant = props.product.variants.edges.find((variant) => {
  //     return variant.node.selectedOptions.every((selectedOption) => {
  //       return selectedOptions[selectedOption.name] === selectedOption.value;
  //     });
  //   }).node;

  //   setVariant(selectedVariant);
  //   setVariantImage(selectedVariant.image);
  // };

  // const handleQuantityChange = (event) => {
  //   setVariantQuantity(event.target.value);
  // };

  // let variantSelectors = props.product.options.map((option) => {
  //   return (
  //     <VariantSelector
  //       handleOptionChange={handleOptionChange}
  //       key={option.id.toString()}
  //       option={option}
  //     />
  //   );
  // });

  return (
    <div className="container">
      <div className="Product">
        <div className="Product__left">
          {/* {props.product.images.edges.length ? (
            <img
              className="Product__image"
              src={variantImage.src}
              alt={`${props.product.title} product shot`}
            />
          ) : null}
          <div>
            {secondaryImages.map((image) => (
              <img src={image.node.src} />
            ))}
          </div> */}
          <ScrollImage
            product={props.product}
            variantImage={variantImage}
            secondaryImages={secondaryImages}
          />
        </div>

        <div className="Product__right">
          <h5 className="Product__title">{props.product.title}</h5>

          <span className="Product__price">${variant.price.amount}</span>
          {/* {variantSelectors} */}
          {/* <label className="Product__option">
          Quantity
          <input
            min="1"
            type="number"
            defaultValue={variantQuantity}
            onChange={handleQuantityChange}
          ></input>
        </label> */}
          <button
            className="Product__buy button rotate"
            onClick={() => props.addVariantToCart(variant.id, variantQuantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <span className="Product">
        <div
          dangerouslySetInnerHTML={{ __html: props.product.descriptionHtml }}
        ></div>
      </span>
    </div>
  );
}

export default Product;

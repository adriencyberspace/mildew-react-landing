import { useRef } from "react";

function ScrollImage(props) {
  const { product, variantImage, secondaryImages } = props;

  const step = 10;
  const scrollRef = useRef();
  const isScrollRef = useRef();

  const setMove = (state) => (isScrollRef.current = state);

  const moveDown = () => {
    if (isScrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollTop + step;
      requestAnimationFrame(moveDown);
    }
  };

  const moveUp = () => {
    if (isScrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollTop - step;
      requestAnimationFrame(moveUp);
    }
  };

  return (
    <>
      <div className="Product__scroll" ref={scrollRef}>
        {product.images.edges.length ? (
          <img
            className="Product__image"
            src={variantImage.src}
            alt={`${product.title} product shot`}
          />
        ) : null}
        <div>
          {secondaryImages.map((image) => (
            <img src={image.node.src} />
          ))}
        </div>
      </div>
      <div className="Scroll-buttons">
        <button
          className="button button__up"
          id="bg-teal"
          onMouseDown={() => {
            setMove(true);
            moveUp();
          }}
          onMouseUp={() => setMove(false)}
          onTouchStart={() => {
            setMove(true);
            moveDown();
          }}
          onTouchEnd={() => setMove(false)}
        >
          {"  "}
          UP{"  "}
        </button>
        <button
          className="button"
          id="bg-teal"
          onMouseDown={() => {
            setMove(true);
            moveDown();
          }}
          onMouseUp={() => setMove(false)}
          onTouchStart={() => {
            setMove(true);
            moveDown();
          }}
          onTouchEnd={() => setMove(false)}
        >
          DOWN
        </button>
      </div>
    </>
  );
}

export default ScrollImage;

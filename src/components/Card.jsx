import { useState } from "react";

const Card = ({ image, name, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleRotateActive = () => {
    setRotate(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  const handleRotateDisabled = () => {
    setRotate(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div className={`card ${rotate && "rotate"}`}>
      {isOpen ? (
        <>
          <h3 className="rotate">{name}</h3>
          <p className="rotate">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis corporis voluptates hic maiores porro natus enim ullam,
            assumenda tenetur commodi id aspernatur doloribus tempora
            architecto! Doloremque voluptatem atque fugit, debitis error
            deserunt, ad dicta quibusdam sed, architecto cum sint corporis
            dolorum ducimus asperiores accusamus earum nihil eligendi esse
            repellendus neque ab? Et quos dolorem necessitatibus esse? Veritatis
            ullam tempore temporibus id aspernatur sed!
          </p>

          <button
            className="btn rotate"
            onClick={handleRotateDisabled}
            style={{ marginTop: "10px" }}
          >
            Hide Detail
          </button>
        </>
      ) : (
        <>
          <figure className="card-img rotate">
            <img src={image} />
          </figure>
          <button className="btn" onClick={handleRotateActive}>
            Show Detail
          </button>
          <h3>{name}</h3>
          <span>{price} TL</span>
        </>
      )}
    </div>
  );
};

export default Card;

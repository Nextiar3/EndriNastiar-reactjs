const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  const reviewStyle = {
    backgroundColor: reviews.backgroundColor,
  };
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <section className="card-btn">
          <span className="btn-status" style={reviewStyle}>
            {reviews.text}
          </span>
        </section>
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            <br />
            <span className="new-price">{newPrice}</span>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;

const Offers = ({ privateOffer, heading, isEmergency }) => {
  console.log(privateOffer);
  return (
    <div className="px-4 col offers">
      <h3 className="fs-6 offers-heading">{heading}</h3>

      <div className="d-flex flex-column gap-2 pt-3">
        {privateOffer?.map(({ hospital, title, address, date, image, id }) => (
          <div
            className={`d-flex align-items-start text-white py-2 px-4 gap-4 ${
              isEmergency ? "emergency-offer" : "offer"
            }`}
            key={id}>
            <img
              src={image}
              alt="hospital icon"
              style={{ paddingTop: "0.5rem" }}
            />
            <div>
              <h4 className="fs-5">{title}</h4>

              <div className="offer-info">
                <p>{hospital}</p>
                <p>{address}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;

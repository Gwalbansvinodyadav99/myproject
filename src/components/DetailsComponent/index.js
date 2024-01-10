import "./index.css";

const DetailComponent = () => (
  <>
    <div className="description-con">
      <div className="All-desc-con">
        <div className="Group-con">
          <div className="each-group">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-beds.svg"
              alt="1 M+ beds"
              className="img-element"
            />
            <h3>1 M+ beds</h3>
            <p>Book your perfect place from an extensive list of options.</p>
          </div>
          <div className="each-group">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-universities.svg"
              alt="800+ Universities"
              className="img-element"
            />
            <h3>800+ Universities</h3>
            <p>Find the best students homes near prestigious universities.</p>
          </div>
          <div className="each-group">
            <img
              src="https://prod-static-assets.amberstudent.com/images/homepage-cities.svg"
              alt="250+ Global Cities"
              className="img-element"
            />
            <h3>250+ Global Cities</h3>
            <p>We operate in major cities around the world.</p>
          </div>
          <div className="each-group">
            <img
              src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg"
              alt="4.8/5 on TrustPilot"
              className="rating-img"
            />
            <h3>4.8/5 on TrustPilot</h3>
            <p>4000+ students have rated us excellent for our services.</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default DetailComponent;

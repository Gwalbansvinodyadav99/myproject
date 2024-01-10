import { Component } from "react";
import { MdVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import DetailsComponent from "../DetailsComponent";
import PopularCities from "../PopularCities";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import Header from "../Header";
import "./index.css";

class AmberClone extends Component {
  state = { searchInput: "" };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <>
        <div className="App-container">
          <Header />
          <div className="Home-con">
            <div className="home-details-con">
              <h2>Home away from home!</h2>
              <h1>
                Book students accommodations near top universities and cities
                across the globe.
              </h1>
              <div className="amber-facility-section">
                <div className="amber-facility">
                  <MdVerified size={25} className="facility-icon" />
                  <span>Verified Properties</span>
                </div>
                <div className="amber-facility">
                  <BiSupport size={25} className="facility-icon" />
                  <span>24/7 Assistance</span>
                </div>
                <div className="amber-facility">
                  <FaRegMoneyBillAlt size={25} className="facility-icon" />
                  <span>Price Match Guarantee</span>
                </div>
              </div>
              <div className="search-container">
                <div>
                  <input
                    type="search"
                    placeholder="Search by City , University or Property"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                    className="input-search"
                  />
                </div>
                <div className="search-icon-con">
                  <div className="search-icon-sub">
                    <BsSearch size={25} className="search-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details-component-con">
            <DetailsComponent />
          </div>
          <div className="popular-con">
            <PopularCities />
          </div>
        </div>
      </>
    );
  }
}

export default AmberClone;

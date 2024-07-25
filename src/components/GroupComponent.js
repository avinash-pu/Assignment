import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  logo1,
  group1098,
  searchIcon,
  ellipseDiv,
}) => {
  return (
    <header className={`group-header ${className}`}>
      <div className="frame-child1" />
      {ellipseDiv && <div className="ellipse-div" />}
      <img className="logo-1-icon" loading="lazy" alt="" src={logo1} />
      <div className="frame-wrapper2">
        <div className="frame-parent4">
          <div className="home-button-background-parent">
            <div className="home-button-background" />
            <div className="div1"></div>
          </div>
          <div className="group-div">
            <img className="group-icon" loading="lazy" alt="" src={group1098} />
            <a className="tools">tools</a>
          </div>
          <div className="search-icon-parent">
            <img
              className="search-icon"
              loading="lazy"
              alt=""
              src={searchIcon}
            />
            <div className="contact" />
          </div>
          <div className="search-settings-button">
            <img
              className="search-settings-background"
              loading="lazy"
              alt=""
              src="/ellipse-53@2x.png"
            />
          </div>
          <div className="overflow-menu">
            <div className="overflow-menu-icons-parent">
              <div className="overflow-menu-icons" />
              <div className="overflow-menu-icons1" />
              <div className="overflow-menu-icons2" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
  group1098: PropTypes.string,
  searchIcon: PropTypes.string,
  ellipseDiv: PropTypes.bool,
};

export default GroupComponent;

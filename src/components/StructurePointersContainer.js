import PointersContent from "./PointersContent";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./StructurePointersContainer.css";

const StructurePointersContainer = ({ className = "" }) => {
  return (
    <section className={`structure-pointers-container ${className}`}>
      <div className="structure-pointers-card-parent">
        <div className="structure-pointers-card">
          <div className="structure-pointers-content">
            <div className="pointers-header">
              <img
                className="pointers-header-child"
                alt=""
                src="/rectangle-1871@2x.png"
              />
              <div className="pointers-title">
                <div className="structure-pointers-label">
                  <div className="structure-pointers-label-child" />
                  <div className="structure-your-pointers1">
                    Structure your Pointers
                  </div>
                  <div className="pointers-info-icon">
                    <div className="pointers-info-circle" />
                    <div className="i4">i</div>
                  </div>
                </div>
                <div className="pointers-description">
                  <div className="description-write-container">
                    <span className="description4">
                      <span>{`Description `}</span>
                      <span className="span8">:</span>
                    </span>
                    <span className="write-a-300-400-word-article">
                      <span className="span9">{` `}</span>
                      <span>{`Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world `}</span>
                    </span>
                  </div>
                </div>
              </div>
              <PointersContent />
            </div>
            <div className="about-me-details2">
              <img
                className="about-me-details-inner"
                alt=""
                src="/rectangle-1871@2x.png"
              />
              <div className="rectangle-parent8">
                <div className="frame-child8" />
                <div className="sa-method">4SA Method</div>
                <div className="frame-wrapper4">
                  <div className="description-info-circle-parent">
                    <div className="description-info-circle" />
                    <div className="i5">i</div>
                  </div>
                </div>
              </div>
              <FrameComponent />
            </div>
          </div>
        </div>
        <div className="card-icons">
          <div className="icon-triples-wrapper">
            <div className="icon-triples">
              <div className="icon-circles" />
              <img
                className="question-mark-2-1"
                loading="lazy"
                alt=""
                src="/questionmark-2-1@2x.png"
              />
            </div>
          </div>
          <div className="card-icons-inner">
            <div className="ellipse-group">
              <div className="frame-child9" />
              <img
                className="meeting-1-icon"
                loading="lazy"
                alt=""
                src="/meeting-1@2x.png"
              />
            </div>
          </div>
          <div className="card-icons-child">
            <div className="ellipse-container">
              <div className="frame-child10" />
              <img
                className="schedule-1-1"
                loading="lazy"
                alt=""
                src="/schedule-1-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

StructurePointersContainer.propTypes = {
  className: PropTypes.string,
};

export default StructurePointersContainer;

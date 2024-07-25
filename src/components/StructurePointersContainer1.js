import PointersContent from "./PointersContent";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./StructurePointersContainer1.css";

const StructurePointersContainer1 = ({ className = "" }) => {
  return (
    <section className={`structure-pointers-container1 ${className}`}>
      <div className="structure-pointers-content-parent">
        <div className="structure-pointers-content1">
          <div className="frame-parent6">
            <div className="rectangle-parent9">
              <div className="frame-child11" />
              <div className="structure-pointers-header">
                <div className="structure-pointers-header-child" />
                <div className="structure-your-pointers2">
                  Structure your Pointers
                </div>
                <div className="structure-pointers-info-icon-parent">
                  <div className="structure-pointers-info-icon" />
                  <div className="i6">i</div>
                </div>
              </div>
              <div className="structure-pointers-description-parent">
                <div className="structure-pointers-description">
                  <div className="description-write-container1">
                    <span className="description5">
                      <span>{`Description `}</span>
                      <span className="span10">:</span>
                    </span>
                    <span className="write-a-300-400-word-article1">
                      <span className="span11">{` `}</span>
                      <span>{`Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world `}</span>
                    </span>
                  </div>
                </div>
                <PointersContent />
              </div>
            </div>
            <div className="rectangle-parent10">
              <div className="frame-child12" />
              <div className="rectangle-parent11">
                <div className="frame-child13" />
                <div className="sa-method1">4SA Method</div>
                <div className="frame-wrapper5">
                  <div className="ellipse-parent1">
                    <div className="frame-child14" />
                    <div className="i7">i</div>
                  </div>
                </div>
              </div>
              <FrameComponent />
            </div>
          </div>
        </div>
        <div className="frame-parent7">
          <div className="frame-wrapper6">
            <div className="ellipse-parent2">
              <div className="frame-child15" />
              <img
                className="question-mark-2-11"
                loading="lazy"
                alt=""
                src="/questionmark-2-1@2x.png"
              />
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="ellipse-parent3">
              <div className="frame-child16" />
              <img
                className="meeting-1-icon1"
                loading="lazy"
                alt=""
                src="/meeting-1@2x.png"
              />
            </div>
          </div>
          <div className="frame-wrapper8">
            <div className="ellipse-parent4">
              <div className="frame-child17" />
              <img
                className="schedule-1-11"
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

StructurePointersContainer1.propTypes = {
  className: PropTypes.string,
};

export default StructurePointersContainer1;

import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`right-sidebar-inner ${className}`}>
      <div className="notice-board-component-parent">
        <div className="notice-board-component">
          <div className="notice-board">
            <div className="notice-board-child" />
            <div className="notice-board-header">
              <div className="notice-board-background" />
              <img className="x-01-icon" loading="lazy" alt="" src="/x01.svg" />
              <div className="board-title">
                <div className="n-o-t-container">
                  <p className="n">N</p>
                  <p className="o">o</p>
                  <p className="t">t</p>
                  <p className="i2">i</p>
                  <p className="c">c</p>
                  <p className="e">e</p>
                  <p className="blank-line">&nbsp;</p>
                  <p className="b">B</p>
                  <p className="o1">o</p>
                  <p className="a">a</p>
                  <p className="r">r</p>
                  <p className="d">d</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process-select">
          <div className="process-select-child" />
          <div className="select-process">Select Process</div>
          <img className="process-select-icon" alt="" src="/vector-4.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

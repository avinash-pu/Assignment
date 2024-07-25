import { Button } from "@mui/material";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./RightSidebar.css";

const RightSidebar = ({ className = "" }) => {
  return (
    <div className={`right-sidebar ${className}`}>
      <div className="notice-board-content-parent">
        <div className="notice-board-content">
          <div className="notice-board-content-child" />
          <div className="notice-board-container">
            <div className="notice-board-container-child" />
            <img
              className="screenshot-from-2024-06-19-11-1"
              loading="lazy"
              alt=""
              src="/screenshot-from-20240619-115844-1@2x.png"
            />
          </div>
          <div className="notice-board-details">
            <div className="notice-board-details-child" />
            <div className="notice-board-title-container">
              <div className="notice-board-title-container-child" />
              <div className="notice-board-title">1</div>
            </div>
          </div>
        </div>
        <div className="project-management-content-wrapper">
          <div className="project-management-content">
            <div className="project-management-header">
              <div className="technical-project-management-group">
                <h1 className="technical-project-management4">
                  Technical Project Management
                </h1>
                <Button
                  className="component-581"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12",
                    background: "#0029ff",
                    borderRadius: "10px",
                    "&:hover": { background: "#0029ff" },
                    width: 121,
                    height: 36,
                  }}
                >
                  Submit task
                </Button>
              </div>
              <FrameComponent3 />
            </div>
            <div className="threadbuild-header-wrapper">
              <div className="threadbuild-header">
                <div className="rectangle-parent6">
                  <img
                    className="rectangle-icon"
                    alt=""
                    src="/rectangle-1869@2x.png"
                  />
                  <div className="rectangle-parent7">
                    <div className="frame-child7" />
                    <div className="technical-project-management5">
                      Technical Project Management
                    </div>
                    <div className="threadbuild-info-icons-parent">
                      <div className="threadbuild-info-icons" />
                      <div className="i3">i</div>
                    </div>
                  </div>
                  <div className="description-story-of-alignmen-container">
                    <div className="description-story-of-container1">
                      <span className="description2">Description</span>
                      <span className="span4">
                        <span>:</span>
                      </span>
                      <span className="story-of-alignment-scope-of-ag1">
                        <span className="span5">{` `}</span>
                        <span>
                          Story of Alignment Scope of Agility Specific
                          Accountable Staggering Approach
                        </span>
                      </span>
                    </div>
                  </div>
                  <img
                    className="image-13-icon1"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
                <FrameComponent2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
    </div>
  );
};

RightSidebar.propTypes = {
  className: PropTypes.string,
};

export default RightSidebar;

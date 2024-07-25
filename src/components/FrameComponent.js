import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="description-to-explore-more-wrapper">
        <div className="description-to-container">
          <span className="description3">
            <span>{`Description `}</span>
            <span className="span6">:</span>
          </span>
          <span className="to-explore-more-read-more">
            <span className="span7">{` `}</span>
            <span>{`To Explore more read more `}</span>
          </span>
        </div>
      </div>
      <div className="about-me-details">
        <div className="about-me-details-child" />
        <div className="about-me-details-parent">
          <div className="about-me-details1">
            <div className="about-me-details-item" />
            <div className="introduction-icon">
              <img className="vector-icon" alt="" src="/vector-5.svg" />
            </div>
            <div className="introduction">{`Introduction `}</div>
          </div>
          <div className="article-method">
            <div className="the-4sa-method">
              The 4SA Method , How to bring a idea into progress ?
            </div>
          </div>
        </div>
        <div className="see-more-button">
          <div className="see-more">See More</div>
        </div>
        <div className="strategy-development">
          <div className="strategy-question">
            <TextField
              className="thread-reference"
              variant="standard"
              select
              value={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "14px", marginRight: "14px" }}
                  >
                    <img width="16px" height="9.6px" src="/vector-6.svg" />
                  </InputAdornment>
                ),
              }}
              SelectProps={{ IconComponent: () => null }}
              sx={{
                borderColor: "#d9d7d7",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fcfcfc",
                borderRadius: "0px 0px 0px 0px",
                width: "98.86104783599087%",
                height: "45px",
                "& .MuiInput-underline:before": { borderBottom: "none" },
                "& .MuiInput-underline:after": { borderBottom: "none" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root": { height: "100%" },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "SemiBold",
                  fontFamily: "Open Sans",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value={1}>Thread A</MenuItem>
            </TextField>
            <div className="strategy-prompt">
              <div className="how-are-you">
                How are you going to develop your stratergy ? Which method are
                you going to use to develop a stratergy ? What if the project is
                lengthy?
              </div>
            </div>
          </div>
        </div>
        <div className="see-more-button1">
          <div className="see-more1">See More</div>
        </div>
        <div className="strategy-example">
          <div className="example-label-parent">
            <div className="example-label">
              <div className="example-label-child" />
              <div className="example-1">Example 1</div>
            </div>
            <div className="example-content">
              <div className="you-have-a">
                You have a concept , How will you put into progress?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

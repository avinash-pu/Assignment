import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", propBorderRadius }) => {
  const frameDivStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={`rectangle-parent3 ${className}`} style={frameDivStyle}>
      <div className="frame-child3" />
      <div className="rectangle-parent4">
        <div className="frame-child4" />
        <div className="threadbuild1">Threadbuild</div>
        <div className="ellipse-parent">
          <div className="frame-child5" />
          <div className="i1">i</div>
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child6" />
        <div className="description-watch-the-container">
          <span className="description1">Description</span>
          <span className="span2">
            <span>:</span>
          </span>
          <span className="watch-the-video-and-threadbuil">
            <span className="span3">{` `}</span>
            <span>
              Watch the video and threadbuild, and jot out key threads while
              watching the video
            </span>
          </span>
        </div>
      </div>
      <div className="frame-wrapper3">
        <TextField
          className="thread-a-wrapper"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{
                  marginLeft: "10px",
                  marginRight: "71.60000000000002px",
                }}
              >
                <img width="16px" height="9.6px" src="/vector-1.svg" />
              </InputAdornment>
            ),
          }}
          SelectProps={{ IconComponent: () => null }}
          sx={{
            borderColor: "#000",
            borderStyle: "SOLID",
            borderTopWidth: "0.10000000149011612px",
            borderRightWidth: "0.10000000149011612px",
            borderBottomWidth: "0.10000000149011612px",
            borderLeftWidth: "0.10000000149011612px",
            backgroundColor: "rgba(254, 255, 192, 0.2)",
            borderRadius: "0px 0px 0px 0px",
            width: "99.79123173277662%",
            height: "40px",
            "& .MuiInput-underline:before": { borderBottom: "none" },
            "& .MuiInput-underline:after": { borderBottom: "none" },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-root": { height: "100%" },
            "& .MuiInputBase-input": {
              color: "#000",
              fontSize: 20,
              fontWeight: "Bold",
              fontFamily: "Open Sans",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <MenuItem value={1}>Thread A</MenuItem>
        </TextField>
      </div>
      <div className="thread-a-content-container-wrapper">
        <div className="thread-a-content-container">
          <div className="thread-a-subthreads">
            <div className="subthread-container">
              <div className="subthread-item">
                <div className="subthread-content">
                  <TextField
                    className="first-subthread"
                    placeholder="Enter Text here"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#333" },
                      "& .MuiInputBase-root": {
                        height: "70px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "10px",
                        fontSize: "12px",
                      },
                      "& .MuiInputBase-input": { color: "#6c757d" },
                      width: "199px",
                    }}
                  />
                  <TextField
                    className="second-subthread"
                    placeholder="Sub thread 1"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#333" },
                      "& .MuiInputBase-root": {
                        height: "65px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "10px",
                        fontSize: "12px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                      width: "199px",
                    }}
                  />
                </div>
                <img
                  className="subthread-item-child"
                  loading="lazy"
                  alt=""
                  src="/group-1588.svg"
                />
              </div>
              <div className="component-57">
                <div className="component-57-child" />
                <h2 className="add-subthread-button">+</h2>
                <div className="sub-thread-wrapper">
                  <div className="sub-thread">Sub-thread</div>
                </div>
              </div>
            </div>
            <div className="third-subthread">
              <div className="third-subthread-content">
                <div className="third-subthread-details">
                  <div className="bg-layer" />
                  <div className="sub-interpretation-1">
                    Sub Interpretation 1
                  </div>
                </div>
                <TextField
                  className="fourth-subthread"
                  placeholder="Enter Text here"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#333" },
                    "& .MuiInputBase-root": {
                      height: "69.3px",
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      borderRadius: "10px",
                      fontSize: "12px",
                    },
                    "& .MuiInputBase-input": { color: "#6c757d" },
                    width: "199px",
                  }}
                />
              </div>
              <div className="fifth-subthread">
                <FormControl
                  className="parent"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    width: "91px",
                    height: "32px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "32px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "32px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 10,
                      fontWeight: "SemiBold",
                      fontFamily: "Poppins",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "4px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="10.2px"
                        height="5.9px"
                        src="/vector-2.svg"
                        style={{ marginRight: "5.800000000000001px" }}
                      />
                    )}
                  >
                    <MenuItem>Select Categ</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <FormControl
                  className="group"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    width: "91px",
                    height: "32px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "32px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "32px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "32px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 10,
                      fontWeight: "SemiBold",
                      fontFamily: "Poppins",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "4px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="10.2px"
                        height="5.9px"
                        src="/vector-3.svg"
                        style={{ marginRight: "5.800000000000001px" }}
                      />
                    )}
                  >
                    <MenuItem>Select Proces</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="thread-a-summary">
            <TextField
              className="thread-a-summary-content"
              placeholder="Summary for Thread A"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#333" },
                "& .MuiInputBase-root": {
                  height: "65px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": { color: "#000" },
                width: "425px",
              }}
            />
            <textarea
              className="thread-a-summary-input"
              placeholder="Enter Text Here"
              rows={4}
              cols={21}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default FrameComponent2;

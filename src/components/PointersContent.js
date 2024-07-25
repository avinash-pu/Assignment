import PropTypes from "prop-types";
import "./PointersContent.css";

const PointersContent = ({ className = "" }) => {
  return (
    <div className={`pointers-content ${className}`}>
      <div className="pointers-content-child" />
      <div className="pointers-article">
        <div className="title">{`Title `}</div>
        <input className="article-divider" type="text" />
      </div>
      <div className="article-body">
        <div className="content">Content</div>
        <div className="article-footer">
          <div className="article-actions">
            <div className="article-actions-child" />
            <div className="actions-dropdown">
              <div className="dropdown-items">
                <div className="file">File</div>
                <a className="edit">Edit</a>
                <div className="view">View</div>
                <div className="insert">Insert</div>
                <div className="format">Format</div>
                <div className="tools1">Tools</div>
                <div className="table">Table</div>
                <div className="help">Help</div>
              </div>
            </div>
            <div className="actions-navigation">
              <div className="arrow-curve-left-right-wrapper">
                <img
                  className="arrow-curve-left-right-icon"
                  loading="lazy"
                  alt=""
                  src="/arrowcurveleftright@2x.png"
                />
              </div>
              <div className="arrow-curve-left-down-wrapper">
                <img
                  className="arrow-curve-left-down-icon"
                  loading="lazy"
                  alt=""
                  src="/arrowcurveleftdown.svg"
                />
              </div>
              <div className="arrow-expand-02-parent">
                <img
                  className="arrow-expand-02-icon"
                  loading="lazy"
                  alt=""
                  src="/arrowexpand02.svg"
                />
                <div className="paragraph-button-wrapper">
                  <div className="paragraph-button">
                    <div className="paragraph-button-child" />
                    <div className="paragraph">Paragraph</div>
                  </div>
                </div>
              </div>
              <div className="list-icons-wrapper">
                <div className="list-icons">
                  <div className="bullet-icon" />
                  <div className="numbered-list-icon" />
                  <div className="letter-list-icon" />
                </div>
              </div>
            </div>
          </div>
          <textarea className="article-footer-child" rows={7} cols={21} />
        </div>
      </div>
    </div>
  );
};

PointersContent.propTypes = {
  className: PropTypes.string,
};

export default PointersContent;

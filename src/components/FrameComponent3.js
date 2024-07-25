import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent2 ${className}`}>
      <div className="frame-child2" />
      <h2 className="explore-the-world">Explore the world of management</h2>
      <div className="as-a-project">
        As a project manager, you play an important reole in leading a project
        through initiation, planning, execution, monitoring, controlling and
        completion. How? Do you want to manage each and every step of your life?
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

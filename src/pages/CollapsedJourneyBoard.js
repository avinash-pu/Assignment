import GroupComponent from "../components/GroupComponent";
import RightSidebar from "../components/RightSidebar";
import StructurePointersContainer from "../components/StructurePointersContainer";
import "./CollapsedJourneyBoard.css";

const CollapsedJourneyBoard = () => {
  return (
    <div className="collapsed-journey-board">
      <section className="frame-parent">
        <GroupComponent
          logo1="/logo-1@2x.png"
          group1098="/group-1098@2x.png"
          searchIcon="/vector@2x.png"
          ellipseDiv={false}
        />
        <RightSidebar />
      </section>
      <StructurePointersContainer />
    </div>
  );
};

export default CollapsedJourneyBoard;

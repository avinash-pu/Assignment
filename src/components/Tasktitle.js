
import "../pages/ExpandedJourneyBoard.css";
const TaskTitle = ({ eachTask = "" }) => {
    return (
        
        <div>
        <div className="explore-the-world-container">
        <ul className="explore-the-world-of-managemen">
          <li>{eachTask.task_title}</li>
        </ul>
      </div>
      <div className="technical-project-management-container">
                        <ul className="technical-project-management2">
            {eachTask.assets.map(eachAAsset => (
                        <div>
              <li className="technical-project-management3">
              {" "}
              {eachAAsset.asset_title}
                          </li>
      
      </div>
      ))}
      </ul>
      </div>
      </div>
    )
}
export default TaskTitle
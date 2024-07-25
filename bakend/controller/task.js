const Project = require('../modal/task');


// Get all employees
const getTask= async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({data:projects});
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
};


module.exports = {
    getTask,
   
};


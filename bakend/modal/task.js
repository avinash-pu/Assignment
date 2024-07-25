const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  category: String,
  cid: Number,
  commitment: String,
  commitment_type: String,
  deadline: String,
  description: String,
  faqs: [String],
  globalTags: [String],
  isActive: Boolean,
  lastposttime: Number,
  learning_outcomes: [String],
  mainPid: Number,
  postcount: Number,
  pre_requisites: [String],
  project_image: String,
  short_description: String,
  slug: String,
  status: String,
  tasks: [
    {
      task_id: Number,
      task_title: String,
      task_description: String,
      status: String,
      assets: [
        {
          asset_id: Number,
          asset_title: String,
          asset_description: String,
          asset_content: String,
          asset_type: String,
          asset_content_type: String
        }
      ]
    }
  ],
  tid: Number,
  timestamp: Number,
  title: String,
  type: String,
  uid: Number,
  viewcount: Number,
  publishedAt: Number
});

const Project = mongoose.model('task', TaskSchema);
module.exports = Project;

const Task = require("../models/taskModel");

const createTask = async (taskData) => {
  const task = await Task.create(taskData);
  return task;
};

const getTasks = async (filters) => {
  const tasks = await Task.find(filters)
    .populate("assignedTo")
    .populate("createdBy");
  return tasks;
};

const updateTask = async (taskId, updateData) => {
  const task = await Task.findByIdAndUpdate(taskId, updateData, { new: true });
  if (!task) {
    throw new Error("Task not found");
  }
  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByIdAndDelete(taskId);
  if (!task) {
    throw new Error("Task not found");
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
